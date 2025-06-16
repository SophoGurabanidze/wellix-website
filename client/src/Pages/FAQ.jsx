import React from 'react';
import { useTranslation } from 'react-i18next';
import Accordion from '../components/Accordion';

const FAQ = () => {
  const { t } = useTranslation();

  return (
    <div className="mb-12">
      <h1 className="mt-12 text-4xl text-center font-bold text-primaryBlue mb-12">
        {t("faq.heading")}
      </h1>
      <Accordion />
    </div>
  );
};

export default FAQ;
