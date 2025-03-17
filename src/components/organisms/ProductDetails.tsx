import Image from "next/image";

import MainButton from "../atoms/MainButton";
import CartIcon from "../atoms/CartIcon";

import { ProductDetailsProps } from "@/types/Product";

import { useCartDispatch } from "@/hooks/useCart";
import { addToCart } from "@/slices/cartSlice";

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

  const dispatch = useCartDispatch()

  return (
    <section className="flex flex-col lg:flex-row justify-center m-auto gap-4 2xl:gap-16 bg-gray-100">
      <div className="flex max-w-[95%] lg:max-w-1/2  mx-4 justify-center items-center">
        <Image
          loading="lazy"
          src={image}
          alt={name}
          width={600}
          height={450}
          className="w-auto h-auto "
        />
      </div>
      <div className="flex flex-col self-center lg:self-start justify-start max-w-[40rem] lg:max-w-1/2 gap-4 p-4 mt-8 lg:mt-0">
        <h1 className="text-4xl font-black text center">{name}</h1>
        <p className="bg-gray-300 w-fit text-black py-2 px-4 border border-gray-500 rounded-full">
          {category}{" "}
        </p>

        {promotional_price ? (
          <div className="flex flex-col gap-1 ml-2">
            <div className="flex gap-1 items-center">
              <p className="text-gray-500 text-xl">
                {" "}
                De: <span className="line-through text-xl"> {price}R$ </span>
              </p>{" "}
              -
              <p className="text-xl ">
                Por:{" "}
                <span className="text-red-800 text-2xl">
                  {promotional_price}R$
                </span>
              </p>
            </div>
            <p className="text-sm">
              {" "}
              Incríveis {""}
              <span className="text-red-800">{discount_percentage}%</span> de
              desconto
            </p>
          </div>
        ) : (
          <>
            <p className="text-xl ml-4">
              Por: <span className="text-red-800"> {price}R$ </span>
            </p>
          </>
        )}
        <p className="font-bold"> Saiba mais:</p>
        <p>{description}</p>

        <MainButton
          onClick={() => dispatch(addToCart(product))}
          ariaLabel={`Adicionar ${name} ao carrinho`}
          variant="white"
          size="large"
          className="px-2"
        >
          <CartIcon ariaLabel={`ícone do carrinho`} /> Adicionar ao carrinho
        </MainButton>
      </div>
    </section>
  );
};

export default ProductDetails;
