import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");
  const { t, i18n } = useTranslation();

  const fetchProjects = async () => {
    try {
      const res = await API.get("/api/completed-projects");
      setProjects(res.data);
    } catch (err) {
      setError(`${t("dashboard.load_error")} ${err}`);
    }
  };

  const deleteProject = async (id) => {
    if (!window.confirm(t("dashboard.confirm_delete"))) return;

    try {
      await API.delete(`/api/completed-projects/${id}`);
      fetchProjects();
    } catch (err) {
      alert(`${t("dashboard.delete_error")} ${err}`);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow p-6 flex flex-col min-h-screen text-center">
        <div>
          <h2 className="text-xl font-bold mb-8">{t("dashboard.welcome")}</h2>
          <Link
            to="/admin/change-password"
            className="block bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 mb-4"
          >
            {t("dashboard.change_password")}
          </Link>

          <Link
            to="/admin/projects/new"
            className="block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mb-4"
          >
            {t("dashboard.add_project")}
          </Link>
        </div>

        <Link
          to="/admin/blog/new"
          className="block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 mb-4"
        >
          {t("dashboard.add_blog")}
        </Link>
        <Link
          to="/admin/blogs"
          className="block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 mb-4"
        >
          {t("dashboard.manage_blogs")}
        </Link>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/admin";
          }}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          {t("dashboard.logout")}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">{t("dashboard.project_list")}</h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project._id} className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-semibold mb-1">
                {project.title?.[i18n.language] || project.title?.ka}
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                {project.description?.[i18n.language] || project.description?.ka}
              </p>
              <p className="text-xs text-gray-500 mb-4">
                Lat: {project.position.lat}, Lng: {project.position.lng}
              </p>
              <div className="flex justify-between items-center text-sm">
                <Link
                  to={`/admin/projects/edit/${project._id}`}
                  className="text-blue-600 hover:underline"
                >
                  {t("dashboard.edit")}
                </Link>
                <button
                  onClick={() => deleteProject(project._id)}
                  className="text-red-600 hover:underline"
                >
                  {t("dashboard.delete")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
