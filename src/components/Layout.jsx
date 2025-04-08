
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet /> {/* Nested routes will render here */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
