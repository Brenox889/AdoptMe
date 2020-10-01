import React, { useState } from 'react';

import { Container } from './styles';

import pet from '../../assets/icons/pawprint.png';

export default function SearchParams() {
  const [location, setLocation] = useState('');

  return (
    <Container>
      <img src={pet} alt="pet" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
      </form>
    </Container>
  );
}
