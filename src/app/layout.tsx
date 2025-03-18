import type { Metadata } from "next";

import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

import ClientProvider from "@/components/templates/ClientProvider";
import Header from "@/components/atoms/Header";
import Footer from "@/components/molecules/Footer";
import NavBar from "@/components/organisms/NavBar";


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
      <ClientProvider>
        <AppContextProvider>
          <body className="h-[100dvh] flex flex-col bg-gray-100">
            <Header />
            <div className="sticky top-0 z-50">
              <NavBar />
            </div>
            <div className="Root flex-grow">
              {children} <SpeedInsights />
            </div>
            <Footer />
          </body>
        </AppContextProvider>
      </ClientProvider>
    </html>
  );
}
