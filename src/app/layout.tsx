import type { Metadata } from "next";
import "./globals.css";

import { DarkModeProvider } from "@/contexts/DarkModeProvider";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Zana Abdollahpour",
  description: "Frontend Developer & Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <DarkModeProvider>
        <body>
          <Header />
          <div className="container mx-auto">{children}</div>
        </body>
      </DarkModeProvider>
    </html>
  );
}
