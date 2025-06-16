import { useTranslation } from "react-i18next";

const ThankYou = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-50">
      <div className="bg-white p-8 rounded shadow text-center max-w-md">
        <h1 className="text-2xl font-semibold text-sky-700 mb-4">{t("thank_you.title")}</h1>
        <p className="text-gray-700 mb-4">
          {t("thank_you.message")}
        </p>
        <a href="/" className="text-sky-700 underline">{t("thank_you.back_home")}</a>
      </div>
    </div>
  );
};

export default ThankYou;

