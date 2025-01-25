import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        <div className="Root">{children}</div>
      </body>
    </html>
  );
}
