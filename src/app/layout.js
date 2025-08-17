import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Inter, Shantell_Sans } from "next/font/google";

import "@/styles/main.scss";

// Dvariables for fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const shantell = Shantell_Sans({
  subsets: ["latin"],
  variable: "--font-shantell",
});

export const metadata = {
  title: "| Manish Kumar",
  description: "A portfolio website for Manish Kumar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${shantell.variable}`}>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
