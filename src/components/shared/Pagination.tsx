import React from "react";

type PaginationProps = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPage: number;
  onPrev: () => void;
  onNext: () => void;
};

const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPage,
  onPrev,
  onNext,
}: PaginationProps) => {
  const renderPageNumbers = () => {
    const pageNumbers = Array.from(
      { length: totalPage },
      (_, index) => index + 1
    );

    return (
      <div className="flex space-x-2">
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 focus:outline-none ${
              currentPage === page
                ? "bg-blue-500 text-white font-bold"
                : "bg-gray-300 hover:bg-gray-400 text-gray-700"
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
        onClick={onPrev}
        disabled={currentPage === 1}
        className={`px-3 py-1 focus:outline-none ${
          currentPage === 1
            ? "bg-gray-300 text-gray-700 cursor-not-allowed"
            : "bg-blue-500 text-white"
        }`}
      >
        Gerile
      </button>
      {renderPageNumbers()}
      <button
        onClick={onNext}
        disabled={currentPage === totalPage}
        className={`px-3 py-1 focus:outline-none ${
          currentPage === totalPage
            ? "bg-gray-300 text-gray-700 cursor-not-allowed"
            : "bg-blue-500 text-white"
        }`}
      >
        İlerle
      </button>
    </div>
  );
};

export default Pagination;
