import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/CartContext";
import { ShopProvider } from "@/components/ShopContext";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-vazirmatn",
  display: "swap",
});



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        <ShopProvider>
          <CartProvider>{children}</CartProvider>
        </ShopProvider>
      </body>
    </html>
  );
}
