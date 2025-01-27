"use client";
import { useAppContext } from "@/contexts/AppProvider";
import CartCard from "../molecules/CartCard";

const CartItems = () => {
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
