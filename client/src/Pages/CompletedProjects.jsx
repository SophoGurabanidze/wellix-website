import React from 'react';
import { useTranslation } from 'react-i18next';
import GoogleProjectsMap from '../components/GoogleProjectsMap';

const CompletedProjects = () => {
  const { t } = useTranslation();

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
