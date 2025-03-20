"use client"
import Pagination from "@/components/molecules/Pagination";
import Filter from "@/components/organisms/Filter";
import ProductGrid from "@/components/organisms/ProductGrid";

export default function Home() {
  return (
    <main className="flex flex-col py-8 bg-gray-100">
      <h1 className="flex justify-center mx-8 text-3xl text-center font-bold">
        Veja nossa nova coleção Verão 2025:
      </h1>
      <Filter />
      <ProductGrid />
      <Pagination />
    </main>
  );
}
