"use client";
import { useAppContext } from "@/contexts/AppProvider";

const CartSummary = () => {
  const { cartTotal } = useAppContext();
  return (
    <div className="self-start border border-gray-400 max-w-80 px-4 py-6 m-4 bg-gray-200">
      <h2 className="uppercase font-semibold text-xl mb-4 text-center">
        Resumo do pedido:
      </h2>
      <p className="text-lg mb-2">
        Carrinho: <span className="items-end">{cartTotal}R$</span>{" "}
      </p>
      <p>
        {" "}
        Frete:{" "}
        {cartTotal > 199 ? (
          <span className="text-red-400">grátis!</span>
        ) : (
          "50R$"
        )}
      </p>
    </div>
  );
};

export default CartSummary;
