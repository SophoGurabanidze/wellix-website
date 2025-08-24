import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import usePageSEO from "../hooks/usePageSEO";

const seo = {
  ka: {
    title: "სერვისები | ჭაბურღილის ბურღვა, რეაბილიტაცია და კონსერვაცია",
    description:
      "გაიგეთ მეტი ველიქსის სერვისების შესახებ — წყლის ჭაბურღილის ბურღვა, არტეზიული ჭაბურღილის მოწყობა, არსებული ჭაბურღილების რეაბილიტაცია/აღდგენა დაზიანებული ჭაბურღილის კონსერვაცია/ლიკვიდაცია/გაუქმება და ჭაბურღილის პროექტირება/დათვალიერება/ინსპექტირება.",
  },
  en: {
    title: "Services | Well Drilling, Rehabilitation, and Conservation",
    description:
      "Learn more about Wellix's services — water well drilling, rehabilitation/restoration of existing wells, conservation/decommissioning/elimination of damaged wells, and well design/inspection/evaluation.",
  },
};

const routeByIndex = {
  3: "/building-new-wells",
  5: "/maintenance",
  6: "/conservation",
};

const Services = () => {
  const { t } = useTranslation();
  const radius = 320;
  const verticalOffset = 260;

  const services = t("services.items", { returnObjects: true }) ;
  usePageSEO(seo);

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
        <div className="pl-0 sm:hidden mt-12 px-6 text-[14px] flex flex-col items-center gap-6">
          {services.map((text, i) => {
            const to = routeByIndex[i];
            const classes =
              "w-full max-w-[680px] text-center bg-gradient-to-r from-primaryBlue to-secondaryBlue text-white px-6 py-4 rounded-md shadow-md break-words leading-relaxed transition-all duration-300 transform hover:scale-[1.01]";
            return to ? (
              <Link key={i} to={to} className={classes}>
                {text}
              </Link>
            ) : (
              <div key={i} className={classes}>
                {text}
              </div>
            );
          })}
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:block text-[14px]">
          {[...services].reverse().map((text, i) => {
            const total = services.length;
            const realIndex = total - 1 - i; // map back to original index
            const to = routeByIndex[realIndex];

            const angleStep = Math.PI / (total + 1);
            const angle = angleStep * (i + 1);
            const x = radius * Math.sin(angle);
            const y = radius * Math.cos(angle);

            return (
              <div
                key={i}
                className="absolute flex items-center gap-4"
                style={{ top: `${verticalOffset + y}px`, left: `${x + 40}px` }}
              >
                <div className="w-10 h-10 bg-white border-[3px] border-primaryBlue rounded-full" />
                {to ? (
                  <Link
                    to={to}
                    className="bg-gradient-to-r from-primaryBlue to-secondaryBlue text-white px-6 py-4 rounded-md shadow-md w-[900px] max-w-[90vw] break-words hover:scale-[1.01] transition-transform duration-300"
                  >
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
