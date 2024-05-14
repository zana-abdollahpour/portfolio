"use client";

import { usePathname } from "next/navigation";

export default function FooterWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  if (pathName !== "/about" && pathName !== "/portfolio") return null;

  return (
    <footer className="container relative mx-auto flex w-full flex-col justify-around gap-8 bg-[var(--footer-bg)] p-8 sm:flex-row">
      {children}
    </footer>
  );
}
