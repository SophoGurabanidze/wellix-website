import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useProjects, useDeleteProject } from "../hooks/useProjects";

const Dashboard = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const { data: projects = [], isLoading, error } = useProjects();
  const { mutate: deleteProject } = useDeleteProject();

  const handleDelete = (id) => {
    if (window.confirm(t("dashboard.confirm_delete"))) {
      deleteProject(id);
    }
  };

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

        {isLoading && <p className="text-gray-600">{t("dashboard.loading")}</p>}
        {error && (
          <p className="text-red-500 mb-4">{t("dashboard.load_error")} {error.message}</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project._id} className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-semibold mb-1">
                {project.title?.[lang] || project.title?.ka}
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                {project.description?.[lang] || project.description?.ka}
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
                  onClick={() => handleDelete(project._id)}
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

