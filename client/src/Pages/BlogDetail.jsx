import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { marked } from "marked";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/blogs/${id}`);
        const data = await res.json();
        setBlog(data);
      } catch (err) {
        console.error(`Failed to fetch blog${err}`);
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog) return <p className="text-center mt-8">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 ">
      <img src={blog.image} alt={blog.title} className=" w-full h-[32rem]  rounded-lg mb-6" />
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">
  {blog.title}
</h1>
      {/* <p className="text-gray-700 text-lg leading-relaxed">{blog.text}</p> */}
      <div
  className="prose lg:prose-xl max-w-none"
  dangerouslySetInnerHTML={{ __html: marked(blog.text) }}
/>
    </div>
  );
};

export default BlogDetail;
