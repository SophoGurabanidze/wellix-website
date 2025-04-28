import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");

  const fetchProjects = async () => {
    try {
      const res = await API.get("/completed-projects");
      setProjects(res.data);
    } catch (err) {
      setError(`Failed to load projects ${err}`);
    }
  };

  const deleteProject = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;

    try {
      await API.delete(`/completed-projects/${id}`);
      fetchProjects();
    } catch (err) {
      alert(`Failed to delete project ${err}`);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow p-6 flex flex-col  min-h-screen text-center">
        <div>
          <h2 className="text-xl font-bold mb-8">Welcome, Admin</h2>

          <Link
            to="/admin/projects/new"
            className="block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mb-4"
          >
            + Add Project
          </Link>
        </div>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/admin";
          }}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Completed Projects</h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project._id} className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-semibold mb-1">{project.title}</h2>
              <p className="text-sm text-gray-600 mb-2">{project.description}</p>
              <p className="text-xs text-gray-500 mb-4">
                Lat: {project.position.lat}, Lng: {project.position.lng}
              </p>
              <div className="flex justify-between items-center text-sm">
                <Link
                  to={`/admin/projects/edit/${project._id}`}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteProject(project._id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
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
