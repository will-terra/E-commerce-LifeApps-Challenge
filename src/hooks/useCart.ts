import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";

export const useCartDispatch = useDispatch.withTypes<AppDispatch>()
export const useCartSelector = useSelector.withTypes<RootState>()