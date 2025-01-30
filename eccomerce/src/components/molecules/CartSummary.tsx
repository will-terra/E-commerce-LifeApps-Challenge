"use client";
import MainButton from "../atoms/MainButton";

import { useAppContext } from "@/contexts/AppProvider";

interface CartSummaryProps {
  className?: string;
}

const CartSummary: React.FC<CartSummaryProps> = ({ className }) => {
  const { cartTotal, removeAllFromCart } = useAppContext();
  const freeShipping = cartTotal > 199;

  return (
    <div
      className={`${className} self-center border border-gray-500 max-w-[40rem] my-4 bg-gray-200 rounded-md `}
    >
      <h2 className="uppercase font-semibold text-xl mb-4 text-center">
        Resumo do pedido:
      </h2>
      <p className="text-lg mb-2">
        Carrinho: <span className="text-lg ">{cartTotal}R$</span>{" "}
      </p>
      <p className="text-lg mb-4">
        Frete:{" "}
        {freeShipping ? (
          <span className="text-lg text-red-800">grátis!</span>
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
      <div className="flex justify-around items-center gap-4">
        <MainButton className="px-8" ariaLabel="Finalizar pedido" size="large">
          Finalizar pedido
        </MainButton>
        <MainButton
          onClick={() => removeAllFromCart}
          className="px-8"
          ariaLabel="Limpar carrinho"
          variant="white"
          size="large"
        >
          Limpar carrinho
        </MainButton>
      </div>
    </div>
  );
};

export default CartSummary;
