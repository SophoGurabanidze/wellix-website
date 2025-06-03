import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#003d73] text-gray-200 pt-10 pb-6 mt-auto relative">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
      
        {/* Logo and Motto */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">ველიქსი</h2>
          <p className="text-sm leading-relaxed">
           დროში გამოცდილი ხარისხი
          </p>
        </div>

        {/* About Us */}
        <div>
          <h3 className="font-semibold text-white mb-3">ჩვენ შესახებ</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about/about-us" className="hover:text-white">ჩვენ შესახებ</Link></li>
            <li><Link to="/about/short-history" className="hover:text-white">მნიშვნელოვანი მოვლენები</Link></li>
            <li><Link to="/about/our-advantages" className="hover:text-white">ჩვენი უპირატესობები</Link></li>
            <li><Link to="/about/reference-clients" className="hover:text-white">პარტნიორები</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-white mb-3">მომსახურებები</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="building-new-wells" className="hover:text-white">ჭაბურღილის მშენებლობა</Link></li>
            <li><Link to="maintenance" className="hover:text-white">ჭაბურღილის რეაბილიტაცია</Link></li>
            <li><Link to="conservation" className="hover:text-white">ჭაბურღილის კონსერვაცია</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-white mb-3">კონტაქტი</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/faq" className="hover:text-white">ხშირად დასმული კითხვები</Link></li>
            <li><Link to="/contact" className="hover:text-white">საკონტაქტო ფორმა</Link></li>
          </ul>
          <p className="text-xs mt-4 text-gray-400">Email: info@wellix.com</p>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className="mt-10 border-t border-gray-600 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Wellix. ყველა უფლება დაცულია.
      </div>

      {/* Animated gradient bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#003d73] via-[#005c8d] to-[#00a9e0] animate-waterFlow" />
    </footer>
  );
};

export default Footer;
