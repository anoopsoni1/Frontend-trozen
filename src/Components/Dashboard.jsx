import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { LogOut, User, BookOpen, Settings, Key, BarChart2, LogIn, LogInIcon } from "lucide-react";
import { clearUser } from "../Slice/user.slice";
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const savedScores = JSON.parse(localStorage.getItem("quizScores") || "{}");
  const user = useSelector((state) => state.user.userData);

const anoop = [
  {stream : "Bio" , mark : savedScores.Bio , img : "https://t3.ftcdn.net/jpg/00/85/94/80/360_F_85948050_pnCz9BxRzGqFbp5e2mR7RmaJG8e2kKFP.jpg"},
  {stream : "maths" , mark : savedScores.maths , img : "https://blogcdn.aakash.ac.in/wordpress_media/2022/12/Blog-Image-4.jpg" },
  {stream : "commerce" , mark : savedScores.commerce , img : "https://www.perfecttutorials.in/wp-content/uploads/2025/02/commerce-1-e1739516264529.png" },
  {stream : "Arts" , mark : savedScores.arts , img : "https://assets.change.org/photos/9/qv/lk/fMqvLKfMbUVNxcH-800x450-noPad.jpg?1488726722" },
]

  const handleLogout = () => {
    dispatch(clearUser());
     localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
    
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">
          Welcome, {user?.fullName || "User"} 
        </h1>
        <Link to="/" className="hover:text-blue-600">Home</Link>
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

  
      <main className="flex-1 p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
       
        <div className="  bg-[url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yMjJiYXRjaDUta3VsLTAzLmpwZw.jpg')] bg-cover p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center">
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

  
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col justify-center items-center">
            <img src="https://img.freepik.com/free-vector/empty-classroom-interior-with-chalkboard_1308-65378.jpg" alt="" />
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-6 h-6 text-green-600" />
            <h2 className="text-lg font-semibold">Class Info</h2>
          </div>
          <p className="text-gray-500">
            {user?.Class ? `Class ${user.Class}` : "Not Provided"}
          </p>
        </div>

         { anoop.map((subject) => (
          <div
            key={subject}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col justify-center items-center"
          >
              <img src={subject.img} alt="" />
            <div className="flex items-center gap-2 mb-2">
              <BarChart2 className="w-6 h-6 text-blue-600" />
              <h2 className="text-lg font-semibold z-50">{subject.stream} Score</h2>
            </div>
            <p className="text-gray-500 text-xl font-bold z-50">
              {subject.mark}
            </p>
          </div>
        ))}
      </main>


      <footer className="bg-white text-center p-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} Saksham vidya. All rights reserved.
      </footer>
    </div>
  );
}
