import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/Dashboard";
import ProjectDetails from "./pages/ProjectDetails";
import Navbar from "./components/Navbar";
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <>
      <Router>
        <Navbar />
       <Toaster position="bottom-right" reverseOrder={false} />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
