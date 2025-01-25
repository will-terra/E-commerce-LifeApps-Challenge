import type { Metadata } from "next";
import "./globals.css";
import { AppContextProvider } from "@/contexts/AppProvider";

export const metadata: Metadata = {
  title: "Neish",
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
          <div className="Root">{children}</div>
        </body>
      </AppContextProvider>
    </html>
  );
}
