import React from 'react';

import { Container } from './styles';

import { useName } from '../context/NameContext';

const Home = () => {
  // const [name, setName] = useName('');

  return (
    <Container>
      {/* <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="name">
          <input
            id="name"
            placeholder="Enter with your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form> */}
    </Container>
  );
};

export default Home;
