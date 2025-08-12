import React from "react";
import { useTranslation } from "react-i18next";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import image1 from "../assets/images/About1.png";
import image2 from "../assets/images/Brothers.jpeg";
import usePageSEO from "../hooks/usePageSEO";
import { makeFadeUp, stagger, viewportEarly } from "../hooks/useAnimations";

const seo = {
  en: {
    title: "About Us | Wellix",
    description:
      "Learn about Wellix’s mission, values, and experience delivering  premium water well services across Georgia.",
  },
  ka: {
    title: "ჩვენ შესახებ | ველიქსი",
    description:
      "გაიგეთ მეტი ველიქსის შესახებ — ჩვენი ისტორია, მისია და პრემიუმ მომსახურების გამოცდილება საქართველოში.",
  },
};

const CompanyToday = () => {
  const { t } = useTranslation();
  const shouldReduce = useReducedMotion();
  const fadeUp = makeFadeUp(shouldReduce);

  usePageSEO(seo);
  const timelineText = t("company_today.timeline", { returnObjects: true }) || [];

  // Parallax for hero bg
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, shouldReduce ? 0 : -60]);
  const overlayOpacity = useTransform(scrollY, [0, 300], [0.4, 0.6]);

  return (
    <div className="overflow-x-clip">
      {/* Hero */}
      <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden z-0">
        <motion.div
          style={{ y, pointerEvents: "none" }}
          className="absolute inset-0 -z-10"
          aria-hidden
        >
          <div
            className="absolute inset-0 bg-cover bg-center scale-110 pointer-events-none"
            style={{ backgroundImage: `url(${image1})` }}
          />
          <motion.div
            style={{ opacity: overlayOpacity, pointerEvents: "none" }}
            className="absolute inset-0 bg-black"
          />
        </motion.div>

        <div className="relative z-20 h-full flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-3xl md:text-5xl font-bold drop-shadow-sm"
          >
            {t("company_today.title")}
          </motion.h1>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        {(Array.isArray(timelineText) ? timelineText : []).map((text, index) => {
          const isBlue = index % 2 !== 0;
          const isImageBox = index === 1;

          return (
            <motion.div
              key={index}
              variants={stagger}
              initial={index === 0 ? "show" : "hidden"}   // 👈 first block shows immediately
              whileInView="show"
              viewport={viewportEarly}                     // 👈 earlier & reliable trigger
              className={`w-full px-6 md:px-20 py-10 ${isBlue ? "bg-[#eaf4fc]" : "bg-white"}`}
            >
              <div className={`flex flex-col ${isImageBox ? "md:flex-row" : ""} gap-6 md:gap-10 items-center`}>
                <motion.div
                  variants={fadeUp}
                  className="flex-1 text-gray-600 text-[17px] leading-relaxed bg-white/90 p-6 md:p-8 rounded-2xl shadow-md backdrop-blur-sm"
                >
                  {text}
                </motion.div>

                {isImageBox && (
                  <motion.div
                    variants={fadeUp}
                    className="w-full max-w-[260px] md:max-w-[300px]"
                    whileHover={shouldReduce ? {} : { scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <motion.img
                      src={image2}
                      alt="Brothers Founders"
                      loading="lazy"
                      className="rounded-2xl shadow-lg object-cover w-full h-auto"
                      initial={{ opacity: 0, scale: shouldReduce ? 1 : 0.98 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}
      </section>
    </div>
  );
};

export default CompanyToday;
