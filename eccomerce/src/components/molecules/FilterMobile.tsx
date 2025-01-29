import { Menu } from "@base-ui-components/react";

import MainButton from "../atoms/MainButton";

import { useAppContext } from "@/contexts/AppProvider";

const FilterMobile: React.FC = () => {
  const { selectedValue, setSelectedValue } = useAppContext();

  return (
    <Menu.Root>
      <Menu.Trigger>
        <MainButton
          ariaLabel="Aplique filtros aos produtos"
          size="large"
          variant="black"
        >
          Filtros
        </MainButton>
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner
          className={"bg-gray-200 max-w-[10rem] rounded-md"}
          sideOffset={8}
        >
          <Menu.Popup>
            <Menu.RadioGroup
              className={"flex flex-col gap-5 mt-2 mb-4 mx-4"}
              value={selectedValue}
              onValueChange={(value) => setSelectedValue(value as string)}
            >
              <Menu.RadioItem value="" closeOnClick>
                <MainButton
                  ariaLabel="Navegar por todos os produtos"
                  variant={selectedValue === "" ? "white" : "black"}
                  size="large"
                >
                  Ver todos
                </MainButton>
              </Menu.RadioItem>
              <Menu.RadioItem value="Camisetas" closeOnClick>
                <MainButton
                  ariaLabel="Filtrar para apenas camisetas"
                  variant={selectedValue === "Camisetas" ? "white" : "black"}
                  size="large"
                >
                  Camisetas
                </MainButton>
              </Menu.RadioItem>
              <Menu.RadioItem value="Calças" closeOnClick>
                <MainButton
                  ariaLabel="Filtrar para apenas calças"
                  variant={selectedValue === "Calças" ? "white" : "black"}
                  size="large"
                >
                  Calças
                </MainButton>
              </Menu.RadioItem>
              <Menu.RadioItem value="Tênis" closeOnClick>
                <MainButton
                  ariaLabel="Filtrar para apenas tênis"
                  variant={selectedValue === "Tênis" ? "white" : "black"}
                  size="large"
                >
                  Tênis
                </MainButton>
              </Menu.RadioItem>
            </Menu.RadioGroup>{" "}
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
};

export default FilterMobile;
