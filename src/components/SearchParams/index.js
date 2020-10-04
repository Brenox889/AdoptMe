import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from '../useDropdown';

import { Container } from './styles';

import pawprint from '../../assets/icons/pawprint.png';

export default function SearchParams() {
  const [location, setLocation] = useState('');
  const [animal, AnimalDropdown] = useDropdown('dog', ANIMALS);
  const [breeds, setBreeds] = useState([]);
  const [BreedDropdown, SetBreed] = useDropdown('breed', breeds);

  useEffect(() => {
    setBreeds([]);
    SetBreed('');
    pet.breeds(animal).then(({ breeds }) => {
      const breedStrings = breeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
  }, [animal]);

  return (
    <Container>
      <img src={pawprint} alt="pet" />
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
        <SetBreed />
        <button>Submit</button>
      </form>
    </Container>
  );
}
