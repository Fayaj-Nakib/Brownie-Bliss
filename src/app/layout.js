import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CartProvider } from "../lib/cart";
import "../app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Brownie Bliss - Indulge in a Bite of Pure Delight",
  description: "Delicious brownies and treats for every occasion. Pre-order now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-cream text-dark-choco`}>
        <CartProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}