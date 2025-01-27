import { CartItem, useAppContext } from "@/contexts/AppProvider";
import Image from "next/image";
import MainButton from "../atoms/Button";

interface CartCardProps {
  product: CartItem;
}

const CartCard = ({ product }: CartCardProps) => {
  const { addToCart, removeFromCart } = useAppContext();
  const { name, category, price, promotional_price, image, quantity } = product;

  return (
    <div className=" flex  justify-center gap-5 w-[26rem] max-w-[26rem] py-6 pr-4 border border-gray-300 rounded-lg">
      <div>
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          className="m-2 object-cover"
        />{" "}
      </div>
      <div className="flex flex-col m-2 gap-2">
        <h2 className="font-semibold text-xl">{name}</h2>
        <p className="bg-gray-300 w-fit text-black py-1 px-3 border border-gray-500 rounded-full">
          {category}
        </p>
        <p className="text-red-500 text-lg">
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
          <p> {quantity} </p>
          <button onClick={() => addToCart(product)} className="text-2xl">
            {" "}
            +
          </button>
        </div>

        <MainButton
          ariaLabel="Remover produto do carrinho"
          onClick={() => removeFromCart(product)}
        >
          {" "}
          Remover
        </MainButton>
      </div>{" "}
    </div>
  );
};

export default CartCard;
