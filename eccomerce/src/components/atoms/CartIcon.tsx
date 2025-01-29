import Image from "next/image";

import { CartIconProps } from "@/types/Cart";

const CartIcon: React.FC<CartIconProps> = ({ ariaLabel }: CartIconProps) => {
  return (
    <div>
      <Image
        aria-label={ariaLabel}
        src="/Cart.svg"
        alt="Desenho de uma bolsa"
        width={35}
        height={35}
        className="mx-2"
      />
    </div>
  );
};

export default CartIcon;
