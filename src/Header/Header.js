import React from 'react';
import { NavLink } from 'react-router-dom';
import xWing from '../images/x-wing.svg';
// import nonChunkyDeathStar from '../images/non-chunky-deathstar.svg';
import chunkyDeathStar from '../images/chunky-death-star.svg'
import bobaFett from '../images/boba-fett.svg';
import './Header.css';

const Header = () => {

  return (
    <header className='Header'>
      <NavLink to='/people' className='nav'><img src={bobaFett}/>People</NavLink>
      <NavLink to='/planets' className='nav'><img src={chunkyDeathStar} className='deathstar'/>Planets</NavLink>
      <NavLink to='/vehicles' className='nav'><img src={xWing} />Vehicles</NavLink>
    </header>
  )
}

export default Header;