import { useParams } from "react-router-dom";
import { marked } from "marked";
import { useTranslation } from "react-i18next";
import { useBlog } from "../hooks/useBlogs";

const BlogDetail = () => {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const { data: blog, isLoading, error } = useBlog(id);

  if (isLoading) return <p className="text-center mt-8">Loading...</p>;
  if (error) return <p className="text-center mt-8 text-red-500">Failed to load blog</p>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <img
        src={blog.image}
        alt={blog.title[i18n.language]}
        className="w-full h-[32rem] rounded-lg mb-6"
      />
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">
        {blog.title[i18n.language]}
      </h1>
      <div
        className="prose lg:prose-xl max-w-none"
        dangerouslySetInnerHTML={{ __html: marked(blog.text[i18n.language] || "") }}
      />
    </div>
  );
};

export default BlogDetail;
