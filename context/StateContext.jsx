import React, { useContext, useEffect } from 'react';
import { createContext, useState, useCallback } from 'react';

const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [state, setState] = useState({ status: 'IDLE', data: [], error: null });

  const fetchPalletes = useCallback(async () => {
    try {
      setState(prev => ({ ...prev, status: 'LOADING' }));

      const response = await fetch(
        'https://color-palette-api.kadikraman.vercel.app/palettes',
      );

      if (response?.ok) {
        const data = await response.json();

        if (!data?.length) {
          setState(prev => ({ ...prev, status: 'SUCCESS', data: [] }));
          return;
        }

        setState(prev => ({ ...prev, status: 'SUCCESS', data }));
        return;
      }

      throw new Error('something went wrong!');
    } catch (error) {
      setState(prev => ({
        ...prev,
        status: 'ERROR',
        error: error?.message || 'Something went wrong!',
      }));
    }
  }, []);

  useEffect(() => {
    fetchPalletes();
  }, [fetchPalletes]);

  console.log({ state });

  return (
    <StateContext.Provider value={{ ...state, fetchPalletes, setState }}>
      {children}
    </StateContext.Provider>
  );
};

const useData = () => {
  return useContext(StateContext);
};

export { StateProvider, useData };
