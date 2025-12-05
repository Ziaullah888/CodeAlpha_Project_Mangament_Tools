import { useState } from "react";
import { registerUser } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ name, email, password });
      navigate("/login");
     toast.success("Registered User ✅");
    } catch (err) {
      toast.error("registration failed ❌");
    }
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-6 rounded shadow w-80"
      >
        <h2 className="text-xl font-bold mb-4">Register</h2>

        <input
          className="w-full p-2 border mb-3"
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full p-2 border mb-3"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-2 border mb-3"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-green-600 text-white w-full p-2 rounded">
          Register
        </button>

        <p
          onClick={() => navigate("/login")}
          className="text-blue-500 mt-3 cursor-pointer text-sm"
        >
          Back to Login
        </p>
      </form>
    </div>
  );
}
