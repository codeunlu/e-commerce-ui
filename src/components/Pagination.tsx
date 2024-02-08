import React from 'react';

type PaginationProps = {
  currentPage: number;
  totalPage: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPage, onPageChange }) => {
  const handlePrev = () => {
    if (currentPage === 1) return;
    onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage === totalPage) return;
    onPageChange(currentPage + 1);
  };

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = Array.from({ length: totalPage }, (_, index) => index + 1);

    return (
      <div className="flex space-x-2">
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`px-3 py-1 focus:outline-none ${
              currentPage === page
                ? 'bg-blue-500 text-white font-bold'
                : 'bg-gray-300 hover:bg-gray-400 text-gray-700'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`px-3 py-1 focus:outline-none ${
          currentPage === 1 ? 'bg-gray-300 text-gray-700 cursor-not-allowed' : 'bg-blue-500 text-white'
        }`}
      >
        Gerile
      </button>
      {renderPageNumbers()}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPage}
        className={`px-3 py-1 focus:outline-none ${
          currentPage === totalPage ? 'bg-gray-300 text-gray-700 cursor-not-allowed' : 'bg-blue-500 text-white'
        }`}
      >
        İlerle
      </button>
    </div>
  );
};

export default Pagination;