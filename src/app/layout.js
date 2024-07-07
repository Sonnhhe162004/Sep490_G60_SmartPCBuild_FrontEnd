'use client'; 

import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import { Footer, Header, Navigation } from "./_components";
import { BackToTop } from "@/components/_personal";
import { Toaster } from "@/components/ui/sonner";
import { usePathname } from 'next/navigation';
import AdminLayout from './_components/AdminLayout/AdminLayout'; 

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname(); 
  const isAdmin = pathname.startsWith('/admin');
  if (isAdmin) {
    return (
      <html lang="en">
        <body className={inter.className}>
          <AdminLayout>
            {children}
          </AdminLayout>
        </body>
      </html>
    );
  }

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
