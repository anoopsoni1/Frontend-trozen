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
import { Link } from "react-router-dom";


function shuffleArray(array) {
  let arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const collegeQuestions = [
  // Bio / Medical
  { id: "s1", stream: "Bio", question: "Which of the following organisms does not have a backbone?", options:["Fish","Snake","Earthworm","Bird"], answer:"Earthworm" },
  { id: "s2", stream: "Bio", question: "If a person’s pancreas stops working, which disease is most likely to occur?", options:["Malaria","Diabetes","Tuberculosis","Jaundice"], answer:"Diabetes" },
  { id: "s3", stream: "Bio", question: "In Mendel’s pea plant experiments, tallness (T) is dominant over dwarfness (t). If two heterozygous tall plants (Tt) are crossed, the probability of getting a dwarf plant is:", options:["25%","50%","75%","0%"], answer:"25%" },
  { id: "s4", stream: "Bio", question: "Which part of the human brain controls balance and posture?", options:["Cerebrum","Cerebellum","Medulla","Hypothalamus"], answer:"Cerebellum" },
  { id: "s5", stream: "Bio", question: "What is the pH value of human blood?", options:["7.40","7","0","8"], answer:"7.40" },
  { id: "s6", stream: "Bio", question: "Which of these is not a vertebrate?", options:["Frog","Snake","Earthworm","Pigeon"], answer:"Earthworm" },
  { id: "s7", stream: "Bio", question: "DNA replication is described as “semi-conservative” because:", options:["Both strands are newly formed","One strand is new, the other is old","No new strands are formed","It produces RNA"], answer:"One strand is new, the other is old" },
  { id: "s8", stream: "Bio", question: "Which of the following statements is correct regarding lac operon?", options:["It is activated when lactose is absent and glucose is present","It is activated when both lactose and glucose are absent","It is activated when lactose is present and glucose is absent","It is activated only when glucose is present"], answer:"It is activated when lactose is present and glucose is absent" },
  { id: "s9", stream: "Bio", question: "Which of the following is an example of codominance?", options:["Haemophilia","ABO blood group system","Colour blindness","Sickle cell anaemia"], answer:"ABO blood group system" },
  { id: "s10", stream: "Bio", question: "Which type of immunity is provided by vaccination?", options:["Passive natural immunity","Passive artificial immunity","Active natural immunity","Active artificial immunity"], answer:"Active artificial immunity" },

  // Chemistry / Maths
  { id: "m1", stream: "maths", question: "The pH of 0.001 M HCl is:", options:["1","2","3","11"], answer:"3" },
  { id: "m2", stream: "maths", question: "The half-life of a radioactive substance is 10 days. After 30 days, what fraction of the substance remains?", options:["1/8","1/16","1/32","1/4"], answer:"1/8" },
  { id: "m3", stream: "maths", question: "If sinθ+cosθ=√2, then the value of sin3θ+cos3θ is:", options:["1","1.414","1/2","3/2"], answer:"1" },
  { id: "m4", stream: "maths", question: "If sum of coefficients in expansion of (2x−3)^8 is:", options:["1","0","6561","81"], answer:"6561" },
  { id: "m5", stream: "maths", question: "The number of solutions of sinx=cosx in [0,2π] is:", options:["1","2","3","4"], answer:"2" },
  { id: "m6", stream: "maths", question: "If A and B are independent events with P(A)=1/3, P(B)=1/4, then P(A ∩ B) = ?", options:["1/12","1/7","1/6","1/3"], answer:"1/12" },
  { id: "m7", stream: "maths", question: "The number of subsets of a set with 8 elements is:", options:["128","256","512","1024"], answer:"256" },
  { id: "m8", stream: "maths", question: "The equation of line passing through (1,2) and perpendicular to y=3x+5 is:", options:["y−2=−1/3(x−1)","y−2=3(x−1)","y+2=1/3(x+1)","y−1=2x"], answer:"y−2=−1/3(x−1)" },
  { id: "m9", stream: "maths", question: "A card is drawn at random. Probability that it is a black face card is:", options:["2/13","3/26","6/52","3/13"], answer:"2/13" },
  { id: "m10", stream: "maths", question: "The sum of infinite GP 5+2.5+1.25+… = ?", options:["10","0","2","8"], answer:"10" },

  // Arts
  { id: "ar1", stream: "arts", question: "Who wrote the “Ain-i-Akbari”?", options:["Abul Fazl","Amir Khusro","Kalhana","Banabhatta"], answer:"Abul Fazl" },
  { id: "ar2", stream: "arts", question: "The Tropic of Cancer passes through how many states in India?", options:["5","6","7","8"], answer:"6" },
  { id: "ar3", stream: "arts", question: "Who wrote “Wealth of Nations”?", options:["Adam Smith","Karl Marx","John Maynard Keynes","Milton Friedman"], answer:"Adam Smith" },
  { id: "ar4", stream: "arts", question: "Sigmund Freud is known for developing:", options:["Cognitive Theory","Psychoanalysis","Behaviorism","Humanistic Psychology"], answer:"Psychoanalysis" },
  { id: "ar5", stream: "arts", question: "Who was the founder of the Vijayanagara Empire?", options:["Harihara and Bukka","Krishnadevaraya","Rajaraja Chola","Babur"], answer:"Harihara and Bukka" },
  { id: "ar6", stream: "arts", question: "Which is the deepest ocean in the world?", options:["Atlantic","Pacific","Indian","Arctic"], answer:"Pacific" },
  { id: "ar7", stream: "arts", question: "Which Indian city is called the “City of Seven Hills”?", options:["Mumbai","Kolkata","Shimla","Delhi"], answer:"Mumbai" },
  { id: "ar8", stream: "arts", question: "The Fundamental Duties of Indian citizens were added by:", options:["42nd Amendment","44th Amendment","52nd Amendment","61st Amendment"], answer:"42nd Amendment" },
  { id: "ar9", stream: "arts", question: "Inflation is measured by:", options:["Consumer Price Index","Human Development Index","Gini Index","Poverty Line"], answer:"Consumer Price Index" },
  { id: "ar10", stream: "arts", question: "Who wrote “Gitanjali”?", options:["Rabindranath Tagore","Sarojini Naidu","Bankim Chandra Chatterjee","Kalidasa"], answer:"Rabindranath Tagore" },

  // Commerce
  { id: "c1", stream: "commerce", question: "Revenue expenditure is:", options:["Incurred for earning revenue","For buying fixed assets","For long-term benefits","Capital in nature"], answer:"Incurred for earning revenue" },
  { id: "c2", stream: "commerce", question: "Which of the following is a non-current asset?", options:["Stock","Building","Cash","Debtors"], answer:"Building" },
  { id: "c3", stream: "commerce", question: "Accounting is called the “language of business” because:", options:["It is universal","It communicates financial information","It uses numbers","It is regulated"], answer:"It is universal" },
  { id: "c4", stream: "commerce", question: "CSR stands for:", options:["Company Social Responsibility","Corporate Social Responsibility","Consumer Service Rules","Central Service Regulation"], answer:"Corporate Social Responsibility" },
  { id: "c5", stream: "commerce", question: "Oligopoly means:", options:["Single seller","Few sellers","Many sellers","No competition"], answer:"Few sellers" },
  { id: "c6", stream: "commerce", question: "Which instrument is a short-term money market instrument?", options:["Treasury Bills","Bonds","Equity shares","Debenture"], answer:"Treasury Bills" },
  { id: "c7", stream: "commerce", question: "Banking Regulation Act was enacted in:", options:["1949","1955","1969","1975"], answer:"1949" },
  { id: "c8", stream: "commerce", question: "Bull market refers to:", options:["Falling prices","Rising prices","Stable market","Volatile market"], answer:"Rising prices" },
  { id: "c9", stream: "commerce", question: "Accounting standard AS-1 deals with:", options:["Disclosure of Accounting Policies","Depreciation","Revenue recognition","Inventory valuation"], answer:"Disclosure of Accounting Policies" },
  { id: "c10", stream: "commerce", question: "Which instrument is safest among investment options?", options:["Equity shares","Government Bonds","Mutual Funds","Debentures"], answer:"Government Bonds" },

  { id: "ag1", stream: "Bio", question: "Green revolution in India primarily focused on:", options:["Horticulture","High-yielding variety crops","Organic farming","Agroforestry"], answer:"High-yielding variety crops" },
  { id: "ag2", stream: "Bio", question: "Which breed is known for high milk yield?", options:["Gir","Holstein-Friesian","Sahiwal","Red Sindhi"], answer:"Holstein-Friesian" },
  { id: "ag3", stream: "Bio", question: "Which one plant is dicotyledon?", options:["Mango","Wheat","Coconut","Corn"], answer:"Mango" },
  { id: "ag4", stream: "Bio", question: "Micro-irrigation systems include:", options:["Sprinkler and drip irrigation","Canal and tube wells","Rainfed systems","Tank irrigation"], answer:"Sprinkler and drip irrigation" },
  { id: "ag5", stream: "Bio", question: "Which soil type is most prone to waterlogging?", options:["Sandy","Clay","Loam","Red soil"], answer:"Clay" },
  { id: "ag6", stream: "Bio", question: "Crop insurance protects against:", options:["Natural disasters","Price fluctuation","Market loss","All of the above"], answer:"All of the above" },
];



function Question({ question, index, total, onAnswer, answer }) {
const user = useSelector((state) => state.user.userData);

  return (
  <>
  <div className="bg-[url('./hii.jpg')] h-full bg-cover ">
  <nav className="flex justify-between items-center mx-auto p-4">
  <div className="flex place-items-center">
    <img src="./Logo.png" alt="" height={50} width={50} />
    <Link to="/" className="text-2xl font-bold text-blue-600">Saksham Vidya</Link>
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
  const [showWarning, setShowWarning] = useState(false); // modal warning
  const swiperRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    const streams = ["Bio", "maths", "commerce", "arts"];
    const allQuestions = streams.flatMap((s) =>
      shuffleArray(collegeQuestions.filter((q) => q.stream === s)).slice(0, 10)
    );
    setQuestions(allQuestions);
    return () => clearTimeout(timer);
  }, []);

  function handleAnswer(qId, ans) {
    if (submitted) return; 
    setAnswers((prev) => ({ ...prev, [qId]: ans }));
  }

  function handleSubmit(showPopup = false) {
    if (submitted) return;
    setSubmitted(true);

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

    if (showPopup) {
      setShowWarning(true); 
    } else {
      navigate("/chat");
    }
  }

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && !submitted) {
        handleSubmit(true);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [submitted, answers, questions]);

  if (loading) return <div className="text-center mt-20">Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      {showWarning && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md text-center">
            <h2 className="text-xl font-bold text-red-600">
              Quiz Auto-Submitted!
            </h2>
            <p className="mt-3 text-gray-700">
              You switched tabs or minimized the window. Your answers have been
              auto-submitted to prevent cheating.
            </p>
            <button
              onClick={() => navigate("/chat")}
              className="mt-5 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      <Swiper
        modules={[Navigation]}
        allowTouchMove={!submitted} 
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
                disabled={idx === 0 || submitted} 
              >
                Prev
              </button>

              {idx !== questions.length - 1 && (
                <button
                  className="px-4 py-2 bg-yellow-500 text-white rounded-lg"
                  onClick={() => swiperRef.current.slideNext()}
                  disabled={submitted} 
                >
                  Skip
                </button>
              )}

              {idx === questions.length - 1 ? (
                <button
                  className="px-4 py-2 bg-green-500 text-white rounded-lg"
                  onClick={() => handleSubmit(false)}
                  disabled={submitted} 
                >
                  Submit
                </button>
              ) : (
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                  onClick={() => swiperRef.current.slideNext()}
                  disabled={!answers[q.id] || submitted} 
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
