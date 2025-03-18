import { Dialog } from "@base-ui-components/react";

import AssistButton from "../atoms/AssistButton";

import { useCartDispatch, useCartSelector } from "@/hooks/useCart";
import { removeAllFromCart } from "@/slices/cartSlice";

const CartDialog: React.FC = () => {
  const cartQuantity = useCartSelector((state) => state.cart.totalQuantity);
  const dispatch = useCartDispatch();

  const backdrop =
    "fixed inset-0 bg-black opacity-20 transition-all duration-150 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 dark:opacity-70";
  const popup =
    "fixed top-1/2 left-1/2 -mt-8 w-96 max-w-[calc(100vw-3rem)] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-gray-100 p-6 text-gray-900 outline outline-1 outline-gray-200 transition-all duration-150 data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 dark:outline-gray-300";

  return (
    <Dialog.Root>
      <Dialog.Trigger
        aria-haspopup="dialog"
        disabled={cartQuantity === 0}
        className="disabled:opacity-50"
      >
        <AssistButton
          className="px-12"
          ariaLabel="Finalizar pedido"
          size="large"
          disabled={cartQuantity === 0}
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
            <Dialog.Close onClick={() => dispatch(removeAllFromCart())}>
              <AssistButton
                className="px-6"
                size="large"
                ariaLabel="Fechar a notificação"
              >
                Fechar
              </AssistButton>
            </Dialog.Close>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CartDialog;
