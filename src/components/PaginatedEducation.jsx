import React, { useState, useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { FaGraduationCap, FaUserShield, FaCertificate, FaPrint, FaFilePdf, FaSearch } from 'react-icons/fa';

const ITEMS_PER_PAGE = 10;

const PaginatedEducation = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const containerRef = useRef(null);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = data.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const filteredItems = paginatedItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.institution.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const exportToPDF = async () => {
    const canvas = await html2canvas(containerRef.current);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('education-training.pdf');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Education & Training</h1>

      <div className="flex justify-center items-center gap-4 mb-6">
        <FaSearch className="text-white" />
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 rounded bg-gray-800 border border-gray-600 text-white"
        />
        <button
          onClick={exportToPDF}
          className="px-4 py-2 bg-teal-600 rounded flex items-center gap-2"
        >
          <FaFilePdf /> Export PDF
        </button>
        <button
          onClick={() => window.print()}
          className="px-4 py-2 bg-blue-600 rounded flex items-center gap-2"
        >
          <FaPrint /> Print View
        </button>
      </div>

      <div ref={containerRef} className="relative border-l border-gray-700 pl-6">
        {filteredItems.map(item => (
          <div key={item.id} className="mb-10 relative">
            <div className="absolute w-3 h-3 bg-teal-500 rounded-full left-[-7px] top-1.5"></div>
            <div className="bg-gray-800 p-4 rounded-md shadow-md">
              <div className="flex items-center gap-2 mb-2">
                {item.category === 'education' && <FaGraduationCap className="text-teal-400" />}
                {item.category === 'military' && <FaUserShield className="text-teal-400" />}
                {item.category === 'certification' && <FaCertificate className="text-teal-400" />}
                <h2 className="text-xl font-semibold text-teal-400">{item.title}</h2>
              </div>
              <h3 className="text-sm text-gray-400">{item.institution} • {item.date}</h3>
              <p className="mt-2 text-gray-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-700 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-white">Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-700 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginatedEducation;