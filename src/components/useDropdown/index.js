import React, { useState } from 'react';

const useDropdown = (defaultState, options) => {
  const [state, setState] = useState(defaultState);

  const Dropdown = () => {
    <select
      value={state}
      onChange={(e) => setState(e.target.value)}
      onBlur={(e) => setState(e.target.value)}
      disabled={!options.lenght}
    >
      <option>Choose a option</option>
      {options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>;
  };
  return [state, Dropdown];
};

export default useDropdown;
