import CartActions from "../molecules/CartActions";
import Logo from "../atoms/Logo";
import ProfileIcon from "../atoms/ProfileIcon";

const NavBar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center w-full py-1 bg-gray-200 border border-gray-500">
      <Logo variant="black" />
      <ul className="flex justify-around items-center mr-4 xl:mr-20">
        <li>
          <ProfileIcon />
        </li>
        <li>
          <CartActions />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
