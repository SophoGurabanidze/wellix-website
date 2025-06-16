// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
};

const bgClasses = ["bg-blue-900", "bg-sky-800", "bg-sky-600", "bg-cyan-600"];
const alignClasses = ["sm:flex-row", "sm:flex-row-reverse"];

export default function OurAdvantages() {
  const [openIndex, setOpenIndex] = useState(null);
  const { t } = useTranslation();
  const advantages = t("advantages.list", { returnObjects: true });

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primaryBlue mb-12">
          {t("advantages.heading")}
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          {advantages.map((adv, i) => {
            const isOpen = openIndex === i;

            return (
              <motion.div
                key={i}
                variants={itemVariants}
                onClick={() => toggleIndex(i)}
                className={`flex flex-col sm:flex-row ${
                  i % 2 === 0 ? alignClasses[0] : alignClasses[1]
                } bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer transition hover:shadow-xl`}
              >
                {/* Number Block */}
                <div
                  className={`flex justify-center items-center ${bgClasses[i % bgClasses.length]} text-white text-3xl font-bold px-6 py-8 sm:w-28`}
                >
                  {adv.number}
                </div>

                {/* Text Content */}
                <div className="p-6 sm:p-8 text-primaryBlue flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{adv.title}</h3>

                    {/* Chevron Icon */}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-6 h-6 text-gray-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-full h-full"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </motion.div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="desc"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <p className="text-base leading-relaxed mt-4">
                          {adv.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
