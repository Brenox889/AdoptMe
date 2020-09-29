import React from 'react';

import useName from '../context/NameContext';

import logo from '../../assets/logoAdopt.png';

import { Header } from './styles';

export default function NavBar() {
  const { name, setName } = useName();

  return (
    <Header>
      {}
      <img src={logo} />
    </Header>
  );
}
