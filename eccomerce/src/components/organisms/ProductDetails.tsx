import Image from "next/image";

import MainButton from "../atoms/MainButton";
import CartIcon from "../atoms/CartIcon";

import { useAppContext } from "@/contexts/AppProvider";

import { ProductDetailsProps } from "@/types/Product";

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const {
    name,
    category,
    price,
    discount_percentage,
    promotional_price,
    image,
    description,
  } = product;

  const { addToCart } = useAppContext();

  return (
    <section className="flex justify-center m-auto gap-2">
      <Image
        priority
        src={image}
        alt={name}
        width={600}
        height={450}
        className="mt-8 ml-4 w-auto h-auto "
      />
      <div className="flex flex-col justify-start max-w-[50%] gap-4 p-4 mt-8">
        <h1 className="text-4xl font-black text center">{name}</h1>
        <p className="bg-gray-300 w-fit text-black py-2 px-4 border border-gray-500 rounded-full">
          {category}{" "}
        </p>

        {promotional_price ? (
          <div className="flex flex-col gap-1 ml-2">
            <div className="flex gap-1 items-center">
              <p className="text-gray-500 text-lg">
                {" "}
                De: <span className="line-through text-lg"> {price}R$ </span>
              </p>{" "}
              -
              <p className="text-lg ">
                Por:{" "}
                <span className="text-red-500 text-2xl">
                  {promotional_price}R$
                </span>
              </p>
            </div>
            <p className="text-sm">
              {" "}
              Incríveis {""}
              <span className="text-red-500">{discount_percentage}%</span> de
              desconto
            </p>
          </div>
        ) : (
          <>
            <p className="text-xl ml-4">
              Por: <span className="text-red-500"> {price}R$ </span>
            </p>
          </>
        )}
        <p className="font-bold"> Saiba mais:</p>
        <p>{description}</p>

        <MainButton
          onClick={() => addToCart({ ...product })}
          ariaLabel={`Adicionar ${name} ao carrinho`}
          variant="white"
          size="large"
        >
          <CartIcon ariaLabel={`ícone do carrinho`} /> Adicionar ao carrinho
        </MainButton>
      </div>
    </section>
  );
};

export default ProductDetails;
