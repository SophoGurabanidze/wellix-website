import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ShortHistory from './pages/ShortHistory';
import CompanyToday from './pages/CompanyToday';
import OurAdvantages from './pages/OurAdvantages';
import Vendors from './pages/Vendors';
import ReferenceClients from './pages/ReferenceClients';
import BuildingWells from './pages/BuildingWells';
import Maintenance from './Pages/Maintenance';
import Conservation from './Pages/Conservation';
import OngoingProjects from './pages/OngoingProjects';
import CompletedProjects from './pages/CompletedProjects';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import Services from './Pages/Services';
import Projects from './Pages/Projects';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<Home />} />
        <Route path="/about/short-history" element={<ShortHistory />} />
        <Route path="/about/company-today" element={<CompanyToday />} />
        <Route path="/about/our-advantages" element={<OurAdvantages />} />
        <Route path="/about/vendors" element={<Vendors />} />
        <Route path="/about/reference-clients" element={<ReferenceClients />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/building-new-wells" element={<BuildingWells />} />
        <Route path="/services/maintenance" element={<Maintenance />} />
        <Route path="/services/conservation" element={<Conservation />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/completed" element={<CompletedProjects />} />
        <Route path="/projects/ongoing" element={<OngoingProjects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}


