import Logo from "../atoms/Logo";
import ProfileIcon from "../atoms/ProfileIcon";
import SearchInput from "../atoms/SearchInput";
import CartActions from "../molecules/CartActions";

const NavBar = () => {
  return (
    <section className="flex justify-between items-center w-full py-1 bg-gray-200 border border-gray-500">
      <Logo variant="black" />
      <ul className="flex justify-around items-center mr-20">
        <li>
          <SearchInput />
        </li>
        <li>
          <ProfileIcon />
        </li>
        <li>
          <CartActions />
        </li>
      </ul>
    </section>
  );
};

export default NavBar;
