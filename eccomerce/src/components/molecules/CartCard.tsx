import { CartItem, useAppContext } from "@/contexts/AppProvider";
import Image from "next/image";
import MainButton from "../atoms/Button";

interface CartCardProps {
  product: CartItem;
}

const CartCard = ({ product }: CartCardProps) => {
  const { removeFromCart } = useAppContext();
  const { name, category, price, promotional_price, image, quantity } = product;

  return (
    <div className=" flex p-4 border border-gray-300 rounded-lg">
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className="m-2 object-cover"
      />{" "}
      <div className="flex flex-col m-2 gap-2">
        <h2 className="font-semibold text-lg">{name}</h2>
        <p className="bg-slate-500 w-fit text-white py-2 px-4 border border-black rounded-full">
          {category}
        </p>
        <p className="text-red-500 text-lg">
          {promotional_price ? promotional_price : price}R$
        </p>

        <p> Quantidade: {quantity}</p>

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
