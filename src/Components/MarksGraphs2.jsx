import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";

const MarksGraphs2 = () => {
 const user = useSelector((state) => state.user.userData);
 const savedScores = JSON.parse(localStorage.getItem("quizScores") || "{}");

const data = [
  { name: user?.fullName, Math: savedScores.maths, Bio:savedScores.Bio, Commerce:savedScores.commerce ,Arts : savedScores.Arts },
];


  return (
    <div className="w-screen h-screen bg-gray-100 flex flex-col">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center py-4 bg-white shadow">
        Students' Marks Overview
      </h1>

      {/* Graphs Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 p-6 overflow-hidden">
        {/* Graph 1: Math */}
        <div className="p-4 shadow rounded-2xl bg-white flex flex-col">
          <h2 className="text-xl font-semibold mb-2 text-center">Maths</h2>
          <div className="flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="Math" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Graph 2: Science */}
        <div className="p-4 shadow rounded-2xl bg-white flex flex-col">
          <h2 className="text-xl font-semibold mb-2 text-center">Biology</h2>
          <div className="flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Science" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Graph 3: English */}
        <div className="p-4 shadow rounded-2xl bg-white flex flex-col">
          <h2 className="text-xl font-semibold mb-2 text-center">Commerce</h2>
          <div className="flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="English" fill="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Graph 4: Arts & Humanities */}
        <div className="p-4 shadow rounded-2xl bg-white flex flex-col">
          <h2 className="text-xl font-semibold mb-2 text-center">
            Arts & Humanities
          </h2>
          <div className="flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="English" fill="#ffc656" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarksGraphs2;
