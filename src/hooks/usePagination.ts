import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { AppDispatch } from "@/store";

export const usePaginationDispatch = () => useDispatch<AppDispatch>();
export const usePaginationSelector: TypedUseSelectorHook<RootState> = useSelector;