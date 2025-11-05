import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CareerOptionsAfter10th() {

      const user = useSelector((state) => state.user.userData);
  const options = [
    {
      title: "Science (PCM)",
      desc: "Physics, Chemistry, Math — best for students strong in problem-solving.",
      careers: "Engineer, Architect, Data Scientist, Software Developer",
    },
    {
      title: "Science (PCB)",
      desc: "Physics, Chemistry, Biology — perfect for those interested in medicine.",
      careers: "Doctor, Dentist, Biotechnologist, Pharmacist",
    },
    {
      title: "Commerce",
      desc: "Focus on Business, Accounts, Economics — great for number-savvy students.",
      careers: "Chartered Accountant, Banker, Entrepreneur, Business Analyst",
    },
    {
      title: "Arts / Humanities",
      desc: "History, Sociology, Political Science, Languages — ideal for creative thinkers.",
      careers: "Lawyer, Journalist, Designer, Psychologist, UPSC Aspirant",
    },
    {
      title: "Diploma / Polytechnic",
      desc: "3-year technical training for job-ready skills.",
      careers: "Diploma Engineer, Technician, Lab Assistant",
    },
    {
      title: "Vocational Courses",
      desc: "Skill-based short courses for early career start.",
      careers: "Fashion Designer, Photographer, Chef, Digital Marketer",
    },
    {
      title: "ITI (Industrial Training)",
      desc: "Hands-on trade training for practical jobs.",
      careers: "Electrician, Mechanic, Welder, Carpenter",
    },
  ];

  return (
    <>
  <nav className="flex justify-between items-center mx-auto p-4">
  <div className="flex place-items-center">
    <img src="./Logo.png" alt="Logo" className="sm:h-10 sm:w-10 h-8 w-8" />
    <h1 className="text-[16px] font-bold text-blue-600">Saksham Vidya</h1>
  </div>

  <ul className="hidden md:flex space-x-6 text-gray-900">
    <li>Home</li>
    {user ? <li to="/quiz">Quiz</li> : <li to="/login">Quiz</li>}
    <Link to="/career">Career Paths</Link>
    <Link to="/collage">Colleges</Link>
    <Link to="/dashboard">Dashboard</Link>
  </ul>

  <div className="space-x-3 flex">
    {user ? (
      <img
        src={user.image}
        className="rounded-[30px] bg-amber-400 border-2 border-b-black"
        height={50}
        width={50}
        alt="User"
      />
    ) : (
      <Link
        to="/login"
        className="bg-blue-500 text-white sm:px-4 sm:py-2 px-2 py-1 rounded-xl hover:bg-blue-700"
      >
        Get Started
      </Link>
    )}
  </div>
</nav>

    <div className="min-h-screen bg-gray-50 p-6 lg:p-12 text-gray-900">
      <header className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700">Career Options After 10th</h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Explore different paths you can choose after 10th grade based on your interests and strengths.
        </p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {options.map((opt, i) => (
          <div key={i} className="bg-white shadow-sm rounded-2xl p-6 border hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">{opt.title}</h2>
            <p className="text-sm text-gray-700 mb-3">{opt.desc}</p>
            <p className="text-xs text-gray-500"><strong>Careers:</strong> {opt.careers}</p>
          </div>
        ))}
      </main>

      <section className="max-w-3xl mx-auto mt-10 bg-white p-6 rounded-2xl shadow-sm">
        <h3 className="text-lg font-semibold mb-3">Tips for 10th Students</h3>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
          <li>Self-assess your interests — choose subjects that excite you.</li>
          <li>Talk to mentors, teachers, and counselors before finalizing a stream.</li>
          <li>Take an aptitude test to identify your strengths.</li>
          <li>Think long-term — pick a path that matches your career goals.</li>
        </ul>
      </section>

     <footer className="text-gray-700">
  <div className="mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
    <div>
      <h2 className="text-xl font-bold text-blue-600">Saksham Vidya</h2>
      <p className="text-sm text-gray-600">
        Empowering students with guidance, resources, and tools to choose the right career path.
      </p>
    </div>
    <div>
      <h3 className="font-semibold mb-3">Platform</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#">Assessments</a></li>
        <li><a href="#">Career Guidance</a></li>
        <li><a href="#">College Finder</a></li>
        <Link to="/dashboard">Dashboard</Link>
      </ul>
    </div>
    <div>
      <h3 className="font-semibold mb-3">Resources</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#">Study Material</a></li>
        <li><a href="#">Guides</a></li>
        <li><a href="#">Success Stories</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
    </div>
    <div>
      <h3 className="font-semibold mb-3">Support</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#">Help Center</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
    </div>
  </div>
  <div className="py-4 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between mx-auto px-6">
    <p>© 2025 Saksham Vidya</p>
    <div className="flex gap-4 mt-2 md:mt-0">
      <a href="#">Terms</a>
      <a href="#">Privacy</a>
      <a href="#">Cookie Policy</a>
    </div>
  </div>
</footer>
    </div>
    </>
  );
}
