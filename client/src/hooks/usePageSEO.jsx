import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const usePageSEO = (seoTexts) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  useEffect(() => {
    const title = seoTexts[lang]?.title || "";
    const description = seoTexts[lang]?.description || "";

    // Set <title>
    document.title = title;

    // Set or create <meta name="description">
    let meta = document.querySelector("meta[name='description']");
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = description;
  }, [i18n.language, seoTexts]);
};

export default usePageSEO;
