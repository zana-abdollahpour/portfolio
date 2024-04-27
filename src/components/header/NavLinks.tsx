"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type DispatchWithoutAction, useEffect, useState } from "react";

/* MenuButton */
interface MenuButtonProps {
  navIsOpen: boolean;
  onOpenNav: DispatchWithoutAction;
}

function MenuButton({ navIsOpen, onOpenNav }: MenuButtonProps) {
  return (
    <div
      className={`z-20 hover:cursor-pointer sm:hidden`}
      onClick={() => onOpenNav()}
    >
      <div
        className={`m-1 h-1 w-6 rounded-sm bg-blue-400 transition-all duration-700 ${
          navIsOpen ? "translate-y-2 rotate-45" : ""
        }`}
      />
      <div
        className={`m-1 h-1 w-6 origin-center rounded-sm bg-blue-400 transition-all duration-700 ${
          navIsOpen ? "scale-0" : ""
        }`}
      />
      <div
        className={`m-1 h-1 w-6 rounded-sm bg-blue-400 transition-all duration-700 ${
          navIsOpen ? "-translate-y-2 -rotate-45" : ""
        }`}
      />
    </div>
  );
}

/* MobileNav */
type MobileNavProps = MenuButtonProps & {
  pages: { name: string; path: string }[];
  currentPath: string;
};

function MobileNav({
  navIsOpen,
  onOpenNav,
  pages,
  currentPath,
}: MobileNavProps) {
  return (
    <nav
      className={`absolute right-0 top-0 h-screen overflow-hidden bg-[var(--nav-menu-bg)] transition-all duration-500 ease-in sm:hidden ${
        navIsOpen
          ? "pointer-events-auto w-screen opacity-[0.98]"
          : "pointer-events-none w-0 opacity-0"
      }`}
    >
      <ul className="flex flex-col items-center justify-center gap-12 pt-32 text-[var(--nav-link)]">
        {pages.map((page) => (
          <li
            key={page.name}
            onClick={() =>
              setTimeout(() => {
                onOpenNav();
              }, 500)
            }
            className={`text-xl transition-all ${
              page.path === currentPath
                ? "animate-emerge font-bold underline underline-offset-8"
                : "font-thin"
            }`}
          >
            <Link href={page.path}>{page.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* DesktopNav */
type DesktopNavProps = Pick<MobileNavProps, "pages" | "currentPath">;

function DesktopNav({ pages, currentPath }: DesktopNavProps) {
  return (
    <nav className="ml-4 hidden sm:block">
      <ul className="flex items-center justify-center gap-6 text-lg text-[var(--nav-link)]">
        {pages.map((page) => (
          <li
            key={page.name}
            className={`transition-all duration-300 hover:scale-110 hover:opacity-100 active:opacity-25 ${
              page.path === currentPath ? "scale-105" : "opacity-50"
            }`}
          >
            <Link href={page.path} className="p-1">
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* NavLinks - Main Component */
export default function NavLinks() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const currentPath = usePathname();

  useEffect(() => {
    const body = document.body;
    navIsOpen
      ? body.classList.add("overflow-hidden")
      : body.classList.remove("overflow-hidden");
  }, [navIsOpen]);

  const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  return (
    <>
      <MenuButton
        navIsOpen={navIsOpen}
        onOpenNav={() => setNavIsOpen((cur) => !cur)}
      />

      <MobileNav
        navIsOpen={navIsOpen}
        onOpenNav={() => setNavIsOpen((cur) => !cur)}
        pages={pages}
        currentPath={currentPath}
      />

      <DesktopNav pages={pages} currentPath={currentPath} />
    </>
  );
}
