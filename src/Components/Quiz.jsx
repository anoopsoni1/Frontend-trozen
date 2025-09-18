// CollegeTable.jsx
import React, { useState } from "react";

const collegeData = {
  Delhi: [
    { category: "University", nirfRank: 2, name: "Jawaharlal Nehru University (JNU)", entranceExam: "CUET-UG", seats: "1,000+", keyCourses: "Humanities, Social Sciences, Foreign Languages", fees: "Under ₹1,000" },
    { category: "University", nirfRank: 3, name: "Jamia Millia Islamia (JMI)", entranceExam: "CUET-UG, JEE Main, NATA", seats: "3,500+", keyCourses: "Arts, Science, Commerce, B.Tech, B.Arch", fees: "₹7,000 - ₹15,000" },
    { category: "University", nirfRank: 11, name: "University of Delhi (DU)", entranceExam: "CUET-UG", seats: "70,000+", keyCourses: "B.A., B.Com, B.Sc", fees: "₹10,000 - ₹30,000" },
    { category: "Engineering", nirfRank: 40, name: "Delhi Technological University (DTU)", entranceExam: "JEE Main, CUET", seats: "2,500+", keyCourses: "Engineering, MBA, M.Sc", fees: "₹2.2 Lakhs" },
    { category: "Engineering", nirfRank: 64, name: "Netaji Subhas University of Technology (NSUT)", entranceExam: "JEE Main, CUET", seats: "2,000+", keyCourses: "Engineering, Design, Management", fees: "₹2.2 Lakhs" },
    { category: "Engineering", nirfRank: 75, name: "Indraprastha Institute of Information Technology, Delhi (IIIT-D)", entranceExam: "JEE Main, UCEED", seats: "500+", keyCourses: "IT-focused Engineering, Computational Biology", fees: "₹4.5 Lakhs" },
    { category: "Medical", nirfRank: 1, name: "All India Institute of Medical Sciences (AIIMS)", entranceExam: "NEET-UG", seats: "132", keyCourses: "MBBS, Research", fees: "Under ₹2,000" },
    { category: "Medical", nirfRank: 14, name: "Vardhman Mahavir Medical College (VMMC)", entranceExam: "NEET-UG", seats: "170", keyCourses: "MBBS, Clinical Exposure", fees: "₹40,000" },
    { category: "Medical", nirfRank: 21, name: "University College of Medical Sciences (UCMS)", entranceExam: "NEET-UG", seats: "170", keyCourses: "Strong Academics, NEET-PG prep", fees: "₹40,000" },
    { category: "Medical", nirfRank: 23, name: "Lady Hardinge Medical College (LHMC)", entranceExam: "NEET-UG", seats: "240", keyCourses: "Women Only, PG Placement", fees: "₹30,000" },
    { category: "Medical", nirfRank: 24, name: "Maulana Azad Medical College (MAMC)", entranceExam: "NEET-UG", seats: "250", keyCourses: "High NEET-PG success", fees: "₹15,000" },
    { category: "Medical", nirfRank: 34, name: "Army College of Medical Sciences (ACMS)", entranceExam: "NEET-UG", seats: "100", keyCourses: "Army Wards, Clinical Training", fees: "₹4.5 Lakhs" },
    { category: "Medical", nirfRank: "-", name: "Dr. Baba Saheb Ambedkar Medical College", entranceExam: "NEET-UG", seats: "125", keyCourses: "PG and Govt Service", fees: "₹1.2 Lakhs" },
    { category: "Medical", nirfRank: "-", name: "North Delhi Municipal Corporation Medical College (Hindu Rao)", entranceExam: "NEET-UG", seats: "60", keyCourses: "Clinical Practice", fees: "₹1.2 Lakhs" },
    { category: "University", nirfRank: "-", name: "Ambedkar University Delhi (AUD)", entranceExam: "CUET-UG", seats: "1,500+", keyCourses: "Social Sciences, Humanities, Liberal Arts", fees: "₹50,000" },
    { category: "Engineering", nirfRank: 51, name: "National Institute of Technology Delhi (NIT Delhi)", entranceExam: "JEE Main", seats: "480", keyCourses: "Engineering", fees: "₹1.7 Lakhs" },
    { category: "Engineering", nirfRank: 60, name: "NSUT B.Tech", entranceExam: "JEE Main", seats: "2000+", keyCourses: "Engineering", fees: "₹2.2 Lakhs" },
    { category: "Engineering", nirfRank: 151, name: "Indira Gandhi Delhi Technical University for Women (IGDTUW)", entranceExam: "JEE Main", seats: "750", keyCourses: "Engineering", fees: "₹1.5 Lakhs" },
    { category: "Law", nirfRank: "-", name: "National Law University Delhi (NLU Delhi)", entranceExam: "AILET", seats: "120", keyCourses: "Law Courses", fees: "₹3.5 Lakhs" },
    { category: "Management", nirfRank: "-", name: "Guru Gobind Singh Indraprastha University (GGSIPU)", entranceExam: "CET, CUET, JEE Main", seats: "35,000+", keyCourses: "B.Tech, BBA, BCA, B.A. LLB", fees: "₹70,000 - ₹1,50,000" },
  ],
  "Jammu & Kashmir": [
    { category: "University", nirfRank: 25, name: "University of Jammu", entranceExam: "CUET-UG", seats: "5,000+", keyCourses: "Arts, Science, Commerce, Law", fees: "₹8,000 - ₹20,000" },
    { category: "University", nirfRank: 50, name: "University of Kashmir", entranceExam: "CUET-UG", seats: "6,000+", keyCourses: "Science, Arts, Commerce, Law", fees: "₹10,000 - ₹25,000" },
    { category: "Engineering", nirfRank: 150, name: "NIT Srinagar", entranceExam: "JEE Main", seats: "600+", keyCourses: "CSE, ECE, Mechanical", fees: "₹1.5 Lakhs" },
    { category: "Medical", nirfRank: 100, name: "Government Medical College, Srinagar", entranceExam: "NEET-UG", seats: "150", keyCourses: "MBBS, PG Training", fees: "₹1.2 Lakhs" },
    { category: "Regional / Govt", nirfRank: "-", name: "SKUAST-Jammu (Agriculture University)", entranceExam: "State Entrance Test", seats: "400+", keyCourses: "Agriculture, Horticulture", fees: "₹50,000" },
    { category: "Engineering", nirfRank: "-", name: "Model Institute of Engineering & Technology, Jammu", entranceExam: "JEE Main", seats: "200+", keyCourses: "IT, Electronics, Mechanical", fees: "₹1 Lakh" },
    { category: "Medical", nirfRank: "-", name: "Government Dental College, Srinagar", entranceExam: "NEET", seats: "50", keyCourses: "BDS, PG", fees: "₹1 Lakh" },
    { category: "Engineering", nirfRank: "-", name: "Central Institute of Technology, Srinagar", entranceExam: "JEE Main", seats: "300+", keyCourses: "Engineering & Technology", fees: "₹1.2 Lakhs" },
    { category: "University", nirfRank: "-", name: "Sher-e-Kashmir University of Agricultural Sciences and Technology", entranceExam: "State Test", seats: "400+", keyCourses: "Agriculture, Dairy", fees: "₹40,000" },
    { category: "Regional / Govt", nirfRank: "-", name: "Government Polytechnic, Jammu", entranceExam: "State Exam", seats: "300", keyCourses: "Diploma Engineering", fees: "₹30,000" },
    { category: "Engineering", nirfRank: "-", name: "Govt College of Engineering & Technology, Jammu", entranceExam: "JEE Main", seats: "400+", keyCourses: "Mechanical, Civil, IT", fees: "₹1.1 Lakhs" },
    { category: "University", nirfRank: "-", name: "Central University of Kashmir", entranceExam: "CUET", seats: "800+", keyCourses: "Arts, Science, Social Sciences", fees: "₹50,000" },
    { category: "Engineering", nirfRank: "-", name: "Model Institute of Engineering, Jammu", entranceExam: "JEE Main", seats: "200+", keyCourses: "CSE, Civil", fees: "₹80,000" },
    { category: "Medical", nirfRank: "-", name: "Government Medical College, Anantnag", entranceExam: "NEET-UG", seats: "100+", keyCourses: "MBBS", fees: "₹1.2 Lakhs" },
    { category: "Medical", nirfRank: "-", name: "Government Medical College, Baramulla", entranceExam: "NEET-UG", seats: "100+", keyCourses: "MBBS", fees: "₹1.2 Lakhs" },
    { category: "University", nirfRank: "-", name: "Kashmir University Polytechnic", entranceExam: "State Exam", seats: "200+", keyCourses: "Engineering Diploma", fees: "₹35,000" },
    { category: "Engineering", nirfRank: "-", name: "Model Institute of Technology, Jammu", entranceExam: "JEE Main", seats: "150+", keyCourses: "Civil, IT", fees: "₹90,000" },
    { category: "Regional / Govt", nirfRank: "-", name: "Govt College of Engineering, Srinagar", entranceExam: "JEE Main", seats: "200+", keyCourses: "Mechanical, Electrical", fees: "₹1.2 Lakhs" },
    { category: "University", nirfRank: "-", name: "Islamia College of Science & Commerce, Srinagar", entranceExam: "CUET-UG", seats: "2,000+", keyCourses: "Arts, Science, Commerce", fees: "₹25,000" },
    { category: "University", nirfRank: "-", name: "Govt. Degree College, Pulwama", entranceExam: "CUET-UG", seats: "800+", keyCourses: "Arts, Science", fees: "₹20,000" },
  ],
  "Madhya Pradesh": [
    { category: "Engineering", nirfRank: 29, name: "IIT Indore", entranceExam: "JEE Advanced", seats: "480", keyCourses: "B.Tech All Disciplines", fees: "₹2.3 Lakhs" },
    { category: "Engineering", nirfRank: "-", name: "MANIT Bhopal", entranceExam: "JEE Main", seats: "1100", keyCourses: "B.Tech All Disciplines", fees: "₹1.5 Lakhs" },
    { category: "Engineering", nirfRank: "-", name: "IIITDM Jabalpur", entranceExam: "JEE Main", seats: "550", keyCourses: "CSE, ECE, Mech", fees: "₹1.8 Lakhs" },
    { category: "Engineering", nirfRank: "-", name: "SGSITS Indore", entranceExam: "JEE Main", seats: "840", keyCourses: "Core Branches, IT", fees: "₹1.1 Lakhs" },
    { category: "Engineering", nirfRank: "-", name: "IIITM Gwalior", entranceExam: "JEE Main", seats: "380", keyCourses: "Integrated B.Tech + M.Tech/MBA", fees: "₹1.8 Lakhs" },
    { category: "Engineering", nirfRank: "-", name: "JUET Guna", entranceExam: "JEE Main", seats: "660", keyCourses: "CSE, ECE, Mech", fees: "₹2.7 Lakhs" },
    { category: "Engineering", nirfRank: "-", name: "MITS Gwalior", entranceExam: "JEE Main", seats: "1100", keyCourses: "Wide Range of Disciplines", fees: "₹1 Lakh" },
    { category: "Engineering", nirfRank: "-", name: "IIIT Bhopal", entranceExam: "JEE Main", seats: "240", keyCourses: "CSE, ECE, IT", fees: "₹2 Lakh" },
    { category: "Engineering", nirfRank: "-", name: "JEC Jabalpur", entranceExam: "JEE Main", seats: "660", keyCourses: "Civil, Mech, EE, CSE", fees: "₹40,000" },
    { category: "Engineering", nirfRank: "-", name: "UEC Ujjain", entranceExam: "JEE Main", seats: "360", keyCourses: "Core Branches", fees: "₹30,000" },
    { category: "Engineering", nirfRank: "-", name: "REC Rewa", entranceExam: "JEE Main", seats: "300", keyCourses: "Core Branches", fees: "₹25,000" },
    { category: "University", nirfRank: "-", name: "DAVV", entranceExam: "CUET-UG", seats: "4,000+", keyCourses: "Arts, Science, Commerce, Law, Pharmacy, MBA", fees: "₹15,000 - ₹70,000" },
    { category: "University", nirfRank: "-", name: "Sagar University (Dr. Hari Singh Gour Vishwavidyalaya)", entranceExam: "CUET-UG", seats: "4,500+", keyCourses: "Arts, Science, Commerce, Law, Pharmacy", fees: "₹8,000 - ₹20,000" },
    { category: "University", nirfRank: "-", name: "Jiwaji University, Gwalior", entranceExam: "CUET-UG", seats: "5,000+", keyCourses: "Arts, Science, Commerce, Management", fees: "₹10,000 - ₹40,000" },
    { category: "University", nirfRank: "-", name: "Amity University, Madhya Pradesh", entranceExam: "Merit-based", seats: "2,000+", keyCourses: "B.Tech, BBA, Law, Communication", fees: "₹1 Lakh - ₹2.5 Lakhs" },
    { category: "University", nirfRank: "-", name: "Awadhesh Pratap Singh University, Rewa", entranceExam: "Merit-based", seats: "6,000+", keyCourses: "B.A., B.Sc, B.Com, Law, Computer Applications", fees: "₹8,000 - ₹30,000" },
    { category: "University", nirfRank: "-", name: "Barkatullah University, Bhopal", entranceExam: "Merit-based", seats: "8,000+", keyCourses: "Arts, Science, Commerce, Management, Law", fees: "₹10,000 - ₹35,000" },
    { category: "University", nirfRank: "-", name: "Rani Durgavati Vishwavidyalaya, Jabalpur", entranceExam: "Merit-based", seats: "7,000+", keyCourses: "Arts, Science, Commerce, Law", fees: "₹8,000 - ₹25,000" },
    { category: "Medical", nirfRank: 1, name: "AIIMS Bhopal", entranceExam: "NEET-UG", seats: "125", keyCourses: "MBBS, B.Sc Nursing", fees: "Under ₹6,000" },
  ],
  
  "Chhattisgarh": [
    { "category": "Engineering", "nirfRank": 70, "name": "National Institute of Technology (NIT), Raipur", "entranceExam": "JEE Main / JoSAA", "seats": "1058", "keyCourses": "B.Tech, M.Tech, Ph.D.", "fees": "₹1.6 Lakhs" },
    { "category": "Management", "nirfRank": null, "name": "Indian Institute of Management (IIM), Raipur", "entranceExam": "CAT", "seats": "240", "keyCourses": "MBA, Executive MBA, Ph.D.", "fees": "₹20 Lakhs" },
    { "category": "Medical", "nirfRank": 42, "name": "AIIMS, Raipur", "entranceExam": "NEET-UG", "seats": "125", "keyCourses": "MBBS, MD, MS, Nursing", "fees": "Under ₹6,000" },
    { "category": "Medical", "nirfRank": null, "name": "Pt. Jawahar Lal Nehru Medical College, Raipur", "entranceExam": "NEET-UG", "seats": "200", "keyCourses": "MBBS, MD, MS", "fees": "₹50,000" },
    { "category": "Medical", "nirfRank": null, "name": "Chhattisgarh Institute of Medical Sciences (CIMS), Bilaspur", "entranceExam": "NEET-UG", "seats": "180", "keyCourses": "MBBS, B.Sc Nursing", "fees": "₹50,000" },
    { "category": "Engineering", "nirfRank": null, "name": "Government Engineering College (GEC), Raipur", "entranceExam": "CG PET / JEE Main", "seats": "480", "keyCourses": "B.Tech, M.Tech", "fees": "₹25,000" },
    { "category": "Engineering", "nirfRank": null, "name": "Bhilai Institute of Technology (BIT), Durg", "entranceExam": "CG PET / JEE Main", "seats": "850", "keyCourses": "B.Tech, M.Tech", "fees": "₹95,000" },
    { "category": "Engineering", "nirfRank": null, "name": "Shri Shankaracharya Engineering College (SSEC), Bhilai", "entranceExam": "CG PET / JEE Main", "seats": "750", "keyCourses": "B.Tech, MBA", "fees": "₹90,000" },
    { "category": "Engineering & Management", "nirfRank": null, "name": "Shri Shankaracharya Institute of Professional Management and Technology (SSIPMT), Raipur", "entranceExam": "CG PET / JEE Main", "seats": "500", "keyCourses": "B.Tech, MBA", "fees": "₹1,00,000" },
    { "category": "Engineering", "nirfRank": null, "name": "Rungta College of Engineering and Technology (RCET), Bhilai", "entranceExam": "CG PET / JEE Main", "seats": "1200", "keyCourses": "B.Tech, M.Tech", "fees": "₹1,20,000" },
    { "category": "Private University", "nirfRank": null, "name": "Dr. C.V. Raman University (CVRU), Kota", "entranceExam": "University Entrance Test", "seats": "1000+", "keyCourses": "B.Tech, MBA, Ph.D.", "fees": "₹1,50,000" },
    { "category": "Private University", "nirfRank": null, "name": "Amity University, Raipur", "entranceExam": "Merit-based / Entrance Test", "seats": "2000+", "keyCourses": "B.Tech, MBA, Law", "fees": "₹2,50,000" },
    { "category": "Private University", "nirfRank": null, "name": "ICFAI University, Raipur", "entranceExam": "Merit-based", "seats": "1500+", "keyCourses": "BBA, MBA, Law", "fees": "₹1,50,000" },
    { "category": "Private University", "nirfRank": null, "name": "ITM University, Raipur", "entranceExam": "Merit-based", "seats": "1000+", "keyCourses": "B.Tech, MBA, Law", "fees": "₹1,20,000" },
    { "category": "Private University", "nirfRank": null, "name": "Kalinga University, Naya Raipur", "entranceExam": "Merit-based", "seats": "2000+", "keyCourses": "B.Tech, MBA, Law", "fees": "₹1,50,000" },
    { "category": "Central University", "nirfRank": null, "name": "Guru Ghasidas Vishwavidyalaya, Bilaspur", "entranceExam": "CUET-UG", "seats": "3000+", "keyCourses": "B.A., M.A., Ph.D.", "fees": "₹8,000 - ₹25,000" },
    { "category": "State University", "nirfRank": null, "name": "Pandit Ravishankar Shukla University, Raipur", "entranceExam": "University Entrance Test", "seats": "5000+", "keyCourses": "B.Sc., M.Sc., Ph.D.", "fees": "₹5,000 - ₹30,000" },
    { "category": "Women's College", "nirfRank": null, "name": "Bhilai Mahila Mahavidyalaya, Bhilai", "entranceExam": "CUET-UG / Merit-based", "seats": "1000+", "keyCourses": "B.A., M.A.", "fees": "₹5,000 - ₹15,000" },
    { "category": "General Education", "nirfRank": null, "name": "Durga Mahavidyalaya, Raipur", "entranceExam": "Merit-based", "seats": "800+", "keyCourses": "B.A., M.A.", "fees": "₹5,000 - ₹12,000" },
    { "category": "General Education", "nirfRank": null, "name": "Government College, Dhamtari", "entranceExam": "Merit-based", "seats": "600+", "keyCourses": "B.A., M.A.", "fees": "₹4,000 - ₹10,000" }
  ]
}

const CollegeTable = () => {
  const [selectedState, setSelectedState] = useState("Delhi");

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-purple-700">
        Colleges & Universities by State
      </h1>

      <div className="flex justify-center mb-6">
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          className="border border-purple-500 rounded-lg p-2 w-64 text-gray-700 font-semibold"
        >
          {Object.keys(collegeData).map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-lg">
          <thead className="bg-purple-500 text-white">
            <tr>
              <th className="py-3 px-4 border">Category</th>
              <th className="py-3 px-4 border">NIRF Rank</th>
              <th className="py-3 px-4 border">Institution Name</th>
              <th className="py-3 px-4 border">Entrance Exam</th>
              <th className="py-3 px-4 border">Seats Available</th>
              <th className="py-3 px-4 border">Key Courses Offered</th>
              <th className="py-3 px-4 border">Annual Fees</th>
            </tr>
          </thead>
          <tbody>
            {collegeData[selectedState].map((uni, idx) => (
              <tr key={idx} className="text-gray-700 hover:bg-purple-50 transition duration-150">
                <td className="py-2 px-4 border">{uni.category}</td>
                <td className="py-2 px-4 border">{uni.nirfRank}</td>
                <td className="py-2 px-4 border font-semibold">{uni.name}</td>
                <td className="py-2 px-4 border">{uni.entranceExam}</td>
                <td className="py-2 px-4 border">{uni.seats}</td>
                <td className="py-2 px-4 border">{uni.keyCourses}</td>
                <td className="py-2 px-4 border">{uni.fees}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CollegeTable;
