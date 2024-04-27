import Logo from "./Logo";
import DarkModeButton from "./DarkModeButton";

export default function Header() {
  return (
    <header className="container mx-auto flex items-center justify-between bg-red-600 p-2">
      <Logo />
      <div className="flex gap-4">
        <DarkModeButton />
        <div>MENU</div>
      </div>
    </header>
  );
}
