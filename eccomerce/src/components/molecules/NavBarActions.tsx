import SearchInput from "../atoms/SearchInput";
import ProfileIcon from "../atoms/ProfileIcon";
import CartIcon from "../atoms/CartIcon";
import CartCounter from "../atoms/CartCounter";

const NavBarActions = () => {
  return (
    <div className="flex justify-around items-center mr-20">
      <SearchInput /> <ProfileIcon />{" "}
      <CartIcon ariaLabel="Acessar o carrinho" /> <CartCounter />
    </div>
  );
};

export default NavBarActions;
