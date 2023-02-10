import React from 'react'
import { portfolio } from '../consts'

export default function Portfolio() {
  return (
    <div id='portfolio' className=''>
      <div className="text-myteal text-[30px] mt-20 font-medium">
        Portfolio - My WebSites
      </div>
      <div className="my-20">
        {portfolio.map((site, idx) => (
          <a href={site.url} target="_blank">
            <div className='block border-2 border-myteal p-4 my-4 rounded-lg bg-mydark list-none sm:flex justify-between'>
              <ul>
                <li className='text-grd justify-start md:my-0 py-2'>
                  {site.title}
                </li>
              </ul>
              <div className='text-mylight justify-end items-end md:my-0 py-2'>{site.desc}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
