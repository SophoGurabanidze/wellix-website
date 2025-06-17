import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useProject, useUpdateProject } from "../hooks/useProjects";

const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useProject(id);
  const { mutate: updateProject, isPending } = useUpdateProject();

  const [form, setForm] = useState(null);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (data) {
      setForm({
        title: data.title || { ka: "", en: "" },
        description: data.description || { ka: "", en: "" },
        position: {
          lat: data.position.lat,
          lng: data.position.lng,
        },
        yearCompleted: data.yearCompleted || "",
        labelOffsetX: data.labelOffsetX ?? 0,
        labelOffsetY: data.labelOffsetY ?? 0,
      });
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "lat" || name === "lng") {
      setForm({ ...form, position: { ...form.position, [name]: value } });
    } else if (name.startsWith("title.")) {
      const lang = name.split(".")[1];
      setForm({ ...form, title: { ...form.title, [lang]: value } });
    } else if (name.startsWith("description.")) {
      const lang = name.split(".")[1];
      setForm({ ...form, description: { ...form.description, [lang]: value } });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updated = {
      ...form,
      position: {
        lat: parseFloat(form.position.lat),
        lng: parseFloat(form.position.lng),
      },
    };

    updateProject(
      { id, updated },
      {
        onSuccess: () => navigate("/admin/dashboard"),
        onError: (err) => setFormError(`Failed to update project: ${err.message}`),
      }
    );
  };

  if (isLoading || !form) return <p className="p-6">Loading...</p>;
  if (error) return <p className="p-6 text-red-500">Failed to load project</p>;

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-xl font-bold mb-4">Edit Project</h1>
      {formError && <p className="text-red-500 mb-4">{formError}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title.ka"
          placeholder="Project Title (Georgian)"
          className="w-full border p-2 rounded"
          value={form.title.ka}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="title.en"
          placeholder="Project Title (English)"
          className="w-full border p-2 rounded"
          value={form.title.en}
          onChange={handleChange}
        />

        <textarea
          name="description.ka"
          placeholder="Description (Georgian)"
          className="w-full border p-2 rounded"
          value={form.description.ka}
          onChange={handleChange}
        />

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
          disabled={isPending}
        >
          {isPending ? "Saving..." : "Update"}
        </button>
      </form>
    </div>
  );
};

export default EditProject;
