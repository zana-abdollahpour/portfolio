"use client";

import { type MouseEvent } from "react";
import { HiChevronDoubleDown } from "react-icons/hi2";

export default function MainTechs({ mainTechs }: { mainTechs: string[][] }) {
  const handleExplanationToggle = (e: MouseEvent<HTMLDivElement>) => {
    const paragraph = e.currentTarget.nextSibling as HTMLParagraphElement;
    const icon = e.currentTarget.lastChild as HTMLElement;

    paragraph.classList.toggle("pointer-events-auto");
    paragraph.classList.toggle("pointer-events-none");
    paragraph.classList.toggle("scale-y-0");
    paragraph.classList.toggle("opacity-0");
    paragraph.classList.toggle("opacity-100");
    paragraph.classList.toggle("h-0");
    icon.classList.toggle("-rotate-180");
  };

  return (
    <>
      <ul>
        {mainTechs.map((tech, i) => (
          <li key={i} className="relative mb-8 pl-2">
            <div
              onClick={handleExplanationToggle}
              className="relative mb-2 flex w-fit origin-left cursor-pointer items-center justify-center gap-2 transition-all hover:scale-105"
            >
              <h4 className="font-bold">{tech[0]}</h4>
              <HiChevronDoubleDown className="mt-1 h-6 w-6 rounded-full bg-[var(--project-link)] fill-[var(--text-main)] p-1 transition-all duration-300" />
            </div>
            <p className="pointer-events-none relative h-0 origin-top scale-y-0 overflow-hidden border-l border-[var(--btn-bg)] pl-2 opacity-0 transition-all duration-300">
              {tech[1]}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
