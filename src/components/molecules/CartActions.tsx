import Link from "next/link";

import CartIcon from "../atoms/CartIcon";
import CartCounter from "../atoms/CartCounter";

const CartActions: React.FC = () => {
  return (
    <Link href={"/cart"} className="flex items-center bg-gray-400 rounded-full">
      <CartIcon ariaLabel="Acessar o carrinho" /> <CartCounter />
    </Link>
  );
};

export default CartActions;
