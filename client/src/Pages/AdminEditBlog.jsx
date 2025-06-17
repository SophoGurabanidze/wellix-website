import { useParams, useNavigate } from "react-router-dom";
import { useBlog, useUpdateBlog } from "../hooks/useBlogs";
import { useState, useEffect } from "react";

const AdminEditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = useBlog(id);
  const { mutate: updateBlog, isPending } = useUpdateBlog();
  const [form, setForm] = useState({
    title: { ka: "", en: "" },
    text: { ka: "", en: "" },
    image: "",
  });

  useEffect(() => {
    if (data) {
      setForm({
        title: data.title || { ka: "", en: "" },
        text: data.text || { ka: "", en: "" },
        image: data.image || "",
      });
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBlog(
      { id, updated: form },
      {
        onSuccess: () => navigate("/admin/blogs"),
        onError: () => alert("Failed to update blog"),
      }
    );
  };

  if (isLoading) return <p className="p-6">Loading...</p>;
  if (error) return <p className="text-red-500 p-6">Failed to load blog</p>;

  return (
    <form onSubmit={handleSubmit} className="p-8 max-w-xl mx-auto space-y-4">
      <h2 className="text-2xl font-bold mb-4">Edit Blog</h2>

      <input
        type="text"
        placeholder="Title (KA)"
        value={form.title.ka}
        onChange={(e) => setForm({ ...form, title: { ...form.title, ka: e.target.value } })}
        className="w-full border p-2"
      />
      <input
        type="text"
        placeholder="Title (EN)"
        value={form.title.en}
        onChange={(e) => setForm({ ...form, title: { ...form.title, en: e.target.value } })}
        className="w-full border p-2"
      />

      <textarea
        placeholder="Text (KA)"
        value={form.text.ka}
        onChange={(e) => setForm({ ...form, text: { ...form.text, ka: e.target.value } })}
        className="w-full border p-2"
        rows={4}
      />
      <textarea
        placeholder="Text (EN)"
        value={form.text.en}
        onChange={(e) => setForm({ ...form, text: { ...form.text, en: e.target.value } })}
        className="w-full border p-2"
        rows={4}
      />

      <input
        type="text"
        placeholder="Image URL"
        value={form.image}
        onChange={(e) => setForm({ ...form, image: e.target.value })}
        className="w-full border p-2"
      />

      <button
        type="submit"
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        disabled={isPending}
      >
        {isPending ? "Saving..." : "Save Changes"}
      </button>
    </form>
  );
};

export default AdminEditBlog;
