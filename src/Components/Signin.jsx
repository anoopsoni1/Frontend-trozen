import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {

const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    email: "",
    password: "",
    Class: "", // Capital "C" to match your schema
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] || null });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const [loading , setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  const data = new FormData();
  data.append("username", formData.username);
  data.append("fullName", formData.fullName);
  data.append("email", formData.email);
  data.append("password", formData.password);
  if (formData.Class) data.append("Class", Number(formData.Class));
  if (formData.image) data.append("image", formData.image);

  try {
    const res = await axios.post(
      "http://localhost:7000/api/v1/user/register",
      data,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    alert(res.data.message || "Signup Successful!");
         navigate("/login")
  } catch (error) {
    alert(error.response?.data?.message || "Signup failed!");
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="min-h-screen flex bg-gray-50">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 py-10">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">
          Create your account
        </h2>
        <p className="text-gray-500 mb-6">Join us and get started quickly</p>

        <form
          className="w-full max-w-md bg-white p-8 rounded-3xl shadow-lg space-y-5"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <select
            name="Class"
            value={formData.Class}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option value="">Select Class</option>
            <option value="10">10th</option>
            <option value="12">12th</option>
          </select>

          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl p-2 bg-gray-50 cursor-pointer"
          />

         <button
  type="submit"
  disabled={loading}
  className={`w-full p-3 rounded-xl font-semibold transition ${
    loading
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-green-600 hover:bg-green-700 text-white"
  }`}
>
  {loading ? "Creating Account..." : "Sign Up"}
</button>


          <p className="text-center text-sm text-gray-500 mt-2">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Log in
            </a>
          </p>
        </form>
      </div>

      <div className="hidden md:flex w-1/2 bg-[url('./login.png')] bg-cover bg-center" />
    </div>
  );
}
