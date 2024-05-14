import { Suspense } from "react";
import Link from "next/link";

import Experience from "@/components/experience";
import MusicPlayer from "@/components/musicPlayer";

export default function HomePage() {
  return (
    <main>
      <div className="absolute left-1/2 top-0 z-10 mx-auto flex h-screen max-h-[67.5rem] w-fit -translate-x-1/2 flex-col items-center justify-between">
        <div className="text-center text-[var(--text-main)]">
          <h1 className="mb-6 mt-20">
            <span className="block text-9xl">Zana</span>
            <span className="text-5xl">Abdollahpour</span>
          </h1>
          <h2 className="text-xl">Frontend Developer | Designer</h2>
        </div>

        <MusicPlayer />

        <div className="mb-12 flex w-full justify-center gap-4 text-lg">
          <Link
            href="/about"
            className="rounded-full bg-[var(--btn-bg)] px-10 py-2 text-[var(--btn-text)] transition-all duration-300 hover:scale-105 active:translate-y-1 active:scale-95"
          >
            About
          </Link>

          <Link
            href="/portfolio"
            className="inline-block rounded-full border border-[var(--btn-bg)] bg-white/10 px-10 py-2 text-[var(--btn-bg)] transition-all duration-300 hover:scale-105 active:translate-y-1 active:scale-95"
          >
            Portfolio
          </Link>
        </div>
      </div>

      <Suspense>
        <Experience />
      </Suspense>
    </main>
  );
}
