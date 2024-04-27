import type { Metadata } from "next";
import "./globals.css";

import { DarkModeProvider } from "@/contexts/DarkModeProvider";

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
          <div className="container mx-auto">{children}</div>
        </body>
      </DarkModeProvider>
    </html>
  );
}
