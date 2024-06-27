'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import { Footer, Header, Navigation } from "./_components";
import { BackToTop } from "@/components/_personal";
import { Toaster } from "@/components/ui/sonner";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Header />
          <Navigation />
          {children}
          <Toaster />
          <Footer />
          <BackToTop />
        </StoreProvider>
      </body>
    </html>
  );
}
