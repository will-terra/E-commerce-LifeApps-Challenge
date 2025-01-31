import Logo from "../atoms/Logo";
import CartActions from "../molecules/CartActions";

const NavBar: React.FC = () => {
  return (
    <nav className="flex bg-gray-200 border border-gray-500">
      <ul className="flex justify-between items-center w-full py-1">
        <li>
          <Logo variant="black" />
        </li>
        <li className="mr-4 xl:mr-20">
          <CartActions />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
