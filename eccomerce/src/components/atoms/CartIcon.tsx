import Image from "next/image";
import React from "react";

const CartIcon = () => {
  return (
    <div>
      <Image
        aria-label="Acesse o carrinho"
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
