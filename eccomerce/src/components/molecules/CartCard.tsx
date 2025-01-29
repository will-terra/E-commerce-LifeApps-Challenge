import Image from "next/image";

import MainButton from "../atoms/Button";

import { useAppContext } from "@/contexts/AppProvider";

import { CartCardProps } from "@/types/Cart";

const CartCard: React.FC<CartCardProps> = ({ product }) => {
  const { addToCart, removeFromCart, removeAllFromCart } = useAppContext();
  const { name, category, price, promotional_price, image, quantity } = product;

  return (
    <div className="flex justify-center gap-5 w-[26rem] max-w-[26rem] py-6 pl-4 bg-gray-200 border border-gray-500 rounded-lg">
      <div className="flex w-1/2">
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          className="m-2 object-cover"
        />{" "}
      </div>
      <div className="flex flex-col w-1/2 m-2 gap-2">
        <h2 className="font-semibold text-xl">{name}</h2>
        <p className="bg-white self-center w-fit text-black py-1 px-3 border border-gray-500 rounded-full">
          {category}
        </p>
        <p className="text-2xl text-black">
          {promotional_price ? promotional_price : price}R$
        </p>
        <div className="flex justify-center items-center w-16 gap-2 bg-gray-300 border border-gray-500 rounded-lg px-2">
          <button
            onClick={() => removeFromCart(product)}
            disabled={quantity < 2}
            className="text-2xl"
          >
            -{" "}
          </button>{" "}
          <p> {quantity || 0} </p>
          <button onClick={() => addToCart(product)} className="text-2xl">
            {" "}
            +
          </button>
        </div>

        <MainButton
          ariaLabel="Remover produto do carrinho"
          onClick={() => removeAllFromCart(product)}
          variant="white"
          size="small"
        >
          <Image src="/Trash.svg" alt="Lixeira" width={20} height={20} />
        </MainButton>
      </div>
    </div>
  );
};

export default CartCard;
