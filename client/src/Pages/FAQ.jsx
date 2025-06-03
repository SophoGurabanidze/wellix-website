import React from 'react'
import data from '../data/FAQ.json';

import Accordion from '../components/Accordion'

const FAQ = () => {

  return (
    <div className='mb-12'>
       <h1 className="mt-12 text-4xl text-center font-bold text-primaryBlue mb-12">
          ხშირად დასმული კითხვები
        </h1>
      <Accordion data={data}/>
    </div>
  )
}

export default FAQ