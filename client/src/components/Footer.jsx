import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#003d73] text-gray-200 pt-12 pb-8 px-4 mt-auto relative">
      <div className="container mx-auto grid gap-10 md:grid-cols-4 divide-y md:divide-y-0 divide-gray-600">
        {/* Logo and Motto */}
        <div className="text-center md:text-left pt-0 md:pt-0">
          <h2 className="text-xl font-semibold mb-4 text-white">{t("footer.company")}</h2>
          <p className="text-sm leading-relaxed">{t("footer.motto")}</p>
        </div>

        {/* About Us */}
        <div className="pt-6 md:pt-0 text-center md:text-left">
          <h3 className="text-base md:text-lg font-semibold text-white mb-3">{t("footer.about")}</h3>
          <ul className="space-y-3 text-sm leading-relaxed">
            <li><Link to="/about/about-us" className="hover:text-white">{t("nav.about")}</Link></li>
            <li><Link to="/about/short-history" className="hover:text-white">{t("nav.short_history")}</Link></li>
            <li><Link to="/about/our-advantages" className="hover:text-white">{t("nav.advantages")}</Link></li>
            <li><Link to="/about/reference-clients" className="hover:text-white">{t("nav.partners")}</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="pt-6 md:pt-0 text-center md:text-left">
          <h3 className="text-base md:text-lg font-semibold text-white mb-3">{t("footer.services")}</h3>
          <ul className="space-y-3 text-sm leading-relaxed">
            <li><Link to="/building-new-wells" className="hover:text-white">{t("nav.new_wells")}</Link></li>
            <li><Link to="/maintenance" className="hover:text-white">{t("nav.rehabilitation")}</Link></li>
            <li><Link to="/conservation" className="hover:text-white">{t("nav.conservation")}</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="pt-6 md:pt-0 text-center md:text-left">
          <h3 className="text-base md:text-lg font-semibold text-white mb-3">{t("footer.contact")}</h3>
          <ul className="space-y-3 text-sm leading-relaxed">
            <li><Link to="/faq" className="hover:text-white">{t("nav.faq")}</Link></li>
            <li><Link to="/contact" className="hover:text-white">{t("nav.contact")}</Link></li>
          </ul>
          <p className="text-xs mt-4 text-gray-400">Email: info@wellix.com</p>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className="mt-10 border-t border-gray-600 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Wellix. {t("footer.rights")}
      </div>

      {/* Animated gradient bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#003d73] via-[#005c8d] to-[#00a9e0] animate-waterFlow" />
    </footer>
  );
};

export default Footer;
