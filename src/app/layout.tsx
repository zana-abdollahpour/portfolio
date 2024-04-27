import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

import { DarkModeProvider } from "@/contexts/DarkModeProvider";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Zana Abdollahpour",
  description: "Frontend Developer & Designer",
};

const quicksand = Quicksand({ subsets: ["latin"], display: "swap" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <DarkModeProvider>
        <body className={quicksand.className}>
          <Header />
          <div className="container mx-auto">{children}</div>
        </body>
      </DarkModeProvider>
    </html>
  );
}
