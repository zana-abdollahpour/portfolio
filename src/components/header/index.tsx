import Logo from "./Logo";

export default function Header() {
  return (
    <header className="container mx-auto flex items-center justify-between bg-red-600 p-2">
      <Logo />
      <div className="flex gap-4">
        <div>DARKMODEBTN</div>
        <div>MENU</div>
      </div>
    </header>
  );
}
