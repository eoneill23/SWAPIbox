import React from 'react';
import './Crawler.css'

const Crawler = ({openingText}) => {
  
  return(
    <section className='Crawler'>
      <div className='crawl-text'>
        <p>{openingText}</p>
      </div>
    </section>
  )
}

export default Crawler;