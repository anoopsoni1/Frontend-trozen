import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CareerPathSinglePage() {
  const user = useSelector((state) => state.user.userData);


  const paths = [
    {
      title: "Law",
      summary: "Lawyers interpret and apply the law to advise clients, represent them in court, and draft legal documents.",
      stages: ["Earn a law degree (LLB/BA-LLB)", "Intern at law firms/courts", "Pass bar exam", "Specialize in corporate, criminal, or civil law"],
      img : "https://media.istockphoto.com/id/1139699594/photo/law-concept-themis-statue-judge-hammer-and-books.jpg?s=612x612&w=0&k=20&c=VgFftTqxcgJswpCK8IQS9bpCo9aDJ_Vsgigwa0bnH-c="
    },
    {
      title: "Medicine",
      summary: "Doctors diagnose illnesses, prescribe treatment, and improve public health through clinical practice.",
      stages: ["Clear medical entrance exam (NEET/MCAT)", "Complete MBBS/MD", "Internship & residency", "Specialize in a field like surgery, pediatrics, or cardiology"],
      img : "https://t3.ftcdn.net/jpg/02/38/08/42/360_F_238084232_5XhGUddDZezzJxybvVXzfPp8cOKAuqRp.jpg"
    },
    {
      title: "Engineering",
      summary: "Engineers design and build systems, machines, and technologies to solve real-world problems.",
      stages: ["Choose a branch (Mechanical, CS, Electrical, Civil)", "Complete B.Tech/B.E.", "Do projects & internships", "Work in R&D or industry"],
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Ql6B76Mv66vn-uSftggVcETAiaw4cnOe_aYbHbeN9ZJeyCiezW56kn1LDKqDyiR97aI&usqp=CAU"
    },
    {
      title: "Business & Management",
      summary: "Managers plan, lead, and organize teams to meet business goals efficiently.",
      stages: ["Get a BBA/MBA or relevant degree", "Learn finance, marketing, HR", "Lead small teams", "Grow into executive roles"],
      img : "https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_10_Business-Management-Jobs-Outlook-and-Career-Path.jpg"
    },
    {
      title: "Arts & Humanities",
      summary: "Explore literature, philosophy, history, and culture to work in education, writing, media, or research.",
      stages: ["Complete BA/MA in chosen subject", "Develop critical thinking & communication", "Publish work or research", "Pursue careers in teaching, journalism, or writing"],
      img : "https://www.ijrah.com/public/journals/1/homepageImage_en_US.png"
    },
    {
      title: "Science & Research",
      summary: "Scientists investigate natural phenomena, perform experiments, and advance technology and knowledge.",
      stages: ["Earn B.Sc/M.Sc/PhD", "Work in labs & research institutions", "Publish findings", "Innovate in fields like physics, chemistry, biology"],
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScB8sCZOnkI2CMh_PB7FIcMyjRVJq88dZmrg&s"
    },
    {
      title: "Creative Arts & Media",
      summary: "Artists, filmmakers, and designers create visual, written, and performing art that informs and inspires.",
      stages: ["Learn skills (painting, music, film, design)", "Build a strong portfolio", "Collaborate on projects", "Showcase work publicly"],
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU4G0RNe740p045qb7MjO8ujFK09vk9BfdGA&s"
    },
  ];

  return (
    <>
    <div className="min-h-screen bg-gray-50 text-gray-900  bg-[url('/anoop.jpg')] bg-cover">
<nav className="flex justify-between items-center mx-auto p-4">
  <div className="flex place-items-center">
    <img src="./Logo.png" alt="Logo" className="sm:h-10 sm:w-10 h-8 w-8" />
    <h1 className="text-[16px] font-bold text-blue-600">Saksham Vidya</h1>
  </div>

  <ul className="hidden md:flex space-x-6 text-gray-900">
    <Link to="/">Home</Link>
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

    
      <header className="mx-auto mb-8">
        <h1 className="text-3xl font-bold text-center mb-2">Explore 7 Career Paths</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          Here are seven major career fields with brief descriptions and typical steps to get started.
        </p>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
       
        {paths.map((p, index) => (
          <div key={index} className="rounded-2xl shadow-sm p-6 flex flex-col">
        <img  className="rounded-2xl"  src={p.img} alt="" />
            <h2 className="text-xl font-semibold mb-2 text-center">{p.title}</h2>
            <p className="text-sm text-gray-600 mb-4">{p.summary}</p>
            <ul className="text-sm list-disc pl-4 flex-1">
              {p.stages.map((stage, i) => (
                <li key={i} className="mb-1">{stage}</li>
              ))}
            </ul>
            <button
              onClick={() => alert(`You selected: ${p.title}`)}
              className="mt-4 px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Learn More
            </button>
          </div>
        ))}
      </main>


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
        <li><a href="/dashboard">Dashboard</a></li>
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
