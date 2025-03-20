import { Menu } from "@base-ui-components/react";

import AssistButton from "../atoms/AssistButton";

import { usePaginationSelector, usePaginationDispatch } from "@/hooks/usePagination";
import { fetchPaginatedProducts, setSelectedValue } from "@/slices/paginationSlice";

const FilterMobile: React.FC = () => {
  const { currentPage, selectedValue } = usePaginationSelector((state) => state.pagination);
  const dispatch = usePaginationDispatch();
  const handleValueChange = (selectedValue: string) => {
    dispatch(setSelectedValue(selectedValue));
    dispatch(fetchPaginatedProducts({ page: currentPage, category: selectedValue }));
  };
  return (
    <Menu.Root>
      <Menu.Trigger>
        <AssistButton
          ariaLabel="Aplique filtros aos produtos"
          size="large"
          variant="black"
        >
          Filtros
        </AssistButton>
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
              onValueChange={handleValueChange}
            >
              <Menu.RadioItem value="" closeOnClick>
                <AssistButton
                  ariaLabel="Navegar por todos os produtos"
                  variant={selectedValue === "" ? "white" : "black"}
                  size="large"
                >
                  Ver todos
                </AssistButton>
              </Menu.RadioItem>
              <Menu.RadioItem value="Camisetas" closeOnClick>
                <AssistButton
                  ariaLabel="Filtrar para apenas camisetas"
                  variant={selectedValue === "Camisetas" ? "white" : "black"}
                  size="large"
                >
                  Camisetas
                </AssistButton>
              </Menu.RadioItem>
              <Menu.RadioItem value="Calças" closeOnClick>
                <AssistButton
                  ariaLabel="Filtrar para apenas calças"
                  variant={selectedValue === "Calças" ? "white" : "black"}
                  size="large"
                >
                  Calças
                </AssistButton>
              </Menu.RadioItem>
              <Menu.RadioItem value="Tênis" closeOnClick>
                <AssistButton
                  ariaLabel="Filtrar para apenas tênis"
                  variant={selectedValue === "Tênis" ? "white" : "black"}
                  size="large"
                >
                  Tênis
                </AssistButton>
              </Menu.RadioItem>
            </Menu.RadioGroup>{" "}
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
};

export default FilterMobile;
