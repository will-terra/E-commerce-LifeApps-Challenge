"use client";
import { useAppContext } from "@/contexts/AppProvider";

const Pagination: React.FC = () => {
  const { pagination, itemsPerPage, fetchProducts, selectedValue } =
    useAppContext();
  const { prevPage, nextPage, totalPages } = pagination;
  const currentPage = prevPage !== null ? prevPage + 1 : 1;

  const handlePageChange = (newPage: number) => {
    fetchProducts(newPage, itemsPerPage, selectedValue);
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  return (
    <div className="flex gap-4 justify-center items-center mt-6">
      <button
        aria-label="Página anterior"
        tabIndex={0}
        onClick={() => handlePageChange(prevPage!)}
        disabled={!prevPage}
        className="px-4 py-2 tab-0 bg-black text-white  font-black text-2xl rounded hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {"<"}
      </button>

      <div className="flex items-center gap-2">
        <span aria-live="assertive" aria-label={`Página:`}>
          {currentPage} de {totalPages}
        </span>
      </div>

      <button
        aria-label="Próxima página"
        tabIndex={0}
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
