"use client";
import { useAppContext } from "@/contexts/AppProvider";
import { useState } from "react";

const Pagination: React.FC = () => {
  const {
    prevPage,
    nextPage,
    totalPages,
    itemsPerPage,
    fetchProducts,
    selectedValue,
  } = useAppContext();

  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (newPage: number) => {
    fetchProducts(newPage, itemsPerPage, selectedValue);
    setCurrentPage(newPage);
  };

  return (
    <div className="flex gap-4 justify-center items-center mt-6">
      <button
        onClick={() => handlePageChange(prevPage!)}
        disabled={!prevPage}
        className="px-4 py-2 bg-black text-white  font-black text-2xl rounded hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {"<"}
      </button>

      <div className="flex items-center gap-2">
        <span>
          {currentPage} de {totalPages}
        </span>
      </div>

      <button
        onClick={() => handlePageChange(nextPage!)}
        disabled={!nextPage}
        className="px-4 py-2 bg-black text-white  font-black text-2xl rounded hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
