import React from "react";
import { useTranslation } from "react-i18next";

export default function ShortHistory() {
  const { t } = useTranslation();

  const timeline = t("short_history.timeline", { returnObjects: true });

  const firstRow = timeline.slice(0, 5);
  const secondRow = timeline.slice(5);

  return (
    <div className="px-4 py-16 bg-gradient-to-b from-white to-blue-50">
      <h2 className="text-4xl font-bold text-center mb-24 text-primaryBlue">
        {t("short_history.title")}
      </h2>

      {/* First row */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between relative mb-20">
        {firstRow.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center md:w-1/5 text-center mb-10 md:mb-0"
          >
            <div className="w-4 h-4 bg-blue-600 rounded-full z-10"></div>
            <div className="h-16 w-1 bg-blue-400"></div>
            <div className="mt-2 text-lg font-semibold text-blue-200">{item.year}</div>
            <div className="mt-1 font-bold text-primaryBlue">{item.title}</div>
            <p className="text-sm mt-1 text-gray-700">{item.description}</p>
          </div>
        ))}
        <div className="absolute top-2 md:top-4 left-0 right-0 h-4 bg-gradient-to-r from-blue-800 to-blue-300 z-0 hidden md:block rounded-full"></div>
      </div>

      {/* Second row */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-evenly relative">
        {secondRow.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center md:w-1/4 text-center mb-10 md:mb-0"
          >
            <div className="w-4 h-4 bg-blue-600 rounded-full z-10"></div>
            <div className="h-16 w-1 bg-blue-400"></div>
            <div className="mt-2 text-lg font-semibold text-blue-200">{item.year}</div>
            <div className="mt-1 font-bold text-primaryBlue">{item.title}</div>
            <p className="text-sm mt-1 text-gray-700">{item.description}</p>
          </div>
        ))}
        <div className="absolute top-2 md:top-4 left-0 right-0 h-4 bg-gradient-to-r from-blue-800 to-blue-300 z-0 hidden md:block rounded-full"></div>
      </div>
    </div>
  );
}
