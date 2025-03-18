import { useCartSelector } from "@/hooks/useCart";

const CartCounter: React.FC = () => {
  const cartQuantity = useCartSelector
    ((state) => state.cart.totalQuantity);

  return (
    <>
      {cartQuantity > 0 && (
        <p
          aria-live="assertive"
          aria-label={`Total de itens no carrinho:`}
          className="text-black text-[2rem] font-medium mr-3"
        >
          {cartQuantity}
        </p>
      )}
    </>
  );
};
export default CartCounter;
