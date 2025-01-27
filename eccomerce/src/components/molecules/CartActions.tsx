import CartIcon from "../atoms/CartIcon";
import CartCounter from "../atoms/CartCounter";

const CartActions = () => {
  return (
    <a href={"/cart"} className="flex items-center bg-gray-400 rounded-full">
      <CartIcon ariaLabel="Acessar o carrinho" /> <CartCounter />
    </a>
  );
};

export default CartActions;
