"use client";
import CartCard from "../molecules/CartCard";

import { useAppContext } from "@/contexts/AppProvider";

const CartItems: React.FC = () => {
  const { cart } = useAppContext();

  return (
    <div className="flex flex-col gap-4 m-4">
      {cart.map((item) => (
        <CartCard key={item.id} product={item} />
      ))}{" "}
    </div>
  );
};

export default CartItems;
