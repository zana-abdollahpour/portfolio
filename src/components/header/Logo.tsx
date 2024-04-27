import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="w-fit cursor-pointer rounded-full p-2 transition-all duration-300 hover:scale-110 active:translate-y-1 active:scale-90"
    >
      <Image
        className="transition-all duration-700"
        src="logo.svg"
        alt="logo"
        width={44}
        height={44}
      />
    </Link>
  );
}
