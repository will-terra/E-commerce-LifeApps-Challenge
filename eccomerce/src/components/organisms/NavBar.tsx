import React from "react";
import NavBarActions from "../molecules/NavBarActions";

const NavBar = () => {
  return (
    <section className="flex justify-between items-center w-full py-3 bg-slate-100 border border-gray-600">
      <h1 className="text-[2.5rem] px-3">NEISH</h1> <NavBarActions />
    </section>
  );
};

export default NavBar;
