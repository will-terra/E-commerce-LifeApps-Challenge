"use client";
import MainButton from "../atoms/MainButton";

import { useAppContext } from "@/contexts/AppProvider";

const CartSummary: React.FC = () => {
  const { cartTotal } = useAppContext();
  const freeShipping = cartTotal > 199;

  return (
    <div className="self-start border border-gray-500 max-w-80 px-12 py-8 m-4 bg-gray-200 rounded-md ">
      <h2 className="uppercase font-semibold text-xl mb-4 text-center">
        Resumo do pedido:
      </h2>
      <p className="text-lg mb-2">
        Carrinho: <span className="text-lg ">{cartTotal}R$</span>{" "}
      </p>
      <p className="text-lg mb-4">
        Frete:{" "}
        {freeShipping ? (
          <span className="text-lg text-red-500">grátis!</span>
        ) : (
          "50R$"
        )}
      </p>
      <hr className="h-1 bg-gray-500 border-0" />
      <p className="text-lg m-3">
        Total:{" "}
        <span className="text-2xl text-bold">
          {freeShipping ? cartTotal : cartTotal + 50}R${" "}
        </span>
      </p>
      <MainButton ariaLabel="Finalizar pedido" size="large">
        Finalizar pedido
      </MainButton>
    </div>
  );
};

export default CartSummary;
