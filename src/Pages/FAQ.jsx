import React from 'react'
import data from '../data/FAQ.json';

import Accordion from '../components/Accordion'

const FAQ = () => {

  return (
    <div>
      <Accordion data={data}/>
    </div>
  )
}

export default FAQ