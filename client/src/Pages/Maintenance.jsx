import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useTranslation } from "react-i18next";

import image1 from "../assets/chart/chart.png";
import image2 from "../assets/chart/chart-2.png";
import image3 from "../assets/chart/chart-3.png";
import image4 from "../assets/maintenance/maintenance-2.png";
import image5 from "../assets/maintenance/maintenance-3.png";

const Maintenance = () => {
  const { t } = useTranslation();

  const data = [
    { stage: "", value: 75 },
    { stage: t("maintenance.chartAxis.label"), value: 55 },
    { stage: "", value: 20 },
  ];

  const sections = [
    { text: t("maintenance.sections.0.text"), image: "chart" },
    { text: t("maintenance.sections.1.text"), image: image4 },
    { text: t("maintenance.sections.2.text"), image: image5 },
  ];

  const chartLabels = [
    t("maintenance.chartLabels.1"),
    t("maintenance.chartLabels.2"),
    t("maintenance.chartLabels.3"),
  ];

  const footerParagraphs = t("maintenance.footer", { returnObjects: true });
  const { i18n } = useTranslation();


  return (
    <div className="bg-backgroundBlue py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto space-y-24">
        <h1 className="text-4xl text-center font-bold text-primaryBlue mb-12">
          {t("maintenance.title")}
        </h1>

        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex  flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } gap-8 ${index === 0 ? "min-h-[400px]" : "items-center"}
         
            `}
          >
           <div className={`md:w-1/2 text-justify text-gray-800 leading-relaxed flex ${index === 0 && i18n.language === "en"? "text-[18px] " : ""}`}>

              {section.text}
            </div>

            <div className="md:w-1/2">
              {section.image === "chart" ? (
                <div className="relative w-full h-[300px] md:h-[500px]">
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="stage" />
                      <YAxis domain={[0, 100]} tickFormatter={(tick) => `${tick}%`} />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#8884d8"
                        strokeWidth={3}
                        dot={{ r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>

                  <div className="absolute md:bottom-[290px] bottom-[100px] left-[20px] right-0 flex justify-center md:justify-around gap-[10px] md:gap-0 items-end px-2">
                    {[image1, image2, image3].map((img, idx) => (
                      <div key={idx} className="w-16 h-16 md:w-20 md:h-20">
                        <img src={img} alt={`Stage ${idx + 1}`} className="w-full h-full object-cover" />
                        <p className="text-[8px] md:text-[8px] text-center mt-1">{chartLabels[idx]}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <img
                  src={section.image}
                  alt={`maintenance-${index + 1}`}
                  className="w-full h-auto rounded-xl shadow-md"
                />
              )}
            </div>
          </div>
        ))}

        <div className="text-gray-800 leading-relaxed text-justify space-y-6">
          {footerParagraphs.map((text, i) => (
            <p key={i} className={i === footerParagraphs.length - 1 ? "font-semibold" : ""}>
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
