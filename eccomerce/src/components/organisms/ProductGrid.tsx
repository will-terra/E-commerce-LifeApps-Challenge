import ProductCard from "../molecules/ProductCard";

import { useAppContext } from "@/contexts/AppProvider";

const ProductGrid: React.FC = () => {
  const { products } = useAppContext();
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 w-fit gap-12 place-content-center px-4 mx-auto my-4">
      {products.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </section>
  );
};

export default ProductGrid;
