import React from 'react';
import './Crawler.css'

const Crawler = ({data}) => {
  const {crawl, title, release} = data;
  return(
    <section className='Crawler'>
      <div className='crawl-text'>
        <p>{crawl}</p>
        <p className='subtext'>{title}</p>
        <p className='subtext'>{release}</p>
      </div>
    </section>
  )
}

export default Crawler;