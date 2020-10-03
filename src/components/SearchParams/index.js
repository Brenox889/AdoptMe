import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';
import useDropdown from '../useDropdown';

import { Container } from './styles';

import pet from '../../assets/icons/pawprint.png';

export default function SearchParams() {
  const [location, setLocation] = useState('');
  const [animal, AnimalDropdown] = useDropdown('dog', ANIMALS);
  const [breed, BreedDropdown] = useDropdown('breeds', breeds);

  return (
    <Container>
      <img src={pet} alt="pet" />
      <span>Encontre o novo membro da familía</span>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          id="location"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <AnimalDropdown />
        <BreedDropdown />
        {/* <select
          value={animal}
          onChange={(e) => setAnimal(e.target.value)}
          onBlur={(e) => setAnimal(e.target.value)}
        >
          <option>Choose a Animal</option>
          {ANIMALS.map((animal) => (
            <option key={animal} value={animal}>
              {animal}
            </option>
          ))}
        </select> */}
      </form>
    </Container>
  );
}
