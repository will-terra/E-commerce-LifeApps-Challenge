import FilterMobile from "../molecules/FilterMobile";
import FilterDesktop from "../molecules/FilterDesktop";

const Filter: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-4 mt-8 mb-12">
      <div className="flex place-self-start lg:hidden ml-8">
        <FilterMobile />
      </div>

      <div className="hidden lg:flex">
        <FilterDesktop />
      </div>
    </section>
  );
};

export default Filter;
