import NavBarActions from "../molecules/NavBarActions";

const NavBar = () => {
  return (
    <section className="flex justify-between items-center w-full py-1 bg-slate-100 border border-gray-600">
      <h1 className="text-[2.5rem] font-black ml-12">NEISH</h1>{" "}
      <NavBarActions />
    </section>
  );
};

export default NavBar;
