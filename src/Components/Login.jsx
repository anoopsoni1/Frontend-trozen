import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../Slice/user.slice";

export default function LoginPage() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post("http://localhost:7000/api/v1/user/login", {
        username: formData.username,
        password: formData.password,
      });
   
      alert("Login Successful!");
      dispatch(setUser(res.data.data.user));
          navigate("/dashboard")
    } catch (err) {
      console.error(" Login Error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-5xl">
       
        <div className="md:w-1/2 w-full p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h2>
          <p className="text-gray-500 mb-6">
            Enter your username and password to access your account.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 mb-1">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="h-4 w-4 text-blue-600" />
                <span className="text-gray-600 text-sm">Remember Me</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot Your Password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>

          <p className="text-center text-gray-600  mt-6 text-sm">
            Don’t Have An Account?{" "}
            <Link to="/SignIn" className="text-blue-600 hover:underline">
              Register Now.
            </Link>
          </p>
          <Link to="/" className="text-blue-600 hover:underline text-center">
             Home
            </Link>
        </div>

        
        <div className="hidden md:flex md:w-1/2 bg-[url('./loginimg.png')] bg-cover  text-white p-10 flex-col justify-center">
         
        </div>
      </div>
    </div>
  );
}
