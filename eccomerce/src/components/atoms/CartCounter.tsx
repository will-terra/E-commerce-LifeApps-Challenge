"use client";

import { useAppContext } from "@/contexts/AppProvider";

const CartCounter = () => {
  const { cart } = useAppContext();
  const cartTotal = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  return (
    <>
      {cart.length > 0 && (
        <p className="text-black text-[2rem] font-medium mr-3">{cartTotal}</p>
      )}
    </>
  );
};
export default CartCounter;
