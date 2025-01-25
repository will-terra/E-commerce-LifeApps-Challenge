"use client";
import { Input } from "@base-ui-components/react";

const SearchInput = () => {
  return (
    <Input
      placeholder="Busque por nossos produtos"
      className={
        "h-10 py-auto px-2 mx-2 w-[20rem] rounded-md border border-gray-300"
      }
    />
  );
};

export default SearchInput;
