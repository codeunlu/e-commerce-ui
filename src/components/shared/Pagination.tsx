import React from "react";
import { MdNavigateNext,MdNavigateBefore } from "react-icons/md";

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
      <div className="flex space-x-3">
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 rounded-full ${
              currentPage === page
                ? "bg-blue-500 text-white font-bold"
                : "border border-gray-400 hover:bg-gray-200 text-gray-700"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center space-x-3">
      <button
        onClick={onPrev}
        disabled={currentPage === 1}
        className={`px-2 py-2 focus:outline-none rounded-full ${
          currentPage === 1
            ? "bg-gray-300 text-gray-700 cursor-not-allowed"
            : "bg-blue-500 text-white"
        }`}
      >
        <MdNavigateBefore className="w-6 h-6"/>
      </button>
      {renderPageNumbers()}
      <button
        onClick={onNext}
        disabled={currentPage === totalPage}
        className={`px-2 py-2 focus:outline-none rounded-full ${
          currentPage === totalPage
            ? "bg-gray-300 text-gray-700 cursor-not-allowed"
            : "bg-blue-500 text-white"
        }`}
      >
        <MdNavigateNext className="w-6 h-6"/>
      </button>
    </div>
  );
};

export default Pagination;
