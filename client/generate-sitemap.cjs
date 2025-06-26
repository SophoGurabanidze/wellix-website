// @ts-nocheck
const fs = require("fs");
const path = require("path");

const baseDomain = "https://wellix.ge"; // Change to wellix.ge after domain setup

const routes = [
  "", // homepage
  "about/about-us",
  "about/short-history",
  "about/our-advantages",
  "about/reference-clients",
  "services",
  "building-new-wells",
  "maintenance",
  "conservation",
  "projects/completed",
  "faq",
  "contact",
  "thank-you",
];

const languages = ["ka", "en"];

const sitemapEntries = routes.flatMap((route) =>
  languages.map((lang) => {
    const url = `${baseDomain}/${lang === "ka" ? "" : lang + "/"}${route}`.replace(/\/+$/, "");
    return `
  <url>
    <loc>${url}</loc>
    ${languages
      .map((altLang) => {
        const altUrl = `${baseDomain}/${altLang === "ka" ? "" : altLang + "/"}${route}`.replace(/\/+$/, "");
        return `<xhtml:link rel="alternate" hreflang="${altLang}" href="${altUrl}" />`;
      })
      .join("\n")}
  </url>`;
  })
);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
${sitemapEntries.join("\n")}
</urlset>`;



fs.writeFileSync(path.join(__dirname, "public", "sitemap.xml"), sitemap.trim());


console.log("✅ sitemap.xml generated at: client/public/sitemap.xml");
