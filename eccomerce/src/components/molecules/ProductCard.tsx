import Image from "next/image";
import React from "react";
import MainButton from "../atoms/Button";
import CartIcon from "../atoms/CartIcon";

type ProductCardProps = {
  name: string;
  price: number;
  promotional_price: number;
  image: string;
  description: string;
};

const ProductCard = (props: ProductCardProps) => {
  const { name, price, promotional_price, image, description } = props;
  return (
    <div className="flex flex-col justify-between gap-2 max-w-80 h-[32rem] p-3 border border-gray-300 rounded-md  bg-gray-200">
      <div className="flex h-[70%] overflow-hidden ">
        <Image
          src={image}
          alt={description}
          width={600}
          height={450}
          className={"object-cover place-self-center"}
        />
      </div>
      <div className="flex flex-col justify-between">
        <h1 className="text-lg font-bold">{name}</h1>
        {promotional_price ? (
          <div className="flex gap-1">
            <p className="line-through text-gray-500 text-lg">{price}R$</p> -
            <p className="text-lg ">{promotional_price}R$</p>
          </div>
        ) : (
          <p className="text-lg ">{price}R$</p>
        )}
        <div className="flex gap-2 mt-2">
          <MainButton ariaLabel={`Acessar mais detalhes de: ${name}`}>
            + Detalhes{" "}
          </MainButton>

          <MainButton
            ariaLabel={`Acessar mais detalhes de: ${name}`}
            variant="white"
          >
            <CartIcon ariaLabel="Adicionar ao carrinho" />
          </MainButton>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
