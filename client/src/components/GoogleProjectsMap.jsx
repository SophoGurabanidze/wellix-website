import { GoogleMap, Marker, InfoWindow, OverlayView } from '@react-google-maps/api';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useProjects } from "../hooks/useProjects";

const center = { lat: 42.3154, lng: 43.3569 };

const mapOptions = {
  styles: [
    { featureType: "all", elementType: "geometry", stylers: [{ color: "#e3e8f4" }] },
    { featureType: "water", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
    { featureType: "administrative.country", elementType: "geometry.stroke", stylers: [{ color: "#ffffff" }, { weight: 3 }, { visibility: "on" }] },
    { featureType: "road", stylers: [{ visibility: "off" }] },
    { featureType: "poi", stylers: [{ visibility: "off" }] },
    { featureType: "transit", stylers: [{ visibility: "off" }] },
    { featureType: "administrative", elementType: "labels.text.fill", stylers: [{ color: "#4a4a4a" }] },
    { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
    { featureType: "administrative.country", elementType: "labels.text", stylers: [{ visibility: "off" }] },
    { featureType: "water", elementType: "labels.text", stylers: [{ visibility: "off" }] }
  ],
  disableDefaultUI: true,
  zoomControl: true
};

export default function GoogleProjectsMap() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const mapRef = useRef(null);
  const originalCenter = useMemo(() => center, []);
  const [selectedProject, setSelectedProject] = useState(null);
  const [zoom, setZoom] = useState(7);

  //  React Query fetch
  const { data: projects = [], isLoading, error } = useProjects();

  useEffect(() => {
    const updateZoom = () => setZoom(window.innerWidth < 640 ? 6 : 7);
    updateZoom();
    window.addEventListener("resize", updateZoom);
    return () => window.removeEventListener("resize", updateZoom);
  }, []);

  const customIcon = useMemo(() => ({
    url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="#3aafa9">
        <circle cx="24" cy="24" r="10" fill="#3aafa9" stroke="white" stroke-width="3"/>
        <circle cx="24" cy="24" r="4" fill="white"/>
      </svg>
    `),
    scaledSize: new window.google.maps.Size(40, 40),
  }), []);

  const handleMarkerClick = (project) => {
    setSelectedProject(project);
    const offsetLat = window.innerWidth < 640 ? project.position.lat + 0.18 : project.position.lat + 0.25;
    mapRef.current?.panTo({ lat: offsetLat, lng: project.position.lng });
  };

  if (isLoading) return <p className="text-2xl text-center  text-primaryBlue  mt-4">{t("loading")}</p>;
  if (error) return <p className="text-center mt-4 text-red-600">{t("error.loading_projects")}</p>;

  return (
    <div className="relative w-full h-[500px]">
      <div className="absolute top-0 left-0 w-full h-22 bg-white z-10" />
      <div className="absolute bottom-0 left-0 w-full h-20 bg-white z-10" />
      <div className="absolute inset-0 z-0">
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={center}
          zoom={zoom}
          options={mapOptions}
          onLoad={(map) => (mapRef.current = map)}
        >
          {projects.map((project) => {
            const offsetY = (project.labelOffsetY ?? 0) * 12;
            const offsetX = (project.labelOffsetX ?? 0) * 10;
            const lineHeight = 10 + Math.abs(project.labelOffsetY ?? 0) * 6;
            const isBelow = (project.labelOffsetY ?? 0) < 0;

            return (
              <div key={project._id}>
                <Marker
                  position={project.position}
                  icon={customIcon}
                  onClick={() => handleMarkerClick(project)}
                />
                <OverlayView
                  position={project.position}
                  mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                >
                  <div className="flex flex-col items-center" style={{ transform: `translate(${offsetX}px, ${-offsetY - 40}px)` }}>
                    {isBelow && <div className="w-0.5 bg-[#3aafa9]" style={{ height: `${lineHeight}px`, marginBottom: "4px" }} />}
                    <div className="inline-block bg-[#3aafa9] text-white px-3 py-1 rounded-md shadow text-xs font-semibold whitespace-nowrap leading-none">
                      {project.title?.[lang] ?? project.title}
                    </div>
                    {!isBelow && <div className="w-0.5 bg-[#3aafa9] mt-1" style={{ height: `${lineHeight}px` }} />}
                  </div>
                </OverlayView>
              </div>
            );
          })}
          {selectedProject && (
            <InfoWindow
              position={selectedProject.position}
              onCloseClick={() => {
                setSelectedProject(null);
                mapRef.current?.panTo(originalCenter);
              }}
            >
              <div className="w-[280px] h-[140px] pt-2 pb-3 px-3 bg-white rounded-lg shadow">
                <div className="overflow-y-auto h-full pr-1">
                  <h2 className="text-sm font-semibold text-teal-700 mb-1">
                    {selectedProject.title?.[lang] ?? selectedProject.title}
                  </h2>
                  <p className="text-sm text-gray-700 whitespace-pre-line leading-snug">
                    {selectedProject.description?.[lang] ?? selectedProject.description}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {t("map.year")} {selectedProject.yearCompleted}
                  </p>
                </div>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>
    </div>
  );
}
