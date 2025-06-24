import React from "react";
import { useTranslation } from "react-i18next";
import image1 from "../assets/images/About1.png";
import image2 from "../assets/images/Brothers.jpeg";
import usePageSEO from "../hooks/usePageSEO";

const seo = {
  en: {
    title: "About Us | Wellix",
    description: "Learn about Wellix’s mission, values, and experience delivering  premium water well services across Georgia.",
  },
  ka: {
    title: "ჩვენ შესახებ | ველიქსი",
    description: "გაიგეთ მეტი ველიქსის შესახებ — ჩვენი ისტორია, მისია და პრემიუმ მომსახურების გამოცდილება საქართველოში.",
  },
};

const CompanyToday = () => {
  const { t } = useTranslation();

  usePageSEO(seo)
  const timelineText = t("company_today.timeline", { returnObjects: true });

  return (
    <div>
      {/* Hero Header */}
      <div
        className="relative w-full h-[300px] md:h-[450px] bg-cover bg-center"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            {t("company_today.title")}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-16">
        {timelineText.map((text, index) => {
          const isBlue = index % 2 !== 0;
          const isImageBox = index === 1;

          return (
            <div
              key={index}
              className={`w-full px-6 md:px-20 py-10 ${
                isBlue ? "bg-[#eaf4fc]" : "bg-white"
              }`}
            >
              <div
                className={`flex flex-col ${
                  isImageBox ? "md:flex-row" : ""
                } gap-6 md:gap-10 items-center`}
              >
                <div className="flex-1 text-gray-500 text-[17px] leading-relaxed bg-white bg-opacity-90 p-6 md:p-8 rounded-lg shadow-md">
                  {text}
                </div>

                {isImageBox && (
                  <div className="w-full max-w-[240px]">
                    <img
                      src={image2}
                      alt="Brothers Founders"
                      loading="lazy"
                      className="rounded-lg shadow-md object-cover w-full h-auto"
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default CompanyToday;

