import React from 'react'

// import GeorgiaProjectsMap from '../components/GeorgianPorjectsMap'
import GoogleProjectsMap from '../components/GoogleProjectsMap';

const CompletedProjects = () => {
  return (
    <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">შესრულებული პროექტები</h1>
    <GoogleProjectsMap/>
  </div>
   
  )
}

export default CompletedProjects