import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export interface ISample {
  id?: string;
  title: string;
  description: string;
  techs: string[];
  imagePath: string;
  link: string;
  isResponsive: boolean;
}

export default function Sample({
  title,
  imagePath,
  description,
  techs,
  link,
  isResponsive,
}: ISample) {
  return (
    <div className="flex w-full flex-col rounded-lg bg-[var(--project-bg)] p-4">
      <h3 className="p-2 text-xl font-bold">
        {title}
        <span className="pl-2 text-base font-normal">
          {isResponsive ? "Responsive" : "Desktop only"}
        </span>
      </h3>
      <div className="mx-auto max-w-96">
        <Image
          src={imagePath}
          alt={title}
          width={800}
          height={800}
          className="mx-auto pt-8"
        />
      </div>

      <div className="flex grow flex-col justify-between p-2">
        <div>
          <p className="mb-2 border-t border-[var(--cm-700)] py-2 text-lg">
            {description}
          </p>

          <div className="my-4 border-t border-[var(--cm-700)] py-2">
            <h4 className="my-2 w-fit rounded-full bg-[var(--project-link)] px-2 text-lg font-thin">
              Built with
            </h4>
            <ul className="flex list-inside list-disc flex-wrap pl-1">
              {techs.map((tech, i) => (
                <li key={i} className="w-1/2 font-thin tracking-wider">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link
          target="_blank"
          href={link}
          className="group mx-auto flex w-full items-center justify-center gap-2 rounded-full bg-[var(--project-link)] px-6 py-2 transition-all hover:scale-95 hover:opacity-85 active:translate-y-1 active:scale-90"
        >
          <span>Live link</span>
          <FaArrowRightLong className="transition-all group-hover:translate-x-2" />
        </Link>
      </div>
    </div>
  );
}
