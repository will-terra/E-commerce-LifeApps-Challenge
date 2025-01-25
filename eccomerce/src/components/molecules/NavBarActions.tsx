import React from "react";
import SearchInput from "../atoms/SearchInput";
import ProfileIcon from "../atoms/ProfileIcon";
import CartIcon from "../atoms/CartIcon";
import CartCounter from "../atoms/CartCounter";

const NavBarActions = () => {
  return (
    <div className="flex justify-around items-center mx-2">
      <SearchInput /> <ProfileIcon /> <CartIcon /> <CartCounter />
    </div>
  );
};

export default NavBarActions;
