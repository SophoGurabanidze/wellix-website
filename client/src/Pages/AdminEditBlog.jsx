import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const AdminEditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: { ka: "", en: "" },
    text: { ka: "", en: "" },
    image: ""
  });
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/blogs/${id}`);
        const data = await res.json();
        setForm({
          title: data.title || { ka: "", en: "" },
          text: data.text || { ka: "", en: "" },
          image: data.image || ""
        });
      } catch (err) {
        alert(`Failed to load blog ${err}`);
      }
    };
    fetchBlog();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/api/blogs/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });
      navigate("/admin/blogs");
    } catch {
      alert("Failed to update blog");
    }
  };

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
      <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded">
        Save Changes
      </button>
    </form>
  );
};

export default AdminEditBlog;
