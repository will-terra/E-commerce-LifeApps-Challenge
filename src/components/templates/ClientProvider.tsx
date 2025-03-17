"use client";
import { Provider } from "react-redux";
import { store } from "@/app/store";

const ClientProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default ClientProvider;
