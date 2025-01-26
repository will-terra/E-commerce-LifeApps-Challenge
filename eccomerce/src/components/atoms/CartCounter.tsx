"use client";

import { useAppContext } from "@/contexts/AppProvider";

const CartCounter = () => {
  const { cart } = useAppContext();

  return (
    <>
      {cart.length > 0 && (
        <p className="text-black text-[2rem] font-medium mr-3">{cart.length}</p>
      )}
    </>
  );
};
export default CartCounter;
