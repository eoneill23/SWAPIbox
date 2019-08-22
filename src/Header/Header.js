import React from 'react';
import { NavLink } from 'react-router-dom';
import xWing from '../images/x-wing.svg';
import './Header.css';

const Header = () => {

  return (
    <header className='Header'>
      <NavLink to='/people' className='nav'>People</NavLink>
      <NavLink to='/planets' className='nav'><img />Planets</NavLink>
      <NavLink to='/vehicles' className='nav'><img src={xWing} />Vehicles</NavLink>
    </header>
  )
}

export default Header;