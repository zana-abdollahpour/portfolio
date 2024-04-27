import Logo from "./Logo";
import DarkModeButton from "./DarkModeButton";
import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header className="container mx-auto flex items-center justify-between border-b border-[var(--header-toggle)] bg-[var(--header-bg)] p-2">
      <Logo />
      <div className="flex items-center gap-4">
        <DarkModeButton />
        <NavLinks />
      </div>
    </header>
  );
}
