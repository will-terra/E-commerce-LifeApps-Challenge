"use client";
import Header from "@/components/atoms/Header";
import Filter from "@/components/molecules/Filter";
import NavBar from "@/components/organisms/NavBar";
import ProductGrid from "@/components/organisms/ProductGrid";

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <NavBar />
        <Filter />
        <ProductGrid />
      </main>
      <footer></footer>
    </div>
  );
}
