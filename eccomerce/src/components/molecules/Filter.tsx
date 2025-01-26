"use client";
import MainButton from "../atoms/Button";
import { Radio, RadioGroup } from "@base-ui-components/react";
import { useAppContext } from "@/contexts/AppProvider";

const Filter = () => {
  const { selectedValue, setSelectedValue } = useAppContext();
  return (
    <section className="flex flex-col justify-center items-center gap-4 mt-8 mb-12">
      <h1 className="place-self-start ml-8 text-3xl font-bold">
        Veja nossa nova coleção verão 2025:
      </h1>
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
    </section>
  );
};

export default Filter;
