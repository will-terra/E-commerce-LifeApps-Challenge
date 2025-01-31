"use client";
import { useAppContext } from "@/contexts/AppProvider";

const CartCounter: React.FC = () => {
  const { cartQuantity } = useAppContext();

  return (
    <>
      {cartQuantity > 0 && (
        <p className="text-black text-[2rem] font-medium mr-3">
          {cartQuantity}
        </p>
      )}
    </>
  );
};
export default CartCounter;
