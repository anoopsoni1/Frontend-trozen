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
            f1: {
              title: "Aptitude Assessment",
              desc: "Scientific personality and aptitude testing to discover your natural strengths and interests."
            },
            f2: {
              title: "Career Roadmaps",
              desc: "Visual career paths showing step-by-step progression from education to professional success."
            },
            f3: {
              title: "College Directory",
              desc: "Comprehensive database of colleges with detailed info on courses, cutoffs, and facilities."
            },
            f4: {
              title: "Timeline Tracker",
              desc: "Never miss important dates with personalized notifications for admissions and exams."
            },
            f5: {
              title: "Goal Setting",
              desc: "Set academic and career goals with milestone tracking and progress monitoring."
            },
            f6: {
              title: "Study Materials",
              desc: "Access curated educational resources and skill-development materials for your chosen path."
            }
          }
        }
      },
      hi: {
        translation: {
          nav: {
            home: "होम",
            quiz: "क्विज़ दें",
            paths: "करियर पाथ",
            colleges: "कॉलेज",
            dashboard: "डैशबोर्ड",
            signin: "साइन इन",
            getstarted: "शुरू करें",
          },
          hero: {
            heading: "खोजें अपना <1>परफेक्ट करियर</1> पाथ",
            desc: "अपनी रुचियों, योग्यता और लक्ष्यों के आधार पर व्यक्तिगत करियर मार्गदर्शन प्राप्त करें। सही स्ट्रीम चुनने से लेकर अपने सपनों के कॉलेज तक – हम हर कदम पर आपका मार्गदर्शन करते हैं।",
            takeAssessment: "फ्री असेसमेंट लें",
            exploreCareers: "करियर एक्सप्लोर करें",
            students: "मार्गदर्शित छात्र",
            careers: "करियर पाथ",
            success: "सफलता दर",
          },
          quickAssessment: {
            title: "त्वरित आकलन",
            subtitle: "सिर्फ 5 मिनट में अपना परफेक्ट करियर मैच खोजें",
            science: "विज्ञान – इंजीनियरिंग, मेडिसिन, रिसर्च",
            commerce: "कॉमर्स – बिजनेस, फाइनेंस, इकोनॉमिक्स",
            arts: "आर्ट्स – साहित्य, मनोविज्ञान, डिज़ाइन",
            start: "असेसमेंट शुरू करें",
          },
          section: {
            heading: "आपकी <1>करियर सफलता</1> के लिए सब कुछ",
            desc: "हमारा प्लेटफॉर्म आपको सही शैक्षिक और करियर निर्णय लेने के लिए सभी उपकरण और मार्गदर्शन प्रदान करता है।",
          },
          features: {
            f1: { title: "एप्टीट्यूड असेसमेंट", desc: "वैज्ञानिक व्यक्तित्व और योग्यता परीक्षण से अपनी प्राकृतिक क्षमताओं और रुचियों की खोज करें।" },
            f2: { title: "करियर रोडमैप्स", desc: "शिक्षा से प्रोफेशनल सफलता तक का चरण-दर-चरण मार्ग।" },
            f3: { title: "कॉलेज डायरेक्टरी", desc: "कोर्स, कटऑफ और सुविधाओं के साथ कॉलेजों का संपूर्ण डेटाबेस।" },
            f4: { title: "टाइमलाइन ट्रैकर", desc: "प्रवेश और परीक्षाओं की महत्वपूर्ण तिथियों की व्यक्तिगत सूचनाएं।" },
            f5: { title: "लक्ष्य निर्धारण", desc: "शैक्षिक और करियर लक्ष्य तय करें और प्रगति की निगरानी करें।" },
            f6: { title: "अध्ययन सामग्री", desc: "अपने चुने हुए रास्ते के लिए क्यूरेटेड शैक्षिक संसाधनों तक पहुँच।" },
          }
        }
      }
    }
  });

export default i18n;
