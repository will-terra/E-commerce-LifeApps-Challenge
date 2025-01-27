import type { Metadata } from "next";
import "./globals.css";
import { AppContextProvider } from "@/contexts/AppProvider";
import Header from "@/components/atoms/Header";
import NavBar from "@/components/organisms/NavBar";
import Footer from "@/components/molecules/Footer";

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
        <body className="h-screen">
          <div className="flex flex-col justify-between h-full bg-gray-100 ">
            <div>
              <Header />
              <NavBar />
              <div className="Root">{children}</div>{" "}
            </div>
            <footer className="sticky bottom-0">
              <Footer />
            </footer>
          </div>
        </body>
      </AppContextProvider>
    </html>
  );
}
