// Pagination.jsx
import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-6">
      <ul className="flex space-x-2">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => onPageChange(number)}
              className={`px-4 py-2 border rounded ${
                number === currentPage
                  ? "bg-yellow-600 text-white"
                  : "bg-white text-sky-950"
              }`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
