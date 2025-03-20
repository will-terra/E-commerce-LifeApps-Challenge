import { usePaginationSelector } from "@/hooks/usePagination";
import ProductCard from "../molecules/ProductCard";

const ProductGrid: React.FC = () => {
  const products = usePaginationSelector((state) => state.pagination).products;
  console.log(products);
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 w-fit gap-12 place-content-center px-4 mx-auto my-4">
      {products.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </section>
  );
};

export default ProductGrid;
