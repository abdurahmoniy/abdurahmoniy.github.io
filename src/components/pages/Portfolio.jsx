import React from 'react';
import { portfolio } from '../consts';

const Portfolio = () => {
  return (
    <div id='projects' className='px-4 md:px-8 py-12'>
      <h2 className='text-3xl md:text-5xl font-bold text-myteal mb-8'>Projects</h2>
      <div className='grid gap-6 md:grid-cols-2'>
        {portfolio.map((site, index) => (
          <a key={index} href={site.url} target='_blank' rel='noopener noreferrer'>
            <div className='border border-gray-300 rounded-lg overflow-hidden hover:shadow-xl'>
              <img
                src={site.image}
                alt={site.title}
                className='w-full h-40 object-cover object-center'
              />
              <div className='p-4'>
                <h3 className='text-lg font-semibold text-myteal mb-2'>{site.title}</h3>
                <p className='text-gray-700'>{site.desc}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
