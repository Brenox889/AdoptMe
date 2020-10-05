import React from 'react';
import Pet from '../Pet';

const Results = ({ pets }) => {
  return (
    <Container>
      {pets.map((pet) => {
        return (
          <Pet
            animal={pet.type}
            key={pet.id}
            name={pet.name}
            breed={pet.breeds.primary}
            media={pet.photos}
            location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
            id={pet.id}
          />
        );
      })}
      ;
    </Container>
  );
};

export default Results;
