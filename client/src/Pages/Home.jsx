import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import slider1 from "../assets/images/Slider1.jpeg";

const images = [slider1];

const Home = () => {
  const [currentBlog, setCurrentBlog] = useState(0);
  const [blogPosts, setBlogPosts] = useState([]);
  const { t, i18n } = useTranslation();


  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/blogs`);
        const data = await res.json();
        setBlogPosts(data);
      } catch (err) {
        console.error("Failed to fetch blogs", err);
      }
    };

    fetchBlogs();

    const blogSlider = setInterval(() => {
      setCurrentBlog((prev) => (prev + 1) % blogPosts.length);
    }, 4000);

    return () => clearInterval(blogSlider);
  }, [blogPosts.length]);

  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <div className="relative w-full h-[500px] overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Slide"
            className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 opacity-100"
          />
        ))}
      </div>

      {/* About Us Preview */}
      <section className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-primaryBlue">{t("home.about_title")}</h2>
        <p className="mb-6 text-gray-500">{t("home.about_description")}</p>
        <Link to="about/about-us" className="inline-block bg-cyan-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          {t("home.about_read_more")}
        </Link>
      </section>

      {/* Blog Cards */}
      <section className="w-full bg-gray-100 px-4 sm:px-8 lg:px-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-primaryBlue">{t("home.blog")}</h2>
        <div className="relative w-full overflow-hidden">
          <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${currentBlog * 100}%)` }}>
            {blogPosts.map((post) => (
              <div key={post._id} className="min-w-full flex flex-col md:flex-row items-center gap-6 p-6">
                <div className="w-full md:w-1/2">
                  <img src={post.image} alt={post.title[i18n.language]} className="w-full h-[300px] md:h-[400px] rounded-lg shadow-md" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                  <h3 className="text-2xl font-semibold mt-4 md:mt-0 text-gray-700">{post.title[i18n.language]}</h3>
                  <p className="text-gray-600 line-clamp-3 mt-2">{post.text[i18n.language]}</p>
                  <Link to={`/blog/${post._id}`} className="mt-4 text-cyan-600 hover:underline">
                    {t("home.read_more")}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-primaryBlue">{t("home.services_title")}</h2>
          <p className="mb-6 text-gray-500">{t("home.services_description")}</p>
          <Link to="/services" className="inline-block bg-cyan-600 text-white px-6 py-2 rounded hover:bg-cyan-700 transition">
            {t("home.services_button")}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
