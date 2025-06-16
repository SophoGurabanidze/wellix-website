import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import { useTranslation } from "react-i18next";

const AddProject = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    title: { ka: "", en: "" },
    description: { ka: "", en: "" },
    position: { lat: "", lng: "" },
    yearCompleted: "",
    labelOffsetY: 0,
    labelOffsetX: 0,
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "lat" || name === "lng") {
      setForm({
        ...form,
        position: { ...form.position, [name]: value },
      });
    } else if (name.startsWith("title.")) {
      const lang = name.split(".")[1];
      setForm({
        ...form,
        title: { ...form.title, [lang]: value },
      });
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
      const newProject = {
        ...form,
        position: {
          lat: parseFloat(form.position.lat),
          lng: parseFloat(form.position.lng),
        },
      };

      await API.post("api/completed-projects", newProject);
      navigate("/admin/dashboard");
    } catch (err) {
      setError(`Failed to create project${err}`);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-xl font-bold mb-4">{t("dashboard.add_project")}</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title.ka"
          placeholder="Title (Georgian)"
          className="w-full border p-2 rounded"
          value={form.title.ka}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="title.en"
          placeholder="Title (English)"
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
          required
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
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          {t("dashboard.submit")}
        </button>
      </form>
    </div>
  );
};

export default AddProject;
