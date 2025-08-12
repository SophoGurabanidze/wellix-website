import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
// eslint-disable-next-line no-unused-vars
import { motion, useReducedMotion } from "framer-motion";
import slider1 from "../assets/images/Slider1.jpeg";
import { useBlogs } from "../hooks/useBlogs";
import usePageSEO from "../hooks/usePageSEO";
import { makeFadeUp, stagger } from "../hooks/useAnimations";

const images = [slider1];

const Home = () => {
  const { t, i18n } = useTranslation();
  const prefersReduced = useReducedMotion();
  const fadeUp = makeFadeUp(prefersReduced);

  const { data: blogPosts = [], isLoading } = useBlogs();
  const [currentBlog, setCurrentBlog] = useState(0);

  const seo = {
    en: {
      title: "Wellix | Construction of an artesian well ",
      description:
        "High-standard borehole construction and installation; services for borehole maintenance, rehabilitation, and conservation.",
    },
    ka: {
      title: "ველიქსი | არტეზიული ჭაბურღილის მოწყობა",
      description:
        "ჭაბურღილის მაღალი სტანდარტით მშენებლობა-მოწყობა; ჭაბურღილის მოვლა-პატრონობის, ჭაბურღილის რეაბილიტაციისა და ჭაბურღილის კონსერვაციის სერვისები",
    },
  };

  usePageSEO(seo);

  useEffect(() => {
    if (!blogPosts.length) return;
    const blogSlider = setInterval(
      () => setCurrentBlog((prev) => (prev + 1) % blogPosts.length),
      4000
    );
    return () => clearInterval(blogSlider);
  }, [blogPosts.length]);

  return (
    <div className="flex flex-col gap-16">
      {/* Hero */}
      <section className="relative w-full h-[500px] overflow-hidden z-0">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          {images.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt="Slide"
              className="absolute top-0 left-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: prefersReduced ? 1 : 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}
          <div className="absolute inset-0 bg-black/35" />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-3xl">
            
            {/* <motion.h1 variants={fadeUp} className="text-white text-4xl md:text-5xl font-bold drop-shadow">
              {t("home.hero_title", { defaultValue: "დროში გამოცდილი ხარისხი" })}
            </motion.h1> */}
            {/* <motion.div variants={fadeUp} className="mt-6">
              <Link to="projects/completed" className="inline-block bg-cyan-600 text-white px-6 py-2 rounded hover:bg-cyan-700 transition">
                {t("home.projects_button",{defaultValue:"გამორჩეული პროექტები"})}
              </Link>
            </motion.div> */}
          </motion.div>
        </div>
      </section>

      
      <motion.section
        variants={stagger}
        initial="hidden"
        animate="show"   
        className="container mx-auto px-6 text-center"
      >
        <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-4 text-primaryBlue">
          {t("home.about_title")}
        </motion.h2>
        <motion.p variants={fadeUp} className="mb-6 text-gray-500">
          {t("home.about_description")}
        </motion.p>
        <motion.div variants={fadeUp}>
          <Link
            to="about/about-us"
            className="inline-block bg-cyan-600 text-white px-6 py-2 rounded hover:bg-cyan-700 transition"
          >
            {t("home.about_read_more")}
          </Link>
        </motion.div>
      </motion.section>

      {/* Blog slider */}
      <section className="w-full bg-gray-100 px-4 sm:px-8 lg:px-16 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-primaryBlue">{t("home.blog")}</h2>
        {isLoading ? (
          <p className="text-center">{t("loadingBlogs")}</p>
        ) : (
          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentBlog * 100}%` }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ willChange: "transform" }}
            >
              {blogPosts.map((post) => (
                <motion.div
                  key={post._id}
                  className="min-w-full flex flex-col md:flex-row items-center gap-6 p-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, y: prefersReduced ? 0 : 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={post.image}
                      alt={post.title[i18n.language]}
                      className="w-full h-[300px] md:h-[400px] rounded-lg shadow-md object-cover"
                      loading="lazy"
                    />
                  </motion.div>

                  <motion.div
                    className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
                    initial={{ opacity: 0, y: prefersReduced ? 0 : 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <h3 className="text-2xl font-semibold mt-4 md:mt-0 text-gray-700">
                      {post.title[i18n.language]}
                    </h3>
                    <p className="text-gray-600 line-clamp-3 mt-2">{post.text[i18n.language]}</p>
                    <Link to={`/blog/${post._id}`} className="mt-4 text-cyan-600 hover:underline">
                      {t("home.read_more")}
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </section>

      {/* Services */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="py-16"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-4 text-primaryBlue">
            {t("home.services_title")}
          </motion.h2>
          <motion.p variants={fadeUp} className="mb-6 text-gray-500">
            {t("home.services_description")}
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              to="/services"
              className="inline-block bg-cyan-600 text-white px-6 py-2 rounded hover:bg-cyan-700 transition"
            >
              {t("home.services_button")}
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
