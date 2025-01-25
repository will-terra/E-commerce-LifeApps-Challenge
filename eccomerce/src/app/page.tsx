"use client";
import Header from "@/components/atoms/Header";
import Filter from "@/components/molecules/Filter";
import NavBar from "@/components/organisms/NavBar";
import ProductGrid from "@/components/organisms/ProductGrid";
import { useAppContext } from "@/contexts/AppProvider";

export default function Home() {
  const { selectedValue } = useAppContext();
  return (
    <div>
      <main>
        <Header />
        <NavBar />
        <Filter />
        <h1>Filtro ativo: {selectedValue}</h1>
        <ProductGrid />
      </main>
      <footer></footer>
    </div>
  );
}
