import Logo from "./Logo";
import DarkModeButton from "./DarkModeButton";
import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header className="container fixed left-1/2 top-0 !z-50 mx-auto flex -translate-x-1/2 items-center justify-between border-b border-[var(--header-toggle)] bg-transparent p-2 shadow-sm backdrop-blur">
      <Logo />
      <div className="flex items-center gap-4">
        <DarkModeButton />
        <NavLinks />
      </div>
    </header>
  );
}
