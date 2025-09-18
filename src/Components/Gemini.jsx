import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CareerRecommendation() {
  const marks = useSelector((state) => state.marks);
 console.log("Redux Marks:", marks);

  const savedScores = JSON.parse(localStorage.getItem("quizScores") || "{}");

  const [formData, setFormData] = useState({
    Biology: savedScores.Bio || 0,
    Mathematics: savedScores.maths || 0,
    Commerce: savedScores.commerce || 0,
    Arts: savedScores.arts || 0,
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: Number(value) }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await axios.post(
        "http://localhost:7000/api/v1/user/chat",
        formData
      );

      if (res.data && typeof res.data.data === "object") {
        setResult(res.data.data);
      } else {
        throw new Error("Invalid API response format");
      }
    } catch (err) {
      console.error("Frontend error:", err);
      setError("Failed to fetch recommendation. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 p-6">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-lg w-full">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
          Career Stream Recommendation
        </h1>

        <form className="grid gap-4" onSubmit={handleSubmit}>
          {["Biology", "Mathematics", "Commerce", "Arts"].map((subject) => (
            <input
              key={subject}
              type="number"
              name={subject}
              placeholder={`${subject} Marks`}
              value={formData[subject]}
              onChange={handleChange}
              className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              readOnly
            />
          ))}

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white font-semibold p-2 rounded-lg hover:bg-blue-600 disabled:opacity-50 flex items-center justify-center"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                Analyzing...
              </>
            ) : (
              "Get Recommendation"
            )}
          </button>
        </form>

        {result && (
          <div className="mt-6 bg-green-100 p-4 rounded-xl shadow animate-fadeIn">
            <h2 className="text-xl font-bold text-green-700">
              {result.highest_stream}
            </h2>
            <p className="mt-2 font-medium">{result.strengths}</p>
            <p className="mt-2 text-gray-700">{result.recommendation}</p>
          </div>
        )}

        {error && (
          <p className="mt-4 text-red-600 font-medium text-center">{error}</p>
        )}
      </div>
      <Link to="/dashboard" className="p-2 bg-black text-white rounded-2xl">Confirm</Link>
    </div>
  );
}
