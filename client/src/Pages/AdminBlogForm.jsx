import { useState } from "react";
import { useAddBlog } from "../hooks/useBlogs";

const AdminBlogForm = () => {
  const [form, setForm] = useState({
    title: { ka: "", en: "" },
    text: { ka: "", en: "" },
    image: "",
  });

  const { mutate: addBlog, isPending } = useAddBlog();

  const handleSubmit = (e) => {
    e.preventDefault();
    addBlog(form, {
      onSuccess: () => {
        setForm({ title: { ka: "", en: "" }, text: { ka: "", en: "" }, image: "" });
        alert("Blog added successfully");
      },
      onError: () => {
        alert("Failed to add blog");
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Title (KA)"
        value={form.title.ka}
        onChange={(e) =>
          setForm({ ...form, title: { ...form.title, ka: e.target.value } })
        }
        className="w-full border p-2"
        required
      />
      <input
        type="text"
        placeholder="Title (EN)"
        value={form.title.en}
        onChange={(e) =>
          setForm({ ...form, title: { ...form.title, en: e.target.value } })
        }
        className="w-full border p-2"
      />
      <textarea
        placeholder="Text (KA)"
        value={form.text.ka}
        onChange={(e) =>
          setForm({ ...form, text: { ...form.text, ka: e.target.value } })
        }
        className="w-full border p-2"
        required
      />
      <textarea
        placeholder="Text (EN)"
        value={form.text.en}
        onChange={(e) =>
          setForm({ ...form, text: { ...form.text, en: e.target.value } })
        }
        className="w-full border p-2"
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
        className="bg-blue-600 text-white px-4 py-2 rounded"
        disabled={isPending}
      >
        {isPending ? "Adding..." : "Add Blog"}
      </button>
    </form>
  );
};

export default AdminBlogForm;
