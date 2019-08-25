import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import xWing from '../images/x-wing.svg';
import chunkyDeathStar from '../images/chunky-death-star.svg';
import bobaFett from '../images/boba-fett.svg';
import nonChunkyHut from '../images/non-chunky-hut.svg';
import nonChunkyFavoriteLightsaber from '../images/non-chunky-favorite-lightsaber.svg';
import './Header.css';

const Header = ({data}) => {
  const favorites = data;
  return (
    <header className='Header'>
      <h1>SWAPIbox</h1>
      <div className='Header-links'>
        <NavLink to='/' className='nav'><img className='small-header-img' src={nonChunkyHut} />Home</NavLink>
        <NavLink to='/people' className='nav'><img src={bobaFett} />People</NavLink>
        <NavLink to='/planets' className='nav'><img src={chunkyDeathStar} className='deathstar'/>Planets</NavLink>
        <NavLink to='/vehicles' className='nav'><img src={xWing} />Vehicles</NavLink>
        <NavLink to='/favorites' className='nav'><img className='small-header-img smaller' src={nonChunkyFavoriteLightsaber} />Favorites{favorites.length}</NavLink>
      </div>
    </header>
  )
}

Header.propTypes = {
  data: PropTypes.array
}

export default Header;