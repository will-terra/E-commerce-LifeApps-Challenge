"use client";
import CartCard from "../molecules/CartCard";

import { useAppContext } from "@/contexts/AppProvider";

const CartItems: React.FC = () => {
  const { cart } = useAppContext();

  return (
    <div className="flex flex-col w-full gap-4  px-4 lg:px-0 ">
      <h1 className="flex text-3xl text-center font-bold ml-2 mb-1 lg:ml-24">
        Seu carrinho:
      </h1>
      {cart.map((item) => (
        <CartCard key={item.id} product={item} />
      ))}{" "}
    </div>
  );
};

export default CartItems;
