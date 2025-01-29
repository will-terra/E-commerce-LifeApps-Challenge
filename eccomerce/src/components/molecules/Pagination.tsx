import { useRouter } from "next/router";
import { usePathname, useSearchParams } from "next/navigation";

import { PaginationProps } from "@/types/Pagination";

const Pagination: React.FC<PaginationProps> = (
  Paginationprops: PaginationProps
) => {
  const { currentPage, totalPages, itemsPerPage } = Paginationprops;
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    params.set("perPage", itemsPerPage.toString());
    replace(`${pathname}?${params.toString}`);
  };

  return (
    <div className="flex gap-2 items-center mt-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      >
        Anterior
      </button>

      <span>
        Página {currentPage} de {totalPages}
      </span>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      >
        Próxima
      </button>
    </div>
  );
};

export default Pagination;
