import React from 'react';
import { Link } from '@reach/router';

import { PetContainer, Info } from './styles';

const Pet = (props) => {
  const { name, animal, breed, media, location, id } = props;

  let prof = 'http://placecorgi.com/300/300';

  if (media.length) {
    prof = media[0].small;
  }
  return (
    <PetContainer>
      <Link to={`/details/${id}`}>
        <figure>
          <img src={prof} alt={name} />
        </figure>
        <Info>
          <h1>{name}</h1>
          <h2>{animal}</h2>
          <p>{`${breed}-${location}`}</p>
        </Info>
      </Link>
    </PetContainer>
  );
};
export default Pet;
