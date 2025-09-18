import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { LogOut, User, BookOpen, Settings, Key, BarChart2, LogIn, LogInIcon } from "lucide-react";
import { clearUser } from "../Slice/user.slice";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.userData);

  const handleLogout = () => {
    dispatch(clearUser());
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">
          Welcome, {user?.fullName || "User"} 👋
        </h1>
        <div className="flex items-center gap-4">
          {user?.image ? (
            <img
              src={user.image}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover border border-gray-300"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-600 font-bold">
                {user?.fullName?.charAt(0) || "U"}
              </span>
            </div>
          )}
          {
user ?(<> <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-xl transition"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button></>):    (<><button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-00 text-white px-3 py-2 rounded-xl transition"
          >
            <LogInIcon className="w-4 h-4" /> Login
          </button> </>)
          }
         
        </div>
      </header>

      {/* Main Dashboard */}
      <main className="flex-1 p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center">
          {user?.image ? (
            <img
              src={user.image}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-gray-200 shadow mb-4"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-4">
              <User className="w-10 h-10 text-gray-500" />
            </div>
          )}
          <h2 className="text-lg font-semibold">{user?.fullName}</h2>
          <p className="text-gray-500 text-sm">{user?.email}</p>
          <p className="text-gray-500 text-sm">Username: {user?.username}</p>
        </div>

        {/* Class Card */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col justify-center items-center">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-6 h-6 text-green-600" />
            <h2 className="text-lg font-semibold">Class Info</h2>
          </div>
          <p className="text-gray-500">
            {user?.Class ? `Class ${user.Class}` : "Not Provided"}
          </p>
        </div>

        {/* Quiz Score Cards */}
        {["Bio", "Maths", "Commerce", "Arts"].map((subject) => (
          <div
            key={subject}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col justify-center items-center"
          >
            <div className="flex items-center gap-2 mb-2">
              <BarChart2 className="w-6 h-6 text-blue-600" />
              <h2 className="text-lg font-semibold">{subject} Score</h2>
            </div>
            <p className="text-gray-500 text-xl font-bold">
              {user?.quizScores?.[subject] ?? "N/A"}%
            </p>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-white text-center p-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} YourAppName. All rights reserved.
      </footer>
    </div>
  );
}
