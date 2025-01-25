"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface AppContextProps {
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}

const AppContext = createContext<AppContextProps>({
  selectedValue: "Todos",
  setSelectedValue: () => {},
} as AppContextProps);

export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppContextProvider: React.FC<AppProviderProps> = ({
  children,
}) => {
  const [selectedValue, setSelectedValue] = useState<string>("Todos");

  return (
    <AppContext.Provider value={{ selectedValue, setSelectedValue }}>
      {children}
    </AppContext.Provider>
  );
};
