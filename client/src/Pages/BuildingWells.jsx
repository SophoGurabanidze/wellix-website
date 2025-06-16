import React from 'react';
import { useTranslation } from 'react-i18next';

const BuildingWells = () => {
  const { t } = useTranslation();

  const steps = t('buildingWells.steps', { returnObjects: true });

  return (
    <div className="p-6 py-16 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-primaryBlue text-center mb-12">
        {t('buildingWells.heading')}
      </h1>

      {/* Proposal Section */}
      <section className="bg-white shadow-md rounded-2xl p-6 mb-8">
        <h2 className="text-xl text-primaryBlue font-semibold mb-2 text-center">
          {t('buildingWells.offerTitle')}
        </h2>
        <p className="text-gray-500 text-center">
          {t('buildingWells.offerText')}
        </p>
      </section>

      {/* Steps Section */}
      <section className="bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-xl text-primaryBlue font-semibold mb-4 text-center">
          {t('buildingWells.stepsTitle')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          {steps.map((step, index) => (
            <div
              key={index}
              className="rounded-xl p-4 relative pb-20 border border-gray-300 flex flex-col justify-center text-center"
            >
              <p className="font-medium text-gray-700">{step.title}</p>
              {step.content && (
                <p className="text-sm text-gray-600 mt-2">{step.content}</p>
              )}

              <div className="absolute bottom-0 left-0 w-full h-14 flex flex-col items-center justify-end">
                <div className="w-full h-[2px] bg-cyan-700 relative">
                  <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-5 h-5 bg-cyan-700 rounded-full border-4 border-white"></div>
                </div>
                <span className="text-sm font-bold text-cyan-700 mt-3">
                  {step.id}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BuildingWells;
