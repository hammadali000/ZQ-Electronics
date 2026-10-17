import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import { CartProvider } from "@/component/CartContext";

export const metadata = {
  title: "ZQ Electronics",
  description: "Quality electronics and home appliances on easy installments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}