import ProductCard from "../molecules/ProductCard";
import Pagination from "../molecules/Pagination";

import { useAppContext } from "@/contexts/AppProvider";

const ProductGrid = () => {
  const { filteredProducts } = useAppContext();
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  w-fit gap-12 place-content-center mx-auto my-4">
      {filteredProducts.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
      <Pagination />
    </section>
  );
};

export default ProductGrid;
