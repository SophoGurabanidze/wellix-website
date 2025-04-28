import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import slider1 from "../assets/images/slider1.png";
import slider2 from "../assets/images/slider2.png";
import slider3 from "../assets/images/slider3.png";
import slider4 from "../assets/images/slider4.png";
import slider5 from "../assets/images/slider5.png";
import blog1 from "../assets/images/Blog1.png";

const images = [slider1, slider2, slider3, slider4, slider5];

const blogPosts = [
  { id: 1, title: "How We Build Premium Wells", text: "Discover our step-by-step process for high-quality well construction.", image: blog1 },
  { id: 2, title: "Sustainable Water Solutions", text: "How we ensure environmentally friendly water sourcing.",  image: blog1},
  { id: 3, title: "Choosing the Right Pump", text: "Tips for selecting the optimal pump for your well.",  image: blog1},
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentBlog, setCurrentBlog] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    const blogSlider = setInterval(() => {
      setCurrentBlog((prev) => (prev + 1) % blogPosts.length);
    }, 4000);

    return () => {
      clearInterval(slider);
      clearInterval(blogSlider);
    };
  }, []);

  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section - Image Slider */}
      <div className="relative w-full h-[500px] overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Slide"
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>

      {/* About Us Preview */}
      <section className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">ჩვენ შესახებ</h2>
        <p className="mb-6 text-gray-700">
        კომპანია ველიქსი დაარსდა 2021 წელს, რათა მის გერმანელ პარტნიორებთან ერთად თავისი წვლილი შეეტანა საქართველოში პრემიუმ ხარისხის ჭაბურღილების მშენებლობის საქმეში, რაც პირველ რიგში გულისხმობს, რომ საქართველოში ეტაპობრივად დამკვიდრდეს ჭაბურღილის მშენებლობის და მოწყობის ისეთი სტანდარტი, რომელიც შესაძლებელს გახდის ოპტიმალურად და გარემოსათვის ზიანის მიყენების გარეშე იქნას ათვისებული ჩვენს ქვეყანაში არსებული მიწისქვეშა წყლების რესურსი.
        </p>
        <Link to="/about-us" className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          წაიკითხეთ მეტი
        </Link>
      </section>

      {/* Blog Cards Slider */}
      <section className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">სიახლეები</h2>
        <div className="relative w-full overflow-hidden">
          <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${currentBlog * 100}%)` }}>
            {blogPosts.map((post) => (
             <div key={post.id} className="min-w-full flex flex-col items-center gap-4 p-6">
             <img src={post.image} alt={post.title} className="w-full h-[400px] object-cover rounded-lg shadow-md" />
             <h3 className="text-2xl font-semibold mt-4">{post.title}</h3>
             <p className="text-gray-600 text-center">{post.text}</p>
             <Link to={`/blog/${post.id}`} className="mt-4 text-blue-600 hover:underline">Read more</Link>
           </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">ჩვენი მომსახურებები</h2>
          <p className="mb-6 text-gray-700">
            ჩვენ გთავაზობთ წყლის მოპოვებასთან დაკავშირებული მომსახურებების ფართო სპექტრს ჭაბურღილის მშენებლობიდან დაწყებული არსებული ჭაბურღილის კონსერავაციით დასრულებული
          
          </p>
          <Link to="/services" className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            იხილეთ მომსახურებები
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
