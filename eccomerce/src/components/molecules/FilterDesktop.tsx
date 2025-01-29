import { Radio, RadioGroup } from "@base-ui-components/react";

import MainButton from "../atoms/MainButton";

import { useAppContext } from "@/contexts/AppProvider";

const FilterDesktop: React.FC = () => {
  const { selectedValue, setSelectedValue } = useAppContext();

  return (
    <RadioGroup
      aria-label="Selecione um filtro para os produtos"
      name="filter"
      value={selectedValue}
      onValueChange={(value) => setSelectedValue(value as string)}
      className="flex gap-2"
    >
      <Radio.Root value="">
        <MainButton
          ariaLabel="Navegar por todos os produtos"
          variant={selectedValue === "" ? "white" : "black"}
          size="large"
        >
          Ver todos
        </MainButton>
      </Radio.Root>
      <Radio.Root value="Camisetas">
        <MainButton
          ariaLabel="Filtrar para apenas camisetas"
          variant={selectedValue === "Camisetas" ? "white" : "black"}
          size="large"
        >
          Camisetas
        </MainButton>
      </Radio.Root>
      <Radio.Root value="Calças">
        <MainButton
          ariaLabel="Filtrar para apenas calças"
          variant={selectedValue === "Calças" ? "white" : "black"}
          size="large"
        >
          Calças
        </MainButton>
      </Radio.Root>
      <Radio.Root value="Tênis">
        <MainButton
          ariaLabel="Filtrar para apenas tênis"
          variant={selectedValue === "Tênis" ? "white" : "black"}
          size="large"
        >
          Tênis
        </MainButton>
      </Radio.Root>
    </RadioGroup>
  );
};

export default FilterDesktop;
