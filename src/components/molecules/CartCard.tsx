import Image from "next/image";

import MainButton from "../atoms/MainButton";

import { useAppContext } from "@/contexts/AppProvider";

import { CartCardProps } from "@/types/Cart";

const CartCard: React.FC<CartCardProps> = ({ product }) => {
  const { addToCart, removeFromCart } = useAppContext();
  const { name, category, price, promotional_price, image, quantity } = product;

  return (
    <div className="flex justify-center self-center gap-5 w-full max-w-[30rem]  xl:max-w-[30rem] 2xl:max-w-[40rem] py-3 xl:py-6 pl-4 xl:pl-8 mx-4 xl:mx-0 bg-gray-200 border border-gray-500 rounded xl">
      <div className="flex w-1/2 justify-end">
        <Image
          loading="lazy"
          src={image}
          alt={name}
          width={200}
          height={200}
          className="m-2 object-cover"
        />
      </div>
      <div className="flex flex-col w-1/2 m-2 gap-2">
        <h2 className="font-semibold text-xl">{name}</h2>
        <p className="bg-white self-center w-fit text-black py-1 px-3 border border-gray-500 rounded-full">
          {category}
        </p>
        <p className="text-2xl text-black">
          {promotional_price ? promotional_price : price}R$
        </p>
        <div className="flex justify-center items-center w-fit gap-2 bg-gray-300 border border-gray-500 rounded xl px-2">
          <button
            aria-label={`Remover um ${name} do carrinho`}
            onClick={() => removeFromCart(product)}
            disabled={quantity < 2}
            className="text-3xl mx-2 disabled:cursor-not-allowed"
          >
            -{" "}
          </button>
          <p
            aria-live="polite"
            aria-label={`Quantidade de ${name} no carrinho:`}
            className="text-2xl"
          >
            {" "}
            {quantity || 0}{" "}
          </p>
          <button
            aria-label={`Adicionar um ${name} ao carrinho`}
            onClick={() => addToCart(product)}
            className="text-2xl mx-2"
          >
            +
          </button>
        </div>

        <MainButton
          ariaLabel={`Remover um ${name} do carrinho`}
          onClick={() => removeFromCart(product)}
          variant="white"
          size="small"
          className="px-8 mt-2"
        >
          <Image src="/Trash.svg" alt="Lixeira" width={20} height={20} />
        </MainButton>
      </div>
    </div>
  );
};

export default CartCard;
