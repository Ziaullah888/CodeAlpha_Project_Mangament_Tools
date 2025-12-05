import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const API = "http://localhost:5000/api/projects";

export default function Dashboard() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const res = await axios.get(API, {
        headers: { Authorization: localStorage.getItem("token") },
      });
      console.log(res.data);
      setProjects(res.data.projects || res.data || []);
    } catch (err) {
      toast.error("Failed to load projects");
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Projects</h2>

      <button
        className="bg-blue-500 text-white px-3 py-2 rounded my-4"
        onClick={() => toast("Open modal to create project")}
      >
        + New Project
      </button>

      <div className="space-y-3">
        {projects.map((p) => (
          <div key={p._id} className="p-4 bg-gray-100 rounded shadow">
            <b>{p.name}</b>
            <p>{p.description}</p>

            <button
              className="text-blue-600 mr-4"
              onClick={() => (window.location.href = `/projects/${p._id}`)}
            >
              View
            </button>

            <button
              className="text-red-600"
              onClick={async () => {
                await axios.delete(`${API}/${p._id}`, {
                  headers: { Authorization: localStorage.getItem("token") },
                });
                toast.success("Deleted!");
                fetchProjects();
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
