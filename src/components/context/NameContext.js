import React, { createContext, useState, useContext } from 'react';

const NameContext = createContext();

export default function NameProvider({ children }) {
  const [name, setName] = useState();
  const value = { name, setName };

  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
}

// export default function NameProvider({ children }) {
//   const [name, setName] = useState('');
//   const value = { name, setName };

//   return <NameContext.Provider value={value}>{children}</NameContext.Provider>;
// }

export function useName() {
  const context = useContext(NameContext);
  const { name, setName } = context;
  return { name, setName };
}
