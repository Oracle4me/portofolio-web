import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";
import ActiveSectionContextProvider from "@/components/section-active-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portofolio | Nur Muhammad Kevin",
  description: "Personal Info",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-black text-slate-300 h-fit px-4 relative`}>
        <div className="bg-slate-800 absolute top-[-6rem] right-[2rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[15rem] sm:w-[68.75rem]"></div>
        <div className="bg-slate-800 absolute top-[40rem] right-[10rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[15rem] sm:w-[48.75rem]"></div>
        <div className="bg-slate-900 absolute top-[90rem] right-[10rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[15rem] sm:w-[68.75rem]"></div>
        {/* <div className="bg-slate-800 absolute top-[120rem] left-[1rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[15rem] sm:w-[38.75rem]"></div> */}
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
          <Toaster position="bottom-center" reverseOrder={false} />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
