import { usePaginationDispatch, usePaginationSelector } from "@/hooks/usePagination";
import { fetchPaginatedProducts, setCurrentPage } from "@/slices/paginationSlice";

const Pagination: React.FC = () => {

  const { selectedValue, prevPage, nextPage, lastPage } = usePaginationSelector((state) => state.pagination);
  const currentPage = prevPage !== null ? prevPage + 1 : 1;
  const dispatch = usePaginationDispatch();

  const handlePageChange = (newPage: number) => {
    dispatch(setCurrentPage(newPage));
    dispatch(fetchPaginatedProducts({ page: newPage, category: selectedValue }));
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
          {currentPage} de {lastPage}
        </span>
      </div>

      <button
        aria-label="Próxima página"
        tabIndex={0}
        onClick={() => handlePageChange(nextPage!)}
        disabled={currentPage === lastPage}
        className="px-4 py-2 bg-black text-white  font-black text-2xl rounded hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
