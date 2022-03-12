import { useState, useEffect } from 'react';
import { api } from 'services/api';
import React, { createContext, useContext } from 'react';

interface StoreContextData {
  file: File | null;
  setFile: (e) => void;
  result: Array<any>;
  setResult: (e) => void;
}

export const StoreContext = createContext<StoreContextData>(
  {} as StoreContextData
);

export function StoreProvider({ children }) {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const provider = {
    file: file,
    setFile: setFile,
    result: result,
    setResult,
  };

  return (
    <StoreContext.Provider value={provider}>{children}</StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  return context;
}
