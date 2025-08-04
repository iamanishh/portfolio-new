import Footer from "@/components/layout/Footer";
// import Navbar from "@/components/layout/Navbar";
import { Inter } from "next/font/google";

import "@/styles/main.scss";
// import SmoothScrollWrapper from "@/components/SmoothScrollWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "| Manish Kumar",
  description: "A portfolio website for Manish Kumar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
