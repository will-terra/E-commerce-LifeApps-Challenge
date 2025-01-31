"use client";
import { Dialog } from "@base-ui-components/react";

import AssistButton from "../atoms/AssistButton";
import { useAppContext } from "@/contexts/AppProvider";
import MainButton from "../atoms/MainButton";

interface CartSummaryProps {
  className?: string;
}

const CartSummary: React.FC<CartSummaryProps> = ({ className }) => {
  const { cartTotal, removeAllFromCart } = useAppContext();
  const freeShipping = cartTotal > 199;

  const backdrop =
    "fixed inset-0 bg-black opacity-20 transition-all duration-150 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 dark:opacity-70";
  const popup =
    "fixed top-1/2 left-1/2 -mt-8 w-96 max-w-[calc(100vw-3rem)] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-gray-100 p-6 text-gray-900 outline outline-1 outline-gray-200 transition-all duration-150 data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 dark:outline-gray-300";

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
      <div className="flex justify-around flex-col md-flex-row items-center gap-4">
        <Dialog.Root>
          <Dialog.Trigger aria-haspopup="dialog">
            <AssistButton
              className="px-8"
              ariaLabel="Finalizar pedido"
              size="large"
            >
              Finalizar pedido
            </AssistButton>
          </Dialog.Trigger>
          <Dialog.Portal keepMounted>
            <Dialog.Backdrop className={backdrop} />
            <Dialog.Popup className={popup}>
              <Dialog.Title className="text-2xl font-black mb-3">
                Parabéns!
              </Dialog.Title>
              <Dialog.Description className={"text-lg mb-4"}>
                Você concluiu o pedido!
              </Dialog.Description>
              <div>
                <Dialog.Close onClick={() => removeAllFromCart()}>
                  <AssistButton ariaLabel="Fechar a notificação">
                    Fechar
                  </AssistButton>
                </Dialog.Close>
              </div>
            </Dialog.Popup>
          </Dialog.Portal>
        </Dialog.Root>
        <MainButton
          onClick={removeAllFromCart}
          className="px-8"
          ariaLabel="Limpar carrinho"
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
