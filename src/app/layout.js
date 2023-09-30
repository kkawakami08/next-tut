import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { ThemeProvider } from "../context/ThemeContext";
import AuthProvider from "@/components/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My App",
  description: "Learning Next",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="min-h-screen">
      <body className={`${inter.className} h-full  `}>
        <ThemeProvider>
          <AuthProvider>
            <Navbar />
            {children}
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
