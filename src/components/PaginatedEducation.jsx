import React, { useState, useEffect } from 'react';

const PaginatedEducation = ({ data, searchTerm, setSearchTerm }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    setCurrentPage(1); // Reset on new search
  }, [searchTerm]);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = data.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  return (
    <div>
      {/* Search Input */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="px-4 py-2 rounded-md w-full max-w-md bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      {/* Results */}
      <div className="relative border-l border-gray-700 pl-6 space-y-10 transition-all duration-500">
        {paginatedItems.length > 0 ? (
          paginatedItems.map(item => (
            <div
              key={item.id}
              className="relative group transform transition duration-300 ease-in-out hover:scale-[1.02] hover:animate-glow-pulse rounded-md"
            >
              <div className="absolute w-3 h-3 bg-teal-500 rounded-full left-[-7px] top-1.5 z-10"></div>
              <div className="bg-gray-800 p-4 shadow-md rounded-md">
                <h2 className="text-xl font-semibold text-teal-400">{item.title}</h2>
                <h3 className="text-sm text-gray-400">{item.institution} • {item.date}</h3>
                <p className="mt-2 text-gray-300">{item.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">No results found.</p>
        )}
      </div>

      {/* Pagination Controls */}
      {data.length > ITEMS_PER_PAGE && (
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
      )}
    </div>
  );
};

export default PaginatedEducation;
