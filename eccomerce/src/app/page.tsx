"use client";
import Pagination from "@/components/molecules/Pagination";
import Filter from "@/components/organisms/Filter";
import ProductGrid from "@/components/organisms/ProductGrid";

export default function Home({}) {
  const searchParams = new URLSearchParams(window.location.search);
  const currentPage = Number(searchParams.get("page")) || 1;

  return (
    <main className="mt-4 bg-gray-100">
      <h1 className="place-self-start mx-8 text-3xl text-center font-bold">
        Veja nossa nova coleção Verão 2025:
      </h1>
      <Filter />
      <ProductGrid />
      <Pagination currentPage={currentPage} />
    </main>
  );
}
