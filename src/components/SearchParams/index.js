import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from '../useDropdown';

import { Container } from './styles';

import pawprint from '../../assets/icons/pawprint.png';

export default function SearchParams() {
  const [location, setLocation] = useState('');
  const [animal, AnimalDropdown] = useDropdown('Choose a Pet', 'dog', ANIMALS);
  const [pets, setPets] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [breed, BreedDropdown, setBreed] = useDropdown(
    'Choose the breed',
    'breed',
    breeds
  );

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });
    setPets(animals || []);
  }
  useEffect(() => {
    setBreeds([]);
    setBreed('');
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
        <label htmlFor="location">Location</label>
        <input
          id="location"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </Container>
  );
}
