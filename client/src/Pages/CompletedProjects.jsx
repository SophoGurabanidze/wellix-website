import React from 'react';
import { useTranslation } from 'react-i18next';
import GoogleProjectsMap from '../components/GoogleProjectsMap';
import usePageSEO from '../hooks/usePageSEO';

const seo = {
  en: {
    title: "Completed Projects | Wellix",
    description: "Explore our completed well drilling projects across different regions in Georgia.",
  },
  ka: {
    title: "შესრულებული პროექტები | ველიქსი",
    description: "იხილეთ ველიქსის მიერ შესრულებული ჭაბურღილების პროექტები საქართველოს სხვადასხვა რეგიონში.",
  },
};

const CompletedProjects = () => {
  const { t } = useTranslation();
  usePageSEO(seo)

  return (
    <div className="p-4">
      <h1 className="mt-12 text-4xl text-center font-bold text-primaryBlue mb-4">
        {t("projects.title")}
      </h1>
      <GoogleProjectsMap />
    </div>
  );
};

export default CompletedProjects;
