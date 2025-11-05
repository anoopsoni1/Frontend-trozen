import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { LogOut, User, BookOpen, Settings, Key, BarChart2, LogIn, LogInIcon } from "lucide-react";
import { clearUser } from "../Slice/user.slice";
import { Link, useNavigate } from "react-router-dom";
import MarksGraphs from "./Graphs";
import MarksGraphs2 from "./MarksGraphs2";
export default function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.userData);

 

  const handleLogout = () => {
    dispatch(clearUser());
     localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
    
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className=" sm:block text-xl font-bold text-gray-800 hidden">
          Welcome, {user?.fullName || "User"} 
        </h1>
        <Link to="/" className="hover:text-blue-600">Home</Link>
       
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
      </header>

  
     <div className="overflow-hidden">
{user?.Class === 10 ? (
  <>
        <MarksGraphs2 />
</>
) : (
<>
</>

)}
</div>
        


      <footer className="bg-white text-center p-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} Saksham vidya. All rights reserved.
      </footer>
    </div>
  );
}
