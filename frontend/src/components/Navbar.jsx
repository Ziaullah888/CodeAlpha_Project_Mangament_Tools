import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    toast.success("Logout");
  };

  return (
    <nav className="w-full bg-white shadow p-4 flex justify-between items-center">
      <h1
        className="text-xl font-bold cursor-pointer"
        onClick={() => navigate("/dashboard")}
      >
        Project Manager
      </h1>

      {token ? (
        <div className="flex gap-5 items-center">
          <Link
            to="/dashboard"
            className="text-gray-700 hover:text-black font-medium"
          >
            Dashboard
          </Link>

          <Link
            to="/dashboard"
            className="text-gray-700 hover:text-black font-medium"
          >
            Projects
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-1 rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex gap-5">
          <Link
            to="/login"
            className="text-gray-700 hover:text-black font-medium"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="text-gray-700 hover:text-black font-medium"
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
}
