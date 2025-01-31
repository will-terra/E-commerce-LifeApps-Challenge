"use client";
import MainButton from "../atoms/MainButton";
import CartDialog from "../molecules/CartDialog";

import { useAppContext } from "@/contexts/AppProvider";

interface CartSummaryProps {
  device: "mobile" | "desktop";
}

const CartSummary: React.FC<CartSummaryProps> = ({ device }) => {
  const { cartTotal, removeAllFromCart } = useAppContext();
  const freeShipping = cartTotal > 199;
  const className =
    device === "mobile"
      ? "flex flex-col self-center lg:hidden w-[90%] max-w-[40rem]  px-6 py-4 mb-4"
      : "hidden lg:flex lg:flex-col w-[80%] px-12 py-8 mt-14 mr-8";
  return (
    <div
      className={`${className} border border-gray-500 h-fit bg-gray-200 rounded-md `}
    >
      <h2 className="uppercase font-semibold text-xl mb-4 text-center">
        Resumo do pedido:
      </h2>
      <p className="text-lg mb-2">
        Carrinho: <span className="text-lg ">{cartTotal}R$</span>{" "}
      </p>
      <p aria-live="polite" className="text-lg mb-4">
        Frete:{" "}
        {freeShipping ? (
          <span className="text-lg text-red-800">grátis!</span>
        ) : (
          "50R$"
        )}
      </p>
      <hr className="h-1 bg-gray-500 border-0" />
      <p className="text-xl mr-3 my-3">
        Total:
        <span
          aria-live="polite"
          aria-label="Valor total do pedido"
          className="text-2xl text-bold ml-2"
        >
          {freeShipping ? cartTotal : cartTotal + 50}R${" "}
        </span>
      </p>
      <div className="flex justify-around flex-col lg:flex-row items-center gap-4">
        <CartDialog />
        <MainButton
          onClick={removeAllFromCart}
          className="px-12"
          ariaLabel="Limpar todos itens do carrinho"
          variant="white"
          size="large"
        >
          Limpar carrinho
        </MainButton>{" "}
      </div>
    </div>
  );
};

export default CartSummary;
