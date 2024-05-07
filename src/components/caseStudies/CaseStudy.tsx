import Image from "next/image";
import Link from "next/link";

import Credentials from "./Credentails";
import MainTechs from "./MainTechs";

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
  return (
    <div className="flex flex-col gap-8 rounded-lg bg-[var(--project-bg)]">
      <div className="flex flex-col">
        <h3 className="-mb-2 p-2 text-2xl font-thin tracking-wide">{title}</h3>
        <span className="mb-6 p-2 text-sm">
          {isResponsive ? "Responsive" : "Desktop Only"}
        </span>
        <div className="justify-centerpy-10 mb-8 flex items-center px-8">
          <Image
            className="w-full rounded-md"
            src={imagePath}
            width={800}
            height={800}
            alt={title}
          />
        </div>
        <Link
          target="_blank"
          href={link}
          className="mx-auto w-10/12 max-w-96 rounded-full bg-[var(--project-link)] px-6 py-2 text-center text-xl transition-all hover:scale-95 hover:opacity-85 active:translate-y-1 active:scale-90 xl:w-11/12"
        >
          Visit
        </Link>
        <div className="my-8 ml-2 flex flex-col gap-2 border-l pl-4">
          <h5 className="text-xl font-bold">Credentials</h5>
          <Credentials credentials={credentials} />
        </div>
      </div>

      <div className="w-full p-2">
        <div className="mb-6 rounded-xl border p-2">
          <p className="my-4">{description}</p>
          <p className="mb-4 max-w-96">
            Click on each Technology to read why it&apos;s chosen for the
            project and what problem it solves.
          </p>
        </div>
        <MainTechs mainTechs={mainTechs} />
        <hr className="bg-inherit" />
        <h4 className="my-2 ml-2 font-bold">More Dependencies</h4>
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
