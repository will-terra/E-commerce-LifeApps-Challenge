"use client";

import Filter from "@/components/molecules/Filter";
import ProductGrid from "@/components/organisms/ProductGrid";

export default function Home() {
  return (
    <div>
      <main>
        <Filter />
        <ProductGrid />
      </main>
      <footer></footer>
    </div>
  );
}
