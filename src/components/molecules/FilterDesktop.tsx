import { Radio, RadioGroup } from "@base-ui-components/react";

import AssistButton from "../atoms/AssistButton";

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
        <AssistButton
          ariaLabel="Navegar por todos os produtos"
          variant={selectedValue === "" ? "white" : "black"}
          size="large"
        >
          Ver todos
        </AssistButton>
      </Radio.Root>
      <Radio.Root value="Camisetas">
        <AssistButton
          ariaLabel="Filtrar para apenas camisetas"
          variant={selectedValue === "Camisetas" ? "white" : "black"}
          size="large"
        >
          Camisetas
        </AssistButton>
      </Radio.Root>
      <Radio.Root value="Calças">
        <AssistButton
          ariaLabel="Filtrar para apenas calças"
          variant={selectedValue === "Calças" ? "white" : "black"}
          size="large"
        >
          Calças
        </AssistButton>
      </Radio.Root>
      <Radio.Root value="Tênis">
        <AssistButton
          ariaLabel="Filtrar para apenas tênis"
          variant={selectedValue === "Tênis" ? "white" : "black"}
          size="large"
        >
          Tênis
        </AssistButton>
      </Radio.Root>
    </RadioGroup>
  );
};

export default FilterDesktop;
