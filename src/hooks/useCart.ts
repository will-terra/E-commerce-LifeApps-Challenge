import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";

export const useCartDispatch = () => useDispatch<AppDispatch>();
export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;