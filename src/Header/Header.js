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
        <NavLink exact to='/' className='nav' activeClassName='red active'><img className='small-header-img' alt='hut indicating home page' src={nonChunkyHut} />Home</NavLink>
        <NavLink to='/people' className='nav' activeClassName='yellow active'><img src={bobaFett} alt='Boba Fett helmet indicating people page'/>People</NavLink>
        <NavLink to='/planets' className='nav' activeClassName='green active'><img src={chunkyDeathStar} alt='Deathstar indicating planet page' className='deathstar'/>Planets</NavLink>
        <NavLink to='/vehicles' className='nav' activeClassName='blue active'><img src={xWing} alt='Xwing indicating vehicle page' />Vehicles</NavLink>
        <NavLink to='/favorites' className='nav' activeClassName='purple active'><img className='small-header-img smaller' src={nonChunkyFavoriteLightsaber} alt='light saber indicating favorite page' />Favorites | {favorites.length}</NavLink>
      </div>
    </header>
  )
}


export default Header;
  
Header.propTypes = {
  data: PropTypes.array
}