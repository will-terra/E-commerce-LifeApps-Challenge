"use client";
import CartCard from "../molecules/CartCard";

import { useAppContext } from "@/contexts/AppProvider";

const CartItems: React.FC = () => {
  const { cart } = useAppContext();

  return (
    <div className="flex flex-col w-full gap-4 py-4 mt-8 lg:mt-0">
      {cart.map((item) => (
        <CartCard key={item.id} product={item} />
      ))}{" "}
    </div>
  );
};

export default CartItems;
