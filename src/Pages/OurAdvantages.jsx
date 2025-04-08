// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import advantages from '../data/advantages.json';

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

export default function OurAdvantages() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          რატომ უნდა აგვირჩიოთ ჩვენ
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
                  adv.align === 'left' ? 'sm:flex-row' : 'sm:flex-row-reverse'
                } bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer transition hover:shadow-xl`}
              >
                {/* Number Block */}
                <div
                  className={`flex justify-center items-center ${adv.bg} text-white text-3xl font-bold px-6 py-8 sm:w-28`}
                >
                  {adv.number}
                </div>

                {/* Text Content */}
                <div className="p-6 sm:p-8 text-gray-800 flex-1">
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
