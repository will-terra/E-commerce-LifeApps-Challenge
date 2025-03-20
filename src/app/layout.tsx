import type { Metadata } from "next";

import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

import ClientProvider from "@/components/templates/ClientProvider";
import Header from "@/components/atoms/Header";
import Footer from "@/components/molecules/Footer";
import NavBar from "@/components/organisms/NavBar";

export const metadata: Metadata = {
  title: "NEISH",
  description: "Plataforma de vendas de roupas",
  other: {
    'scroll-restoration': 'true',
    'cache-control': 'no-cache, must-revalidate, post-check=0, pre-check=0',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="global-html" style={{ scrollBehavior: 'auto' }}>
      <head>
        <link rel="preconnect" href="https://api-prova-frontend.solucoeslifeapps.com.br" />
        <link rel="preconnect" href="https://va.vercel-scripts.com" />
      </head>
      <body className="h-full flex flex-col bg-gray-100">
        <ClientProvider>
          <Header />
          <div className="sticky top-0 z-50">
            <NavBar />
          </div>
          <div className="Root h-full">
            {children} <SpeedInsights />
          </div>
          <Footer />
        </ClientProvider>
      </body>
    </html>
  );
}
