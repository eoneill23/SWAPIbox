import React from 'react';
import PropTypes from 'prop-types';
import './Crawler.css'

const Crawler = ({data}) => {
  const {crawl, title, release} = data;
  return(
    <>
    <div className='fade'></div>
    <section className='Crawler'>
      <div className='crawl-text'>
        <p>{crawl}</p>
        <p className='subtext'>{title}</p>
        <p className='subtext'>{release}</p>
      </div>
    </section>
    </>
  )
}

export default Crawler;

Crawler.propTypes = {
  data : PropTypes.object
}