import Image from "next/image";
import Link from "next/link";
import { HiChevronDoubleDown } from "react-icons/hi2";

import Credentials from "./Credentails";

export interface ICaseStudy {
  id?: number;
  title: string;
  isResponsive: boolean;
  description: string;
  link: string;
  imagePath: string;
  mainTechs: string[][];
  misc: string[];
  credentials: string[];
}

export default function CaseStudy({
  title,
  imagePath,
  link,
  isResponsive,
  description,
  mainTechs,
  misc,
  credentials = [],
}: ICaseStudy) {
  // const handleExplanationToggle = (e: MouseEventHandler<HTMLDivElement>) => {
  //   const ExplanationParagraph = e.currentTarget.nextElementSibling;
  //   const ExplanationIcon = e.currentTarget.lastChild;
  //   ExplanationParagraph.classList.toggle("pointer-events-auto");
  //   ExplanationParagraph.classList.toggle("pointer-events-none");
  //   ExplanationParagraph.classList.toggle("scale-y-0");
  //   ExplanationParagraph.classList.toggle("opacity-0");
  //   ExplanationParagraph.classList.toggle("opacity-100");
  //   ExplanationParagraph.classList.toggle("h-0");
  //   ExplanationIcon.classList.toggle("-rotate-180");
  // };

  return (
    <div className="flex flex-col gap-8 rounded-lg bg-[var(--project-bg)]">
      <div className="flex flex-col">
        <h3 className="p-2 text-2xl font-thin tracking-wide">{title}</h3>
        <span className="mb-6 p-2 text-sm">
          {isResponsive ? "Responsive" : "Desktop Only"}
        </span>
        <div className="justify-centerpy-10 mb-8 flex items-center px-8">
          <Image
            className="w-full rounded-2xl"
            src={imagePath}
            width={800}
            height={800}
            alt={title}
          />
        </div>
        <Link
          target="_blank"
          href={link}
          className="mx-auto w-11/12 max-w-96 rounded-full bg-[var(--project-link)] px-6 py-2 text-center text-xl transition-all hover:scale-95 hover:opacity-85 active:translate-y-1 active:scale-90"
        >
          Visit
        </Link>
      </div>
      <div className="w-full p-2">
        <div className="mb-6 rounded-xl border p-2">
          <p className="my-4">{description}</p>
          <p className="mb-4 max-w-96">
            Click on each Technology to read why it&apos;s chosen for the
            project and what problem it solves.
          </p>
        </div>
        <ul>
          {mainTechs.map((tech, i) => (
            <li key={i} className="relative mb-8 pl-2">
              <div
                // onClick={handleExplanationToggle}
                className="relative mb-2 flex w-fit origin-left cursor-pointer items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <h4 className="font-bold">{tech.at(0)}</h4>
                <HiChevronDoubleDown className="mt-1 fill-orange-700 transition-all duration-300" />
              </div>
              <p className="pointer-events-none relative h-0 origin-top scale-y-0 overflow-hidden border-l pl-2 opacity-0 transition-all duration-300">
                {tech.at(1)}
              </p>
            </li>
          ))}
        </ul>
        <hr className="bg-inherit" />
        <h4 className="mb-2 ml-2 font-bold">More Dependencies</h4>
        <ul className="my-4">
          {misc.map((item, i) => (
            <li key={i} className="ml-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
