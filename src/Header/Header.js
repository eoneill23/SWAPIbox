import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {

  return (
    <header>
      <NavLink to='/people'>People</NavLink>
      <NavLink to='/planets'>Planets</NavLink>
      <NavLink to='/vehicles'>Vehicles</NavLink>
    </header>
  )
}

export default Header;