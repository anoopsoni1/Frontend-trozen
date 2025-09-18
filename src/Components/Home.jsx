import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { FaFlask, FaRoad, FaUniversity, FaRegCalendarAlt, FaBullseye, FaBook } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Home() {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation();
const user = useSelector((state) => state.user.userData);
  const features = [
    { id: 1, title: t("features.f1.title"), desc: t("features.f1.desc"), color: "bg-blue-100 text-blue-600" ,icons : <FaFlask size={24} className="text-blue-500" /> },
    { id: 2, title: t("features.f2.title"), desc: t("features.f2.desc"), color: "bg-teal-100 text-teal-600" ,icons : <FaRoad size={24} className="text-green-500" />},
    { id: 3, title: t("features.f3.title"), desc: t("features.f3.desc"), color: "bg-orange-100 text-orange-600" ,icons : <FaUniversity size={24} className="text-purple-500" /> },
    { id: 4, title: t("features.f4.title"), desc: t("features.f4.desc"), color: "bg-green-100 text-green-600" ,icons : <FaRegCalendarAlt size={24} className="text-orange-500" /> },
    { id: 5, title: t("features.f5.title"), desc: t("features.f5.desc"), color: "bg-sky-100 text-sky-600" , icons :  <FaBullseye size={24} className="text-red-500" /> },
    { id: 6, title: t("features.f6.title"), desc: t("features.f6.desc"), color: "bg-cyan-100 text-cyan-600" ,icons : <FaBook size={24} className="text-yellow-500" /> },
  ];

  const stats = [
    { value: "00", label: "Students Guided" },
    { value: "00", label: "Career Paths" },
    { value: "0%", label: "Success Rate" },
  ];

  const navigation = ()=>{
  navigate("/login")
   }

    const naviga = ()=>{
      navigate("/quiz")
    }
  const assessments = [
    { label: "Science Stream – Engineering, Medicine, Research", color: "bg-blue-100 text-blue-700 hover:bg-blue-200" },
    { label: "Commerce Stream – Business, Finance, Economics", color: "bg-green-100 text-green-700 hover:bg-green-200" },
    { label: "Arts Stream – Literature, Psychology, Design", color: "bg-orange-100 text-orange-700 hover:bg-orange-200" },
  ];

  return (
    <div className="min-h-screen bg-[url('./Bg.png')]">

      <nav className="flex justify-between items-center mx-auto p-4">
        <div className="flex place-items-center">
          <img src="./Logo.png" alt="" height={50} width={50} />
          <h1 className="text-2xl font-bold text-blue-600">Saksham Vidya</h1>
        </div>
        <ul className="hidden md:flex space-x-6 text-gray-900">
          <li>{t("nav.home")}</li>
          {user ? (<><Link to="/quiz">{t("nav.quiz")}</Link></>) : (<><Link to="/login">{t("nav.quiz")}</Link></>)}
           
          <li>{t("nav.paths")}</li>
          <Link to="/collages">{t("nav.colleges")}</Link>
          <Link to="./dashboard">{t("nav.dashboard")}</Link>
        </ul>
        <div className="space-x-3 flex">
         {user ? (<><img src={user.image} className="rounded-[30px] bg-amber-400 border-2 border-b-black" height={50} width={50} alt="" /></>):(<><Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
            {t("nav.getstarted")}</Link>
          </>)} 
          <select
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            className="border rounded-2xl px-2 py-1"
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
          </select>
        </div>
      </nav>


      <section className="mx-auto grid md:grid-cols-2 gap-8 items-center px-6 py-10">
        <div className="space-y-6 pt-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            <Trans i18nKey="hero.heading">
              Discover Your <span className="text-blue-600">Perfect Career</span> Path
            </Trans>
          </h2>
          <p className="text-gray-800 text-lg">{t("hero.desc")}</p>


          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700">
              {t("hero.takeAssessment")}
            </button>
            <button className="border border-blue-600 text-blue-600 px-5 py-3 rounded-xl hover:bg-blue-50">
              {t("hero.exploreCareers")}
            </button>
          </div>

          <div className="flex pl-7 gap-10 pt-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-bold text-gray-900">{s.value}</p>
                <p className="text-gray-500 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>


        <div className="bg-white shadow-xl rounded-2xl p-8 space-y-6">
          <h3 className="text-xl font-bold text-gray-900">Quick Assessment</h3>
          <p className="text-gray-600 text-sm">Find your perfect career match in just 5 minutes</p>
          <div className="space-y-3">
            {assessments.map((a, i) => (
              <button key={i} className={`w-full py-3 rounded-xl ${a.color}`}>
                {a.label}
              </button>
            ))}
          </div>
          {user ? (<> <button onClick={naviga} className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700">
            Start Assessment
          </button></>) : ( <button onClick={navigation} className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700">
                  Start Assessment
          </button>)}
         
        </div>
      </section>

      <section className="pt-16">
        <div className="mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              <Trans i18nKey="features.title">
                Everything You Need for <span className="text-blue-600">Career Success</span>
              </Trans>
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
                 <div key={f.id} className="flex place-items-center gap-4">
                   <div className="">{f.icons} </div>
                   <div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="text-gray-500">{f.desc}</p>
            </div>
            </div>
            ))}
          </div>
        </div>
      </section>
    <header className="pt-10 pb-20 container mx-auto px-6 text-center ">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Ready to Discover Your <br />
          <span className="block">Perfect Career Path?</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto text-black">
          Join thousands of students who have found clarity and direction in
          their career journey. Start your personalized assessment today.
        </p>

      
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-white/20 rounded-full">✔</div>
            <p>Personalized career recommendations</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-2 bg-white/20 rounded-full">✔</div>
            <p>Access to college database</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-2 bg-white/20 rounded-full">✔</div>
            <p>Timeline tracking and notifications</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-2 bg-white/20 rounded-full">✔</div>
            <p>Expert guidance and support</p>
          </div>
        </div>

       
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#start"
            className="px-8 py-4 rounded-xl bg-white text-blue-700 font-semibold shadow hover:shadow-lg"
          >
            Start Free Assessment →
          </a>
          <button className="px-8 py-4 rounded-xl border border-yellow-500/20 bg-yellow-500/20 hover:bg-yellow-500/50">
            Watch Demo
          </button>
        </div>

        <p className="mt-6 text-sm text-black">
           Free assessment • No credit card required • Instant results
        </p>
</header>

<footer className=" text-gray-700 ">
      <div className=" mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className=" text-white p-2 rounded-lg">🎓</div>
            <h2 className="text-xl font-bold text-blue-600">Saksham Vidya</h2>
          </div>
          <p className="text-sm text-gray-600">
            Empowering students to make informed decisions about their
            educational and career journey through personalized guidance and
            comprehensive resources.
          </p>

          <div className="mt-4 space-y-2 text-sm">
            <p className="flex items-center gap-2">
              📧 support@sakshamvidya.com
            </p>
            <p className="flex items-center gap-2">
              📞 ‪+91 98765 43210‬
            </p>
            <p className="flex items-center gap-2">
              📍 New Delhi, India
            </p>
          </div>
        </div>

       
        <div>
          <h3 className="font-semibold mb-3">Platform</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Take Assessment</a></li>
            <li><a href="#">Career Paths</a></li>
            <li><a href="#">College Directory</a></li>
            <li><a href="#">Dashboard</a></li>
          </ul>
        </div>

     
        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Study Materials</a></li>
            <li><a href="#">Career Guides</a></li>
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


      <div className=" py-4 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between mx-auto px-6">
        <p>© 2025 Saksham Vidya. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
</footer>

    </div>
  );
}

export default Home;
