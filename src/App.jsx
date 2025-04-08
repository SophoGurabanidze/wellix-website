import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./components/Layout";
import ErrorPage from "./Pages/ErrorPage";

import Home from "./pages/Home";
import ShortHistory from "./pages/ShortHistory";
import CompanyToday from "./pages/CompanyToday";
import OurAdvantages from "./Pages/OurAdvantages";
import Partners from "./Pages/Partners";

import Services from "./Pages/Services";
import BuildingWells from "./pages/BuildingWells";
import Maintenance from "./Pages/Maintenance";
import Conservation from "./Pages/Conservation";

import Projects from "./Pages/Projects";
import CompletedProjects from "./pages/CompletedProjects";
import ProjectDetail from "./pages/ProjectDetail";

import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
          
          <Route index element={<Home />} />

        
          <Route path="about">
            <Route path="short-history" element={<ShortHistory />} />
            <Route path="company-today" element={<CompanyToday />} />
            <Route path="our-advantages" element={<OurAdvantages />} />
            <Route path="reference-clients" element={<Partners />} />
          </Route>

        
          <Route path="services" element={<Services />} />
          <Route path="building-new-wells" element={<BuildingWells />} />
          <Route path="maintenance" element={<Maintenance />} />
          <Route path="conservation" element={<Conservation />} />

         
          <Route path="projects" element={<Projects />} />
          <Route path="projects/completed" element={<CompletedProjects />} />
          <Route path="projects/:id" element={<ProjectDetail />} />

         
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />

          
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

