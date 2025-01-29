"use client";
import { useAppContext } from "@/contexts/AppProvider";

interface PaginationProps {
  currentPage: number;
}
const Pagination: React.FC<PaginationProps> = ({ currentPage }) => {
  const { prevPage, nextPage, totalPages, itemsPerPage, fetchProducts } =
    useAppContext();

  const handlePageChange = (newPage: number) => {
    fetchProducts(newPage, itemsPerPage);
  };

  return (
    <div className="flex gap-4 items-center mt-6">
      <button
        onClick={() => handlePageChange(prevPage!)}
        disabled={!prevPage}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Anterior
      </button>

      <div className="flex items-center gap-2">
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <span className="text-gray-500">|</span>
        <span>{itemsPerPage} itens por página</span>
      </div>

      <button
        onClick={() => handlePageChange(nextPage!)}
        disabled={!nextPage}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Próxima
      </button>
    </div>
  );
};

export default Pagination;
