import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useDispatch } from "react-redux";
import { setMarks } from "../Slice/marks.slice.jsx"
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";


function shuffleArray(array) {
  let arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const collegeQuestions = [

  { id: "s1", stream: "Bio", question: "Velocity of light in vacuum?", options:["3×10^8","1.5×10^8","3×10^6","1×10^8"], answer:"3×10^8" },
  { id: "s2", stream: "Bio", question: "Acceleration due to gravity?", options:["9.8 m/s^2","10 m/s^2","9 m/s^2","8.8 m/s^2"], answer:"9.8 m/s^2" },
  { id: "s3", stream: "Bio", question: "pH of pure water?", options:["7","0","14","1"], answer:"7" },
  { id: "s4", stream: "Bio", question: "DNA full form?", options:["Deoxyribonucleic Acid","Ribonucleic Acid","Acid DNA","Deoxy Acid"], answer:"Deoxyribonucleic Acid" },
  { id: "s5", stream: "Bio", question: "Boiling point of water?", options:["100°C","90°C","120°C","80°C"], answer:"100°C" },

  
  { id: "m1", stream: "maths", question: "Derivative of x^2?", options:["2x","x","x^2","2"], answer:"2x" },
  { id: "m2", stream: "maths", question: "Integral of 1/x dx?", options:["ln|x|+C","x","1/x^2","x^2/2"], answer:"ln|x|+C" },
  { id: "m3", stream: "maths", question: "Value of sin90°?", options:["1","0","0.5","-1"], answer:"1" },
  { id: "m4", stream: "maths", question: "Value of cos0°?", options:["1","0","0.5","-1"], answer:"1" },
  { id: "m5", stream: "maths", question: "Sum of first 100 natural numbers?", options:["5050","5000","10000","505"], answer:"5050" },


  { id: "c1", stream: "commerce", question: "Capital expenditure?", options:["For long-term benefits","For earning revenue","For salaries","For buying goods"], answer:"For long-term benefits" },
  { id: "c2", stream: "commerce", question: "Revenue expenditure?", options:["For earning revenue","Buying fixed assets","Long-term benefits","Capital in nature"], answer:"For earning revenue" },
  { id: "c3", stream: "commerce", question: "Accounting is called?", options:["Language of business","Universal","Numbers","Regulated"], answer:"Language of business" },
  { id: "c4", stream: "commerce", question: "Oligopoly means?", options:["Few sellers","Single seller","Many sellers","No competition"], answer:"Few sellers" },
  { id: "c5", stream: "commerce", question: "CSR stands for?", options:["Corporate Social Responsibility","Company Service Rules","Consumer Service Rules","Central Service Regulation"], answer:"Corporate Social Responsibility" },


  
  { id: "ar1", stream: "arts", question: "Who wrote 'Ain-i-Akbari'?", options:["Abul Fazl","Amir Khusro","Kalhana","Banabhatta"], answer:"Abul Fazl" },
  { id: "ar2", stream: "arts", question: "Freud known for?", options:["Psychoanalysis","Behaviorism","Cognitive","Humanistic"], answer:"Psychoanalysis" },
  { id: "ar3", stream: "arts", question: "Tropic of Cancer passes through?", options:["6 states","5","7","8"], answer:"6 states" },
  { id: "ar4", stream: "arts", question: "Founder of Vijayanagara Empire?", options:["Harihara & Bukka","Krishnadevaraya","Rajaraja Chola","Babur"], answer:"Harihara & Bukka" },
  { id: "ar5", stream: "arts", question: "Who wrote 'Wealth of Nations'?", options:["Adam Smith","Karl Marx","Keynes","Milton Friedman"], answer:"Adam Smith" },
];


function Question({ question, index, total, onAnswer, answer }) {
const user = useSelector((state) => state.user.userData);
  return (
  <>
  <div className="bg-[url('./hii.jpg')] h-full bg-cover ">
  <nav className="flex justify-between items-center mx-auto p-4">
  <div className="flex place-items-center">
    <img src="./Logo.png" alt="" height={50} width={50} />
    <h1 className="text-2xl font-bold text-blue-600">Saksham Vidya</h1>
  </div>
  <div className="space-x-3 flex">
    {user ? (
      <img
        src={user.image}
        className="rounded-[30px] bg-amber-400 border-2 border-b-black"
        height={50}
        width={50}
        alt=""
      />
    ) : (
      <Link
        to="/login"
        className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
      >
        Getstarted
      </Link>
    )}

   
  </div>
</nav>
    <div className="w-full p-3 text-center grid ">
      <h2 className="text-lg font-medium text-gray-500 mb-2">
        Question {index + 1} of {total}
      </h2>
      <h2 className="text-3xl font-bold   mb-4">{question.question}</h2>
      <div className="grid grid-cols-1 gap-8">
        {question.options.map((opt) => (
          <button
            key={opt}
            className={`py-2 px-4 rounded-lg border hover:bg-blue-200 ${
              answer === opt ? "bg-blue-400 text-white" : "bg-white"
            }`}
            onClick={() => onAnswer(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
    </div>
    </>
  );
}



export default function CollegeQuiz() {
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const swiperRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    const streams = ["Bio", "maths", "commerce", "arts"];
    const allQuestions = streams.flatMap((s) =>
      shuffleArray(collegeQuestions.filter((q) => q.stream === s)).slice(0, 5)
    );
    setQuestions(allQuestions);
    return () => clearTimeout(timer);
  }, []);

  function handleAnswer(qId, ans) {
    setAnswers((prev) => ({ ...prev, [qId]: ans }));
  }

  function handleSubmit() {
    const streams = ["Bio", "maths", "commerce", "arts"];
    let scores = {};
    streams.forEach((stream) => {
      const streamQs = questions.filter((q) => q.stream === stream);
      scores[stream] = streamQs.reduce(
        (count, q) => count + (answers[q.id] === q.answer ? 1 : 0),
        0
      );
    });

    const total = Object.values(scores).reduce((sum, s) => sum + s, 0);
    dispatch(setMarks({ ...scores, total }));
    localStorage.setItem("quizScores", JSON.stringify({ ...scores, total }));
        setSubmitted(true);
          navigate("/chat")
  }

  if (loading) return <div className="text-center mt-20">Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Swiper
        modules={[Navigation]}
        allowTouchMove={false}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full h-screen"
      >
        {questions.map((q, idx) => (
          <SwiperSlide key={q.id} className="flex items-center justify-center">
            <Question
              question={q}
              index={idx}
              total={questions.length}
              onAnswer={(ans) => handleAnswer(q.id, ans)}
              answer={answers[q.id]}
            />
            
            <div className="absolute bottom-6 w-full flex justify-between px-6">
              <button
                className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
                onClick={() => swiperRef.current.slidePrev()}
                disabled={idx === 0}
              >
                Prev
              </button>

              {idx === questions.length - 1 ? (
                <button
                  className="px-4 py-2 bg-green-500 text-white rounded-lg"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              ) : (
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                  onClick={() => swiperRef.current.slideNext()}
                  disabled={!answers[q.id]} 
                >
                  Next
                </button>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
