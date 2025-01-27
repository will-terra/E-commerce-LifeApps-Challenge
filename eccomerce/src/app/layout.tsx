import type { Metadata } from "next";
import "./globals.css";
import { AppContextProvider } from "@/contexts/AppProvider";
import Header from "@/components/atoms/Header";
import NavBar from "@/components/organisms/NavBar";

export const metadata: Metadata = {
  title: "NEISH",
  description: "Plataforma de vendas de roupas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="global-html">
      <AppContextProvider>
        <body>
          <Header />
          <NavBar />
          <div className="Root">{children}</div>
        </body>
      </AppContextProvider>
    </html>
  );
}
