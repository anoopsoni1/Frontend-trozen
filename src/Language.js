import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    resources: {
      en: {
        translation: {
          nav: {
            home: "Home",
            quiz: "Take Quiz",
            paths: "Career Paths",
            colleges: "Colleges",
            dashboard: "Dashboard",
            signin: "Sign In",
            getstarted: "Get Started",
          },
          hero: {
            heading: "Discover Your <1>Perfect Career</1> Path",
            desc: "Get personalized career guidance based on your interests, aptitude, and goals. From choosing the right stream to finding your dream college – we’re here to guide you every step of the way.",
            takeAssessment: "Take Free Assessment",
            exploreCareers: "Explore Careers",
            students: "Students Guided",
            careers: "Career Paths",
            success: "Success Rate",
          },
          quickAssessment: {
            title: "Quick Assessment",
            subtitle: "Find your perfect career match in just 5 minutes",
            science: "Science Stream – Engineering, Medicine, Research",
            commerce: "Commerce Stream – Business, Finance, Economics",
            arts: "Arts Stream – Literature, Psychology, Design",
            start: "Start Assessment",
          },
          section: {
            heading: "Everything You Need for <1>Career Success</1>",
            desc: "Our comprehensive platform provides all the tools and guidance you need to make informed decisions about your educational and career journey.",
          },
          features: {
            f1: { title: "Aptitude Assessment", desc: "Scientific personality and aptitude testing to discover your natural strengths and interests." },
            f2: { title: "Career Roadmaps", desc: "Visual career paths showing step-by-step progression from education to professional success." },
            f3: { title: "College Directory", desc: "Comprehensive database of colleges with detailed info on courses, cutoffs, and facilities." },
            f4: { title: "Timeline Tracker", desc: "Never miss important dates with personalized notifications for admissions and exams." },
            f5: { title: "Goal Setting", desc: "Set academic and career goals with milestone tracking and progress monitoring." },
            f6: { title: "Study Materials", desc: "Access curated educational resources and skill-development materials for your chosen path." }
          } ,
stats: {
    guided: "Guided Students",
    paths: "Career Paths",
    success: "Success Rate"
},
cta: {
  heading: "Are you ready to discover your perfect career path?",
  desc: "Like thousands of students, start your personalized assessment now.",
  start: "Start Free Assessment →",
  demo: "Watch Demo",
  footer: "Free Assessment • No payment required • Instant Results"
},

assessment: {
    title: "Quick Assessment",
    subtitle: "Discover your right career choice in 5 minutes",
    science: "Science Stream – Engineering, Medical, Research",
    commerce: "Commerce Stream – Business, Finance, Economics",
    arts: "Arts Stream – Literature, Psychology, Design",
    start: "Start Assessment"
} ,

footer: {
  about: "Empowering students to make informed education and career decisions with guidance and resources.",
  
  platform: {
    title: "Platform",
    assessment: "Take Assessment",
    career: "Career Paths",
    college: "College Directory",
    dashboard: "Dashboard"
  },
  resources: {
    title: "Resources",
    study: "Study Materials",
    guides: "Career Guides",
    success: "Success Stories",
    blog: "Blog"
  },
    
  support: {
    title: "Support",
    help: "Help Center",
    contact: "Contact Us",
    faq: "FAQs",
    privacy: "Privacy Policy"
  },

  terms: "Terms & Conditions",
  privacy: "Privacy Policy",
  cookie: "Cookie Policy"
}


        }
      },
      hi: {
        translation: {
          nav: {
            home: "होम",
            quiz: "क्विज़",
            paths: "करियर पथ",
            colleges: "कॉलेज",
            dashboard: "डैशबोर्ड",
            getstarted: "शुरू करें"
          },
          hero: {
            heading: "अपना सही करियर पथ खोजें",
            desc: "अपने लिए सही स्ट्रीम और करियर विकल्प खोजें।",
            takeAssessment: "मूल्यांकन करें",
            exploreCareers: "करियर विकल्प देखें"
          },
          assessment: {
            title: "त्वरित मूल्यांकन",
            subtitle: "5 मिनट में अपना सही करियर विकल्प खोजें",
            science: "विज्ञान स्ट्रीम – इंजीनियरिंग, मेडिकल, शोध",
            commerce: "कॉमर्स स्ट्रीम – बिज़नेस, फाइनेंस, इकोनॉमिक्स",
            arts: "आर्ट्स स्ट्रीम – साहित्य, मनोविज्ञान, डिज़ाइन",
            start: "मूल्यांकन शुरू करें"
          },
          cta: {
            heading: "क्या आप अपने सही करियर पथ की खोज के लिए तैयार हैं?",
            desc: "हजारों छात्रों की तरह, अभी अपना व्यक्तिगत मूल्यांकन शुरू करें।",
            start: "मुफ़्त मूल्यांकन शुरू करें →",
            demo: "डेमो देखें",
            footer: "फ्री मूल्यांकन • कोई भुगतान आवश्यक नहीं • तुरंत परिणाम"
          },
        features: {
    f1: { title: "अप्टिट्यूड मूल्यांकन", desc: "वैज्ञानिक व्यक्तित्व और योग्यता परीक्षण से अपनी प्राकृतिक ताकत और रुचियाँ खोजें।" },
    f2: { title: "करियर रोडमैप्स", desc: "शैक्षिक यात्रा से पेशेवर सफलता तक कदम-दर-कदम करियर मार्ग दिखाने वाले विज़ुअल पथ।" },
    f3: { title: "कॉलेज डायरेक्टरी", desc: "कॉलेजों का व्यापक डेटाबेस, जिसमें पाठ्यक्रम, कटऑफ और सुविधाओं की विस्तृत जानकारी शामिल है।" },
    f4: { title: "टाइमलाइन ट्रैकर", desc: "प्रवेश और परीक्षाओं की महत्वपूर्ण तिथियों के लिए व्यक्तिगत नोटिफिकेशन के साथ कोई भी अवसर न चूकें।" },
    f5: { title: "लक्ष्य निर्धारण", desc: "अकादमिक और करियर लक्ष्य सेट करें, माइलस्टोन ट्रैकिंग और प्रगति मॉनिटरिंग के साथ।" },
    f6: { title: "अध्ययन सामग्री", desc: "अपनी चुनी हुई राह के लिए क्यूरेटेड शैक्षिक संसाधन और कौशल विकास सामग्री तक पहुँच।" }
},

          stats: {
            guided: "मार्गदर्शित छात्र",
            paths: "करियर पथ",
            success: "सफलता दर"
          },
          footer: {
            about: "छात्रों को उनके शिक्षा और करियर निर्णय लेने में मार्गदर्शन और संसाधनों के माध्यम से सक्षम बनाना।",
            platform: {
              title: "प्लेटफ़ॉर्म",
              assessment: "मूल्यांकन लें",
              career: "करियर पथ",
              college: "कॉलेज डायरेक्टरी",
              dashboard: "डैशबोर्ड"
            },
            resources: {
              title: "संसाधन",
              study: "अध्ययन सामग्री",
              guides: "करियर गाइड्स",
              success: "सफलता की कहानियाँ",
              blog: "ब्लॉग"
            },
            support: {
              title: "सहायता",
              help: "हेल्प सेंटर",
              contact: "संपर्क करें",
              faq: "सामान्य प्रश्न",
              privacy: "गोपनीयता नीति"
            },
            terms: "नियम और शर्तें",
            privacy: "गोपनीयता नीति",
            cookie: "कुकी नीति"
          }
        }
      }
    }
  });

export default i18n;
