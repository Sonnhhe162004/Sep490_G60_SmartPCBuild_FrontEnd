'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import { Footer, Header, Navigation } from "./_components";
import { BackToTop } from "@/components/_personal";
import { Toaster } from "@/components/ui/sonner";
import React, { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  const [searchValue, setSearchValue] = useState('');
 

  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Header setSearchValue={setSearchValue} />
          <Navigation />
         
          {React.Children.map(children, child => {
          return React.cloneElement(child, { searchValue: searchValue });
        })}
         
          <Toaster />
          <Footer />
          <BackToTop />
        </StoreProvider>
      </body>
    </html>
  );
}
