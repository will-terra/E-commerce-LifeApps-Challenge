import type { Metadata } from "next";

import "./globals.css";

import Header from "@/components/atoms/Header";
import NavBar from "@/components/organisms/NavBar";
import Footer from "@/components/molecules/Footer";

import { AppContextProvider } from "@/contexts/AppProvider";

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
      <body className="h-screen">
        <AppContextProvider>
          <div className="flex flex-col justify-between h-full bg-gray-100 ">
            <Header />
            <div className="sticky top-0 z-50">
              <NavBar />
            </div>
            <div className="Root">{children}</div> <Footer />
          </div>
        </AppContextProvider>
      </body>
    </html>
  );
}
