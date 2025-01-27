import CartIcon from "../atoms/CartIcon";
import CartCounter from "../atoms/CartCounter";
import Link from "next/link";

const CartActions = () => {
  return (
    <Link href={"/cart"} className="flex items-center bg-gray-400 rounded-full">
      <CartIcon ariaLabel="Acessar o carrinho" /> <CartCounter />
    </Link>
  );
};

export default CartActions;
