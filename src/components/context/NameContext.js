import React, { createContext, useState, useContext } from 'react';

const nameContext = createContext('');

export default function nameProvider({ children }) {
  const [name, setName] = useState('');

  return (
    <nameContext.Provider
      value={{
        name,
        setName
      }}
    >
      {children}
    </nameContext.Provider>
  );
}

export function useName() {
  const context = useContext(nameContext);
  const { name, setName } = context;
  return { name, setName };
}
