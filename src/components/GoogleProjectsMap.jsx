import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useState } from 'react';

// const containerStyle = {
//   width: '100%',
//   height: '600px',
// };

const center = {
  lat: 42.3154, 
  lng: 43.3569,
};

const projects = [
  {
    id: 1,
    title: 'Tbilisi Municipal Well #1',
    description: 'Completed in 2022. Supplies water to central Tbilisi.',
    position: { lat: 41.7151, lng: 44.8271 },
  },
  {
    id: 2,
    title: 'Kutaisi Agricultural Well',
    description: 'Completed in 2023 for irrigation.',
    position: { lat: 42.2679, lng: 42.7180 },
  },
  {
    id: 3,
    title: 'Batumi Coastal Well',
    description: 'Tourism support project.',
    position: { lat: 41.6406, lng: 41.6367 },
  },
];

export default function GoogleProjectsMap() {
  const [selectedProject, setSelectedProject] = useState(null);

  // const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
    <div className="relative w-full h-[500px]">
   
    <div className="absolute top-0 left-0 w-full h-20 bg-white z-10" />
  
    <div className="absolute bottom-0 left-0 w-full h-20 bg-white z-10" />
  
   
    <div className="absolute inset-0 z-0">
      
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={center}
          zoom={7}
        >
          {projects.map((project) => (
            <Marker
              key={project.id}
              position={project.position}
              onClick={() => setSelectedProject(project)}
            />
          ))}
  
          {selectedProject && (
            <InfoWindow
              position={selectedProject.position}
              onCloseClick={() => setSelectedProject(null)}
            >
              <div className="p-2 max-w-xs">
                <h2 className="font-bold">{selectedProject.title}</h2>
                <p className="text-sm">{selectedProject.description}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      {/* </LoadScript> */}
    </div>
  </div>
  );
}
