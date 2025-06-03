import React from 'react'


import GoogleProjectsMap from '../components/GoogleProjectsMap';

const CompletedProjects = () => {
  return (
    <div className="p-4">
    <h1 className="mt-12 text-4xl text-center font-bold text-primaryBlue mb-4">
        გამორჩეული პროექტები
        </h1>
    <GoogleProjectsMap/>
  </div>
   
  )
}

export default CompletedProjects