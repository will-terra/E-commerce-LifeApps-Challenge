import Image from "next/image";

import MainButton from "../atoms/MainButton";
import CartIcon from "../atoms/CartIcon";

import { useCartDispatch } from "@/hooks/useCart";
import { addToCart } from "@/slices/cartSlice";

import { Product } from "@/types/Product";

const ProductCard: React.FC<Product> = (product) => {
  const { id, name, price, promotional_price, image, description } = product;
  const dispatch = useCartDispatch();

  return (
    <div className="flex flex-col max-w-80 h-full max-h-[32rem] p-3 border border-gray-300 rounded-md  bg-gray-200">
      <div className="flex h-full overflow-hidden ">
        <Image
          loading="lazy"
          src={image}
          alt={description}
          width={300}
          height={250}
          className={"object-cover place-self-center"}
        />
      </div>
      <div className="flex flex-col justify-between">
        <h1 className="text-lg font-bold mt-2">{name}</h1>
        {promotional_price ? (
          <div className="flex gap-1">
            <p className="line-through text-gray-900 text-lg">{price}R$</p> -
            <p className="text-lg text-red-800">{promotional_price}R$</p>
          </div>
        ) : (
          <p className="text-lg text-red-800">{price}R$</p>
        )}
        <div className="flex gap-4 mt-2">
          <MainButton
            href={`/products/${id}`}
            ariaLabel={`Acessar mais detalhes de: ${name}`}
            className="px-2"
            size="small"
          >
            + Detalhes{" "}
          </MainButton>

          <MainButton
            onClick={() => dispatch(addToCart(product))}
            ariaLabel={`Adicionar ${name} ao carrinho`}
            variant="white"
            size="small"
            className="px-2"
          >
            <CartIcon ariaLabel={`Adicionar ${name} ao carrinho`} />
          </MainButton>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
