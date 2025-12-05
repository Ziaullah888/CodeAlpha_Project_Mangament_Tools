import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const API = "http://localhost:5000/api/projects";

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState({ name: "", description: "" });

  const loadProject = async () => {
    const res = await axios.get(`${API}/${id}`, {
      headers: { Authorization: localStorage.getItem("token") },
    });
    setProject(res.data);
  };

  const saveChanges = async () => {
    await axios.put(`${API}/${id}`, project, {
      headers: { Authorization: localStorage.getItem("token") },
    });
    toast.success("Project updated!");
  };

  useEffect(() => {
    loadProject();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Edit Project</h2>

      <input
        className="border p-2 block my-3 w-full"
        value={project.name}
        onChange={(e) => setProject({ ...project, name: e.target.value })}
      />
      <textarea
        className="border p-2 block my-3 w-full"
        value={project.description}
        onChange={(e) =>
          setProject({ ...project, description: e.target.value })
        }
      />

      <button
        className="bg-green-600 text-white px-4 py-2 rounded"
        onClick={saveChanges}
      >
        Save
      </button>
    </div>
  );
}
