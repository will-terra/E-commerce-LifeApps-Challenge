import { useAppContext } from "@/contexts/AppProvider";
import React from "react";
import ProductCard from "../molecules/ProductCard";

const ProductGrid = () => {
  const { data } = useAppContext();
  return (
    <section className="grid grid-cols-3  w-fit gap-12 place-content-center mx-auto mb-4">
      {data.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </section>
  );
};

export default ProductGrid;
