// import React, { useState } from 'react';
// // मान लें कि आपकी डेटा फ़ाइल इसी डायरेक्टरी में 'FAQ.js' नाम से है
// // (Import the data array from the FAQ.js file)
// import { FAQ_DATA } from '../data/FAQ_DATA'; 
// import { ChevronDown, Minus, Plus } from 'lucide-react'; // Lucide Icons का उपयोग (या कोई भी आइकन लाइब्रेरी)

// // --- FAQItem Component ---
// const FAQItem = ({ item, isOpen, toggleFAQ }) => {
//   // answer में bold टेक्स्ट को सही ढंग से रेंडर करने के लिए एक सरल फंक्शन
//   const renderAnswer = (text) => {
//     // रेगुलर एक्सप्रेशन का उपयोग करके **bold text** को <strong>...</strong> टैग में बदलें
//     const parts = text.split(/(\*\*.*?\*\*)/g);
    
//     return parts.map((part, index) => {
//       if (part.startsWith('**') && part.endsWith('**')) {
//         // ** को हटाकर bold करें और Tailwind क्लास लागू करें
//         return <strong key={index} className="font-bold text-gray-800">{part.slice(2, -2)}</strong>;
//       }
//       return part;
//     });
//   };

//   return (
//     <div className="border-t border-gray-300 last:border-b">
//       {/* Question Header */}
//       <div 
//         className="flex justify-between items-center py-4 cursor-pointer text-base text-gray-700 hover:text-gray-900 transition-colors duration-200"
//         onClick={toggleFAQ}
//         aria-expanded={isOpen}
//       >
//         <p className={`font-medium ${isOpen ? 'text-blue-600' : 'text-gray-800'}`}>
//           {item.question}
//         </p>
        
//         {/* Toggle Icon */}
//         <span className={`text-2xl transition-transform duration-300 ${isOpen ? 'text-blue-600' : 'text-gray-500'}`}>
//           {/* Lucide Icons का उपयोग: जब खुला हो तो Minus, अन्यथा Plus */}
//           {isOpen ? <Minus size={20} /> : <Plus size={20} />}
//         </span>
//       </div>
      
//       {/* Answer Content - Tailwind's utility classes for conditional height/transition are tricky.
//           We use max-height transition in a similar way to raw CSS for a smooth accordion effect. 
//           Note: In a professional setup, you might use a dedicated library or a useRef hook for height measurement.
//       */}
//       <div 
//         className={`overflow-hidden transition-[max-height] duration-500 ease-in-out`}
//         style={{
//           maxHeight: isOpen ? '800px' : '0px', // 800px is arbitrary, should be large enough
//         }}
//       >
//         <p className="pb-4 text-gray-600 text-sm leading-relaxed">
//           {renderAnswer(item.answer)}
//         </p>
//       </div>
      
//       {/* Blue line for open state (Simulated via a border-bottom on open) */}
//       {isOpen && (
//         <div className="h-0.5 bg-blue-600 w-full"></div>
//       )}
//     </div>
//   );
// };

// // --- FAQ Page Component ---
// const FAQPage = () => {
//   // State to track which FAQ item is currently open.
//   const [openIndex, setOpenIndex] = useState(null);

//   // Function to handle the click (Accordion logic)
//   const toggleFAQ = (index) => {
//     setOpenIndex(prevIndex => (prevIndex === index ? null : index));
//   };

//   return (
//     // Outer Container: max-w-7xl, centered, light gray background, light border, and padding.
//     <div className="flex justify-center bg-gray-50 p-8 mt-35">
//       <div className="w-full max-w-7xl bg-white p-8 md:p-10 border border-gray-300 shadow-lg rounded-lg">
        
//         {/* Header Section */}
//         <div className="mb-8 pb-4 border-b-2 border-gray-300">
//           <h1 className="text-2xl font-bold text-gray-800 tracking-wide">
//             FREQUENTLY ASKED QUESTIONS
//           </h1>
//         </div>
        
//         {/* FAQ List Section */}
//         <div className="faq-list">
//           {FAQ_DATA.map((item, index) => (
//             <FAQItem
//               key={index}
//               item={item}
//               isOpen={index === openIndex}
//               toggleFAQ={() => toggleFAQ(index)}
//             />
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default FAQPage;

import React, { useState } from 'react';
import { FAQ_DATA } from '../data/FAQ_DATA';
import { ChevronDown, Minus, Plus } from 'lucide-react';
import league from '../data/league';
import { FaFootballBall } from 'react-icons/fa';
import LiveScoreSection from '../pages/LiveScoreSection';
import EventsAndTables from '../pages/EventsAndTables';

// --- FAQItem Component ---
const FAQItem = ({ item, isOpen, toggleFAQ }) => {
  // answer में bold टेक्स्ट को सही ढंग से रेंडर करने के लिए एक सरल फंक्शन
  const renderAnswer = (text) => {
    // रेगुलर एक्सप्रेशन का उपयोग करके **bold text** को <strong>...</strong> टैग में बदलें
    const parts = text.split(/(\*\*.*?\*\*)/g);
    
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        // ** को हटाकर bold करें और Tailwind क्लास लागू करें
        return <strong key={index} className="font-bold text-gray-800">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="border-t border-gray-300 last:border-b">
      {/* Question Header */}
      <div 
        className="flex justify-between items-center py-4 cursor-pointer text-base text-gray-700 hover:text-gray-900 transition-colors duration-200"
        onClick={toggleFAQ}
        aria-expanded={isOpen}
      >
        <p className={`font-medium ${isOpen ? 'text-blue-600' : 'text-gray-800'}`}>
          {item.question}
        </p>
        
        {/* Toggle Icon */}
        <span className={`text-2xl transition-transform duration-300 ${isOpen ? 'text-blue-600' : 'text-gray-500'}`}>
          {/* Lucide Icons का उपयोग: जब खुला हो तो Minus, अन्यथा Plus */}
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </div>
      
      {/* Answer Content - Tailwind's utility classes for conditional height/transition are tricky.
          We use max-height transition in a similar way to raw CSS for a smooth accordion effect. 
          Note: In a professional setup, you might use a dedicated library or a useRef hook for height measurement.
      */}
      <div 
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out`}
        style={{
          maxHeight: isOpen ? '800px' : '0px', // 800px is arbitrary, should be large enough
        }}
      >
        <p className="pb-4 text-gray-600 text-sm leading-relaxed">
          {renderAnswer(item.answer)}
        </p>
      </div>
      
      {/* Blue line for open state (Simulated via a border-bottom on open) */}
      {isOpen && (
        <div className="h-0.5 bg-blue-600 w-full"></div>
      )}
    </div>
  );
};

// --- FAQ Page Component ---
const FAQPage = () => {
  // State to track which FAQ item is currently open.
  const [openIndex, setOpenIndex] = useState(null);

  // Function to handle the click (Accordion logic)
  const toggleFAQ = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    // Outer Container: max-w-7xl, centered, light gray background, light border, and padding.
    <div className="flex justify-center bg-gray-50 p-8 mt-35">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Main Content Area */}
          <div className="md:col-span-8 lg:col-span-9">
            <div className="bg-white p-8 md:p-10 border border-gray-300 shadow-lg rounded-lg">
              {/* Header Section */}
              <div className="mb-8 pb-4 border-b-2 border-gray-300">
                <h1 className="text-2xl font-bold text-gray-800 tracking-wide">
                  FREQUENTLY ASKED QUESTIONS
                </h1>
              </div>
              
              {/* FAQ List Section */}
              <div className="faq-list">
                {FAQ_DATA.map((item, index) => (
                  <FAQItem
                    key={index}
                    item={item}
                    isOpen={index === openIndex}
                    toggleFAQ={() => toggleFAQ(index)}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* Right Sidebar */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="sticky top-[120px]">
              <div className="rounded-lg p-6 shadow-2xl">
                <h4 className="text-lg text-black font-bold mb-2">Advertisement</h4>
                <p className="text-sm text-black opacity-90 mb-4">Place your ad content here.</p>
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                  <div className="w-full h-48 bg-gray-300 rounded flex items-center justify-center cursor-pointer">
                    <span className="text-gray-500">Ad Image Placeholder</span>
                  </div>
                </a>
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                  <button className="w-full bg-white text-blue-600 font-bold py-2 px-4 rounded hover:bg-gray-100 transition-colors mt-4">
                    Click Here
                  </button>
                </a>
              </div>
              {/* Betting Contest */}
              <div className="bg-teal-600 rounded-lg text-white overflow-hidden shadow-lg text-sm leading-tight mt-6">
                <div className="bg-teal-700 px-6 py-4 text-center">
                  <div className="w-10 h-10 mx-auto mb-2">
                    <img src="/contest-logo.jpg" alt="Contest Logo" className="w-full h-full object-contain rounded-full" />
                  </div>
                  <h3 className="font-bold text-lg">{league.betting_contest.title}</h3>
                  <p className="text-sm opacity-90">{league.betting_contest.subtitle}</p>
                </div>
                <div className="p-3">
                  {league.betting_contest.ranking.map((user, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-teal-500/30 last:border-b-0">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 flex items-center justify-center">
                          <span className="text-2xl font-bold">{user.position}</span>
                        </div>
                        <div className="w-10 h-10">
                          <img src={user.flag || '/placeholder-logo.jpg'} alt="User Flag" className="w-full h-full object-contain rounded-full" />
                        </div>
                        <div>
                          <div className="font-medium text-sm">{user.username}</div>
                          {user.country && (
                            <div className="text-xs opacity-75 flex items-center space-x-1">
                              <span>🇺🇦</span>
                              <span>{user.country}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold mb-1">
                          {user.prize}
                        </div>
                        <div className="text-xs opacity-90">{user.points.toLocaleString()}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-teal-700 px-6 py-4 text-center">
                  <div className="text-2xl font-bold mb-2">{league.betting_contest.prizes}</div>
                  <button className="bg-white text-teal-700 font-bold py-2 px-6 rounded hover:bg-gray-100 transition-colors">
                    {league.betting_contest.signup}
                  </button>
                </div>
              </div>
              <LiveScoreSection />
              <EventsAndTables />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;