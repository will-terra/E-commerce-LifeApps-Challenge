import CartActions from "../molecules/CartActions";
import Logo from "../atoms/Logo";
import ProfileIcon from "../atoms/ProfileIcon";

const NavBar: React.FC = () => {
  return (
    <nav className="flex bg-gray-200 border border-gray-500">
      <ul className="flex justify-between items-center w-full py-1">
        <li>
          <Logo variant="black" />
        </li>
        <div className="flex justify-around items-center mr-4 xl:mr-20">
          <li>
            <ProfileIcon />
          </li>
          <li>
            <CartActions />
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
