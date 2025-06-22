import React, { useState } from 'react';
import PaginatedEducation from '../components/PaginatedEducation';

const educationData = [
  // Education
  { id: 1, category: 'education', subcategory: 'Highschool', title: 'High School Student', institution: 'Forestview High School', date: '2019-2020', description: 'Completed freshman year at Forestview High School before transferring.' },
  { id: 2, category: 'education', subcategory: 'Highschool', title: 'High School Diploma', institution: 'Topsail High School', date: '2020-2024', description: 'Graduated from Topsail High School with a standard diploma, completing general education courses.' },
  { id: 3, category: 'education', subcategory: 'College', title: 'Associate of Arts Coursework', institution: 'Cape Fear Community College', date: '2022-2024', description: 'Completed college-level coursework contributing toward an Associate of Arts degree.' },

  // Certifications
  { id: 100, category: 'certification', subcategory: 'ACT', title: 'ACT WorkKeys National Career Readiness Certificate (Silver Level)', institution: 'ACT', date: '11/2023', description: 'Demonstrated foundational workplace skills in applied math, workplace documents, and graphic literacy.' },
  { id: 101, category: 'certification', subcategory: 'Adobe', title: 'Adobe Certified Professional Visual Design', institution: 'Adobe', date: '02/2022', description: 'Validated knowledge of key design principles using Adobe Photoshop and Illustrator for creative work.' },
  { id: 102, category: 'certification', subcategory: 'Autodesk', title: 'Autodesk Certified User: 3ds Max', institution: 'Autodesk', date: '04/2023', description: 'Demonstrated 3D modeling, animation, and rendering proficiency using Autodesk 3ds Max.' },

  // NECs
  { id: 4, category: 'military', subcategory: 'NEC', title: 'NEC 745A – Information Systems Technician (Block 0)', institution: 'Navy A School', date: '03/2025', description: 'Covers basic IT principles, systems administration, and cybersecurity foundational knowledge.' },

  // JKO
  { id: 5, category: 'military', subcategory: 'JKO', title: 'DOD Cyber Workforce Framework (DCWF) Windows System Administrator (WSA)', institution: 'JKO', date: '06/2025', description: 'Prepares personnel for administering Windows systems per DoD cybersecurity roles.' },

  // TWMS
  { id: 6, category: 'military', subcategory: 'TWMS', title: 'Records Management in the DON: Everyone’s Responsibility', institution: 'TWMS', date: '06/2025', description: 'Educates Navy personnel on maintaining secure, complete, and compliant records.' },
  { id: 7, category: 'military', subcategory: 'TWMS', title: 'DON Harassment Prevention Training', institution: 'TWMS', date: '06/2025', description: 'Trains service members to recognize, prevent, and report harassment in the workplace.' },
  { id: 8, category: 'military', subcategory: 'TWMS', title: 'Operations Security (OPSEC) Annual Training', institution: 'TWMS', date: '06/2025', description: 'Outlines techniques to identify and mitigate threats to sensitive operations and intel.' },
  { id: 9, category: 'military', subcategory: 'TWMS', title: 'DoD Mandatory Controlled Unclassified Information (CUI) Training', institution: 'TWMS', date: '06/2025', description: 'Covers DoD standards for handling and protecting CUI across all systems and documents.' },

  // E-Learning
  { id: 10, category: 'military', subcategory: 'E-Learning', title: 'Introductory PME (Enlisted) - Block 6 - RECA', institution: 'E-Learning', date: '06/2025', description: 'Focuses on Regional Expertise and Cultural Awareness, highlighting the impact of culture on military operations.' },
  { id: 11, category: 'military', subcategory: 'E-Learning', title: 'Introductory PME (Enlisted) - Block 8 - Conclusion', institution: 'E-Learning', date: '06/2025', description: 'Wrap-up module summarizing key PME topics and emphasizing continued learning and leadership development.' },
  { id: 12, category: 'military', subcategory: 'E-Learning', title: 'NWC Introductory Course Completion Certificate', institution: 'E-Learning', date: '06/2025', description: 'Introductory course on naval strategy, leadership principles, and maritime operations provided by the Naval War College.' },
  { id: 13, category: 'military', subcategory: 'E-Learning', title: 'Navy Reserve Fundamentals Course', institution: 'E-Learning', date: '06/2025', description: 'Covers structure, mission, and expectations of the Navy Reserve, including key reserve policies.' },
  { id: 14, category: 'military', subcategory: 'E-Learning', title: 'Introductory PME (Enlisted) - Block 7 - Technology in the Maritime Domain', institution: 'E-Learning', date: '06/2025', description: 'Explores emerging technologies and their operational implications in maritime environments.' },
  { id: 15, category: 'military', subcategory: 'E-Learning', title: 'Energy - Enabling Combat Operations', institution: 'E-Learning', date: '06/2025', description: 'Demonstrates how energy resources are managed and utilized to support mission readiness.' },
  { id: 16, category: 'military', subcategory: 'E-Learning', title: 'Basic Military Requirements (BMR) - NAVEDTRA 14325', institution: 'E-Learning', date: '06/2025', description: 'Covers basic seamanship, Navy customs, leadership, and watchstanding principles.' },
  { id: 17, category: 'military', subcategory: 'E-Learning', title: 'Department of the Navy Annual Privacy Training', institution: 'E-Learning', date: '06/2025', description: 'Provides guidance on safeguarding personal and sensitive information across Navy platforms.' },
  { id: 18, category: 'military', subcategory: 'E-Learning', title: 'DON Active Shooter', institution: 'E-Learning', date: '06/2025', description: 'Covers procedures for responding to and surviving active shooter situations within Navy facilities.' },
  { id: 19, category: 'military', subcategory: 'E-Learning', title: 'Introductory PME (Enlisted) - Block 5 - Planning for Operations', institution: 'E-Learning', date: '06/2025', description: 'Introduces the military decision-making process and planning procedures for operations.' },
  { id: 20, category: 'military', subcategory: 'E-Learning', title: 'Basic PME (Enlisted) - Block 6 - Regional Expertise and Culture', institution: 'E-Learning', date: '06/2025', description: 'Deepens understanding of regional culture and its importance in military missions.' },
  { id: 21, category: 'military', subcategory: 'E-Learning', title: 'Introductory PME (Enlisted) - Block 4 - Policy and the Navy', institution: 'E-Learning', date: '06/2025', description: 'Explores the role of national security policy and how it impacts the Navy’s global responsibilities.' },
  { id: 22, category: 'military', subcategory: 'E-Learning', title: 'Permanent Change of Station (PCS) Financial Readiness Touchpoint', institution: 'E-Learning', date: '06/2025', description: 'Offers financial planning guidance and tools for Sailors preparing for a PCS move.' },
  { id: 23, category: 'military', subcategory: 'E-Learning', title: 'Introductory PME (Enlisted) - Block 3 - Enlisted Professionalism', institution: 'E-Learning', date: '06/2025', description: 'Covers Navy core values, leadership traits, and professional conduct expectations.' },
  { id: 24, category: 'military', subcategory: 'E-Learning', title: 'Military Requirements for Petty Officers Third and Second Class - NAVEDTRA 14504', institution: 'E-Learning', date: '06/2025', description: 'Provides knowledge necessary for advancement, covering watchstanding, leadership, and career development.' },
  { id: 25, category: 'military', subcategory: 'E-Learning', title: 'ATCFD ICW - Records Management', institution: 'E-Learning', date: '06/2025', description: 'Highlights standards and responsibilities in managing official Navy records.' },
  { id: 26, category: 'military', subcategory: 'E-Learning', title: 'Antiterrorism Level I Awareness Training', institution: 'E-Learning', date: '11/2024', description: 'Raises awareness of potential terrorist threats and teaches personal safety practices while deployed or stateside.' },
  { id: 27, category: 'military', subcategory: 'E-Learning', title: 'NCIS Counterintelligence and Insider Threat Awareness and Reporting', institution: 'E-Learning', date: '11/2024', description: 'Trains on detecting and reporting suspicious behavior that may indicate espionage or insider threats.' },
  { id: 28, category: 'military', subcategory: 'E-Learning', title: 'DoD Cyber Awareness Challenge 2025', institution: 'E-Learning', date: '11/2024', description: 'Covers up-to-date cybersecurity threats, phishing, and proper handling of sensitive information.' },
  { id: 29, category: 'military', subcategory: 'E-Learning', title: 'PMK-EE for E5', institution: 'E-Learning', date: '09/2024', description: 'Prepares enlisted Sailors for advancement by testing Navy knowledge and leadership principles.' },
  { id: 30, category: 'military', subcategory: 'E-Learning', title: 'PMK-EE Study Material', institution: 'E-Learning', date: '08/2024', description: 'Supplemental study material to support readiness for the Professional Military Knowledge exam.' },
  { id: 31, category: 'military', subcategory: 'E-Learning', title: 'Introductory PME (Enlisted) - Block 1 - Introduction', institution: 'E-Learning', date: '07/2024', description: 'Introduces the PME framework and importance of continuous learning in a naval career.' },
  { id: 32, category: 'military', subcategory: 'E-Learning', title: 'Basic PME (Enlisted) - Block 1 - Introduction', institution: 'E-Learning', date: '07/2024', description: 'Covers basic knowledge areas such as the Navy’s core values, missions, and structure.' },
  { id: 33, category: 'military', subcategory: 'E-Learning', title: 'Introductory PME (Enlisted) - Block 2 - Naval History and Tradition', institution: 'E-Learning', date: '07/2024', description: 'Examines the Navy’s history, traditions, and their role in shaping modern naval operations.' },
  { id: 34, category: 'military', subcategory: 'E-Learning', title: 'DoD Cyber Awareness Challenge 2024', institution: 'E-Learning', date: '07/2024', description: 'Annual DoD training covering cyber hygiene, phishing, and secure handling of DoD data.' },
  { id: 35, category: 'military', subcategory: 'E-Learning', title: 'Antiterrorism Level I Awareness Training', institution: 'E-Learning', date: '07/2024', description: 'Provides essential awareness for identifying and responding to terrorist threats in operational environments.' }
].sort((a, b) => {
  const parseDate = (dateStr) => {
    const [month, year] = dateStr.includes('/') ? dateStr.split('/') : [1, dateStr.split('-')[1] || dateStr];
    return new Date(`${year}-${month}-01`);
  };
  return parseDate(b.date) - parseDate(a.date);
});



const categoryOptions = [
  { id: 'education', label: 'Education' },
  { id: 'military', label: 'Military Training' },
  { id: 'certification', label: 'Certifications' }
];

const subcategoryOptions = {
  military: ['NEC', 'JKO', 'TWMS', 'E-Learning'],
  education: ['Highschool', 'College'],
  certification: ['ACT', 'Adobe', 'Autodesk']
};

const Education = () => {
  const [activeCategories, setActiveCategories] = useState([]);
  const [activeSubcategories, setActiveSubcategories] = useState([]);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const [sortMode, setSortMode] = useState('timeline');
  const [searchTerm, setSearchTerm] = useState('');

  const toggleCategory = (category) => {
    setActiveCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const toggleSubcategory = (subcategory) => {
    setActiveSubcategories(prev =>
      prev.includes(subcategory) ? prev.filter(s => s !== subcategory) : [...prev, subcategory]
    );
  };

  const parseDate = (dateStr) => {
    const [month, year] = dateStr.includes('/') ? dateStr.split('/') : ["01", dateStr];
    return new Date(`${year}-${month}-01`);
  };

  const sortData = (data) => {
    if (sortMode === 'alphabetical') {
      return [...data].sort((a, b) => a.title.localeCompare(b.title));
    }
    return [...data].sort((a, b) => parseDate(b.date) - parseDate(a.date));
  };

  const applyFilters = () => {
    let data = [...educationData];

    if (searchTerm.trim()) {
      const lower = searchTerm.toLowerCase();
      data = data.filter(item =>
        item.title.toLowerCase().includes(lower) ||
        item.institution.toLowerCase().includes(lower) ||
        item.description.toLowerCase().includes(lower) ||
        item.category.toLowerCase().includes(lower) ||
        item.subcategory.toLowerCase().includes(lower)
      );
    } else {
      data = data
        .filter(item => activeCategories.includes(item.category))
        .filter(item =>
          activeSubcategories.length === 0 || activeSubcategories.includes(item.subcategory)
        );
    }

    return sortData(data);
  };

  const filteredData = applyFilters();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Education & Training</h1>

      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        {categoryOptions.map(({ id, label }) => (
          <div
            key={id}
            className="relative"
            onMouseEnter={() => setHoveredDropdown(id)}
            onMouseLeave={() => setHoveredDropdown(null)}
          >
            <button
              onClick={() => toggleCategory(id)}
              className={`px-4 py-2 rounded-full border transition duration-300 ease-in-out transform ${
                activeCategories.includes(id) ? 'bg-teal-500 border-teal-400 scale-105' : 'bg-gray-800 border-gray-600 hover:bg-gray-700'
              }`}
            >
              {label} ▼
            </button>
            <div
              className={`absolute mt-2 w-48 rounded-md shadow-lg z-10 transition-all duration-200 origin-top-left ${
                hoveredDropdown === id ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
              } bg-gray-800 border border-gray-600`}
            >
              {subcategoryOptions[id]?.map(sub => (
                <button
                  key={sub}
                  onClick={() => toggleSubcategory(sub)}
                  className={`block w-full text-left px-4 py-2 transition hover:bg-gray-700 ${
                    activeSubcategories.includes(sub) ? 'text-teal-400' : 'text-white'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setSortMode('timeline')}
          className={`px-4 py-2 rounded-full border transition duration-300 ease-in-out ${
            sortMode === 'timeline' ? 'bg-teal-500 border-teal-400 scale-105' : 'bg-gray-800 border-gray-600 hover:bg-gray-700'
          }`}
        >
          Timeline
        </button>
        <button
          onClick={() => setSortMode('alphabetical')}
          className={`px-4 py-2 rounded-full border transition duration-300 ease-in-out ${
            sortMode === 'alphabetical' ? 'bg-teal-500 border-teal-400 scale-105' : 'bg-gray-800 border-gray-600 hover:bg-gray-700'
          }`}
        >
          Alphabetical Order
        </button>
      </div>

      <PaginatedEducation data={filteredData} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  );
};

export default Education;
