import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../api";

const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await API.get(`/api/completed-projects`);
        const project = res.data.find((p) => p._id === id);
        if (!project) throw new Error("Not found");

        setForm({
          title: project.title || { ka: "", en: "" },
          description: project.description || { ka: "", en: "" },
          position: {
            lat: project.position.lat,
            lng: project.position.lng,
          },
          yearCompleted: project.yearCompleted,
          labelOffsetX: project.labelOffsetX ?? 0,
          labelOffsetY: project.labelOffsetY ?? 0,
        });
      } catch (err) {
        setError(`Project not found or failed to load ${err}`);
      }
    };

    fetchProject();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "lat" || name === "lng") {
      setForm({
        ...form,
        position: { ...form.position, [name]: value },
      });
    } else if (name.startsWith("title.")) {
      const lang = name.split(".")[1];
      setForm({ ...form, title: { ...form.title, [lang]: value } });
    } else if (name.startsWith("description.")) {
      const lang = name.split(".")[1];
      setForm({
        ...form,
        description: { ...form.description, [lang]: value },
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updated = {
        ...form,
        position: {
          lat: parseFloat(form.position.lat),
          lng: parseFloat(form.position.lng),
        },
      };

      await API.put(`/api/completed-projects/${id}`, updated);
      navigate("/admin/dashboard");
    } catch (err) {
      setError(`Project not found or failed to load ${err}`);
    }
  };

  if (!form)
    return <div className="p-6">Loading...</div>;

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-xl font-bold mb-4">Edit Project</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Georgian */}
        <input
          type="text"
          name="title.ka"
          placeholder="Project Title (Georgian)"
          className="w-full border p-2 rounded"
          value={form.title.ka}
          onChange={handleChange}
          required
        />

        {/* Title English */}
        <input
          type="text"
          name="title.en"
          placeholder="Project Title (English)"
          className="w-full border p-2 rounded"
          value={form.title.en}
          onChange={handleChange}
        />

        {/* Description Georgian */}
        <textarea
          name="description.ka"
          placeholder="Description (Georgian)"
          className="w-full border p-2 rounded"
          value={form.description.ka}
          onChange={handleChange}
        />

        {/* Description English */}
        <textarea
          name="description.en"
          placeholder="Description (English)"
          className="w-full border p-2 rounded"
          value={form.description.en}
          onChange={handleChange}
        />

        <div className="flex gap-4">
          <input
            type="number"
            name="lat"
            placeholder="Latitude"
            className="w-1/2 border p-2 rounded"
            value={form.position.lat}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="lng"
            placeholder="Longitude"
            className="w-1/2 border p-2 rounded"
            value={form.position.lng}
            onChange={handleChange}
            required
          />
        </div>

        <input
          type="text"
          name="yearCompleted"
          placeholder="Year Completed"
          className="w-full border p-2 rounded"
          value={form.yearCompleted}
          onChange={handleChange}
        />

        <input
          type="number"
          name="labelOffsetY"
          placeholder="Label Offset Y (e.g. 0, 1, -1)"
          className="w-full border p-2 rounded"
          value={form.labelOffsetY}
          onChange={handleChange}
        />

        <input
          type="number"
          name="labelOffsetX"
          placeholder="Label Offset X (e.g. -1, 0, 1)"
          className="w-full border p-2 rounded"
          value={form.labelOffsetX}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditProject;
