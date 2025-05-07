import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import logo from "./assets/wellix-logo.jpeg";
import globeLeft from "./assets/globe-left.png";
import globeRight from "./assets/globe-right.png";


import { useState,useEffect } from 'react';
import Layout from "./components/Layout";
import ErrorPage from "./Pages/ErrorPage";

import Home from "./Pages/Home";
import BlogDetail from "./Pages/BlogDetail";
import ShortHistory from "./Pages/ShortHistory";
import CompanyToday from "./Pages/CompanyToday"
import OurAdvantages from "./Pages/OurAdvantages";
import Partners from "./Pages/Partners";

import Services from "./Pages/Services";
import BuildingWells from "./Pages/BuildingWells";
import Maintenance from "./Pages/Maintenance";
import Conservation from "./Pages/Conservation";

import Projects from "./Pages/Projects";
import CompletedProjects from "./Pages/CompletedProjects";
import ProjectDetail from "./Pages/ProjectDetail";

import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import AddProject from "./Pages/AddProject";
import EditProject from "./Pages/EditProject";
import ProtectedRoute from "./components/ProtectedRoute";
import ChangePassword from "./Pages/ChangePassword";

import AdminBlogForm from "./Pages/AdminBlogForm";
import AdminBlogList from "./Pages/AdminBlogList";
import AdminEditBlog from "./Pages/AdminEditBlog";

import FAQ from "./Pages/FAQ";
import Contact from "./Pages/Contact";
import ThankYou from "./Pages/ThankYou";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";


export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.classList.add("loading");
  
    const preloadImages = [logo, globeLeft, globeRight].map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = resolve;
      });
    });
  
    Promise.all(preloadImages).then(() => {
      document.body.classList.remove("loading");
      document.body.classList.add("loaded");

      setLoading(false);

    });
  }, []);

  if (loading) return <Loader />;
  return (
    <Router>
        <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
          
          <Route index element={<Home />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        
          <Route path="about">
            <Route path="short-history" element={<ShortHistory />} />
            <Route path="about-us" element={<CompanyToday />} />
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
          <Route path="/thank-you" element={<ThankYou />} />


          <Route path="/admin" element={<Login />} />
      <Route element={<ProtectedRoute />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/change-password" element={<ChangePassword />} />
          <Route path="/admin/projects/new" element={<AddProject />} />
          <Route path="/admin/projects/edit/:id" element={<EditProject />} />
          <Route path="/admin/blog/new" element={<AdminBlogForm />} />
          <Route path="/admin/blogs" element={<AdminBlogList />} />
          <Route path="/admin/blog/edit/:id" element={<AdminEditBlog />} />
      </Route>

<Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

