import React from 'react';

import useName from '../context/NameContext';

import logo from '../../assets/logoAdopt.png';

import { Header } from './styles';

export default function NavBar() {
  const { name } = useName('');

  return (
    <Header>
      {/* <h3> Bem vindo {name ? name : ''}</h3> */}
      <img src={logo} alt="Adopt Me" />
    </Header>
  );
}
