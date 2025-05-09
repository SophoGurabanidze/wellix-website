
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import slider1 from "../assets/images/slider1.png";
import slider2 from "../assets/images/slider2.png";
import slider3 from "../assets/images/slider3.png";
import slider4 from "../assets/images/slider4.png";
import slider5 from "../assets/images/slider5.png";

const images = [slider1, slider2, slider3, slider4, slider5];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentBlog, setCurrentBlog] = useState(0);
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/blogs`);
        const data = await res.json();
        setBlogPosts(data);
      } catch (err) {
        console.error("Failed to fetch blogs", err);
      }
    };

    fetchBlogs();

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
  }, [blogPosts.length]);

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
        <Link to="about/about-us" className="inline-block bg-cyan-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          წაიკითხეთ მეტი
        </Link>
      </section>

      {/* Blog Cards Slider */}
      <section className="w-full bg-gray-100 px-4 sm:px-8 lg:px-16">
  <h2 className="text-3xl font-bold text-center mb-8">ბლოგი</h2>
  <div className="relative w-full overflow-hidden">
    <div
      className="flex transition-transform duration-700"
      style={{ transform: `translateX(-${currentBlog * 100}%)` }}
    >
      {blogPosts.map((post) => (
        <div
          key={post._id}
          className="min-w-full flex flex-col md:flex-row items-center gap-6 p-6"
        >
          <div className="w-full md:w-1/2">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[300px] md:h-[400px]  rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-2xl font-semibold mt-4 md:mt-0">{post.title}</h3>
            <p className="text-gray-600 line-clamp-3 mt-2">{post.text}</p>
            <Link
              to={`/blog/${post._id}`}
              className="mt-4 text-cyan-600 hover:underline"
            >
              წაიკითხეთ მეტი
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Services Overview */}
      <section className=" py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">ჩვენი მომსახურებები</h2>
          <p className="mb-6 text-gray-700">
            ჩვენ გთავაზობთ წყლის მოპოვებასთან დაკავშირებული მომსახურებების ფართო სპექტრს ჭაბურღილის მშენებლობიდან დაწყებული არსებული ჭაბურღილის კონსერავაციით დასრულებული
          </p>
          <Link to="/services" className="inline-block bg-cyan-600 text-white px-6 py-2 rounded hover:bg-cyan-700 transition">
            იხილეთ მომსახურებები
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
