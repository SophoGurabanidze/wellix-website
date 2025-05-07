
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminBlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");

  const fetchBlogs = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/blogs`);
      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      setError(`Failed to load blogs ${err}`);
    }
  };

  const deleteBlog = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/blogs/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchBlogs();
    } catch (err) {
      alert(`Failed to load blogs ${err}`);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Manage Blogs</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <div key={blog._id} className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-1">{blog.title}</h2>
            <p className="text-sm text-gray-600 mb-2 line-clamp-3">{blog.text}</p>
            <img src={blog.image} alt={blog.title} className="h-48 w-full object-cover mb-4 rounded" />
            <div className="flex justify-between items-center text-sm">
              <Link
                to={`/admin/blog/edit/${blog._id}`}
                className="text-blue-600 hover:underline"
              >
                Edit
              </Link>
              <button
                onClick={() => deleteBlog(blog._id)}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminBlogList;
