import { useBlogs, useDeleteBlog } from "../hooks/useBlogs";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AdminBlogList = () => {
  const { i18n } = useTranslation();
  const { data: blogs = [], isLoading, error } = useBlogs();
  const { mutate: deleteBlog } = useDeleteBlog();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      deleteBlog(id);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Failed to load blogs</p>;

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Manage Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((blog) => {
          const title = blog.title?.[i18n.language] || blog.title?.ka || "Untitled";
          const text = blog.text?.[i18n.language] || blog.text?.ka || "";

          return (
            <div key={blog._id} className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-semibold mb-1">{title}</h2>
              <p className="text-sm text-gray-600 mb-2 line-clamp-3">{text}</p>
              <img
                src={blog.image}
                alt={title}
                className="h-48 w-full object-cover mb-4 rounded"
              />
              <div className="flex justify-between items-center text-sm">
                <Link
                  to={`/admin/blog/edit/${blog._id}`}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(blog._id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminBlogList;
