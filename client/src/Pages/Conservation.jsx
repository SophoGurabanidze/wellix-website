import React from "react";
import { useTranslation } from "react-i18next";
import image1 from "../assets/maintenance/maintenance-1.png";

const Conservation = () => {
  const { t } = useTranslation();

  const section1 = t("conservation.section1", { returnObjects: true });
  const section3 = t("conservation.section3", { returnObjects: true });

  return (
    <div className="bg-white py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto space-y-24">
        <h1 className="text-4xl text-center font-bold text-primaryBlue mb-12">
          {t("conservation.title")}
        </h1>

        {/* Section 1 */}
        <section className="text-justify text-gray-800 leading-relaxed text-lg space-y-6">
          {section1.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </section>

        {/* Section 2 */}
        <section className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img
              src={image1}
              alt="Well Conservation Visual"
              className="w-full h-auto rounded-xl shadow-md"
            />
          </div>
          <div className="md:w-1/2 text-justify text-gray-800 leading-relaxed text-lg">
            <p>{t("conservation.section2")}</p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="text-justify text-gray-800 leading-relaxed text-lg space-y-6">
          {section3.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Conservation;
