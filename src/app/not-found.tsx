import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto mt-4 w-fit p-8">
      <h1 className="mb-6 text-xl md:mb-8 md:text-2xl lg:text-4xl">
        Sorry, this page doesn&apos;t exist :(
      </h1>
      <Link
        href="/"
        className="inline-block rounded-full bg-[var(--home-btn-bg)] px-6 py-3 text-base font-thin transition-all duration-300 hover:scale-95 active:translate-y-1 md:text-xl"
      >
        &larr; Go back Home
      </Link>
    </div>
  );
}
