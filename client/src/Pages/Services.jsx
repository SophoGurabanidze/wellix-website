import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  const radius = 320;
  const verticalOffset = 260;

  const services = t("services.items", { returnObjects: true });

  return (
    <div className="relative min-h-screen bg-white pl-6 sm:pl-24 pt-28 pb-20">
      {/* Mobile Title */}
      <h2 className="text-2xl font-bold text-primaryBlue text-center sm:hidden mb-8">
        {t("services.title")}
      </h2>

      {/* Desktop Title */}
      <h2
        className="hidden sm:block absolute text-3xl font-bold text-primaryBlue text-center"
        style={{
          top: `${verticalOffset + 120}px`,
          left: `${radius - 40}px`,
          transform: "translateX(-50%)",
        }}
      >
        {t("services.title")}
      </h2>

      <div className="relative">
        {/* Mobile Layout */}
        <div className="text-[14px] flex flex-col gap-8 sm:hidden mt-12 px-4">
          {services.map((text, i) =>
            i === 3 ? (
              <Link key={i} to="/building-new-wells" className="bg-gradient-to-r from-primaryBlue to-secondaryBlue hover:from-secondaryBlue hover:to-primaryBlue text-white px-6 py-4 rounded-md shadow-md transition-all duration-300 transform hover:scale-[1.01]">
                {text}
              </Link>
            ) : (
              <div key={i} className="bg-gradient-to-r from-primaryBlue to-secondaryBlue text-white px-6 py-4 rounded-md shadow-md">
                {text}
              </div>
            )
          )}
        </div>

        {/* Desktop Layout */}
        <div className="text-[14px] hidden sm:block">
          {[...services].reverse().map((text, i) => {
            const total = services.length;
            const realIndex = total - 1 - i;
            const isLink = realIndex === 3;

            const angleStep = Math.PI / (total + 1);
            const angle = angleStep * (i + 1);
            const x = radius * Math.sin(angle);
            const y = radius * Math.cos(angle);

            return (
              <div key={i} className="absolute flex items-center gap-4" style={{ top: `${verticalOffset + y}px`, left: `${x + 40}px` }}>
                <div className="w-10 h-10 bg-white border-[3px] border-primaryBlue rounded-full" />
                {isLink ? (
                  <Link to="/building-new-wells" className="bg-gradient-to-r from-primaryBlue to-secondaryBlue text-white px-6 py-4 rounded-md shadow-md w-[900px] max-w-[90vw] break-words hover:scale-[1.01] transition-transform duration-300">
                    {text}
                  </Link>
                ) : (
                  <div className="bg-gradient-to-r from-primaryBlue to-secondaryBlue text-white px-6 py-4 rounded-md shadow-md w-[900px] max-w-[90vw] break-words">
                    {text}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
