import React from 'react';
import { useTranslation } from 'react-i18next';
import Accordion from '../components/Accordion';
import usePageSEO from '../hooks/usePageSEO';

const seo = {
  en: {
    title: "FAQ | Wellix",
    description: "Frequently asked questions about our well drilling services.",
  },
  ka: {
    title: "ხშირად დასმული კითხვები | ველლიქსი",
    description: "წაიკითხეთ პასუხები ჭაბურღილების ბურღვასთან დაკავშირებულ ხშირ კითხვებზე.",
  },
};

const FAQ = () => {
  const { t } = useTranslation();
  usePageSEO(seo)

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
