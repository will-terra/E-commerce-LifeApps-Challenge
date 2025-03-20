import { RootState } from "@/store";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useProductsSelector: TypedUseSelectorHook<RootState> = useSelector;