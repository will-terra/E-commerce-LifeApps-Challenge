import FilterMobile from "../molecules/FilterMobile";
import FilterDesktop from "../molecules/FilterDesktop";

const Filter: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-4 my-6 xl:my-8">
      <div className="flex place-self-start xl:hidden ml-8">
        <FilterMobile />
      </div>

      <div className="hidden xl:flex">
        <FilterDesktop />
      </div>
    </section>
  );
};

export default Filter;
