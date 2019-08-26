import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './Cards.css';

const Cards = ({data, favoriteCard, favoritesArray, type}) => {
  let cardsList = data.map(datum => {
    const { name } = datum;
    return <Card key={name + Date.now()} id={name + Date.now()} data={datum} favoriteCard={favoriteCard} favoritesArray={favoritesArray} />
    }
  )

  return (
    <div className='Cards'>
      {type === 'favorites' && !favoritesArray.length && <h3 className='no-favorites'>You haven't favorited any cards yet. Visit the links above to choose your favorite cards!</h3>}
      {cardsList}
    </div>
  )

}

export default Cards;


Cards.propTypes = {
  data: PropTypes.array,
  favoriteCard: PropTypes.func,
  favoritesArray: PropTypes.array
}