import Image from "next/image";

interface CartIconProps {
  ariaLabel: string;
}

const CartIcon = ({ ariaLabel }: CartIconProps) => {
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
