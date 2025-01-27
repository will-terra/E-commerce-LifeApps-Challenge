import ProfileIcon from "../atoms/ProfileIcon";
import SearchInput from "../atoms/SearchInput";
import CartActions from "../molecules/CartActions";

const NavBar = () => {
  return (
    <section className="flex justify-between items-center w-full py-1 bg-slate-100 border border-gray-600">
      <h1 className="text-[2.5rem] font-black ml-12">NEISH</h1>
      <ul className="flex justify-around items-center mr-20">
        <li>
          <SearchInput />
        </li>
        <li>
          <ProfileIcon />
        </li>
        <li>
          <a>
            <CartActions />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default NavBar;
