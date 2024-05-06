import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaTelegram,
  FaRegEnvelope,
  FaLinkedinIn,
} from "react-icons/fa6";

import { skillSet1, skillSet2 } from "@/data/about-data.json";

const socialMedia = [
  {
    icon: FaTelegram,
    url: "https://t.me/LiGht_Z",
  },
  {
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/zana-abdollahpour",
  },
  {
    icon: FaGithub,
    url: "https://github.com/zana-abdollahpour",
  },
  {
    icon: FaRegEnvelope,
    url: "mailto:zana.ap4@gmail.com",
  },
];

export default function AboutPage() {
  return (
    <div className="mt-4 w-full p-8">
      <h1 className="pb-6 text-4xl font-medium">About</h1>
      <main className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-3 lg:grid-cols-4 lg:gap-5">
        <div className="flex flex-col gap-4 rounded-lg bg-[var(--card-bg)] p-4 md:p-8 lg:col-span-2 lg:p-12">
          <div className="mx-auto mb-4 w-64 overflow-hidden rounded-full bg-[var(--portrait-bg)] xl:mx-0">
            <Image
              src="/zana-ap.png"
              width={400}
              height={400}
              alt="Zana Abdollahpour"
              className="w-full"
            />
          </div>
          <h2 className="text-3xl">
            Hey there, I&apos;m <span className="font-bold">Zana</span>
          </h2>
          <hr className="border border-[var(--color-main-800)]" />
          <p className="text-xl">
            a developer/designer who&apos;s passionate about crafting
            outstanding digital experiences and awesome websites.
          </p>
        </div>

        <div className="rounded-lg bg-[var(--card-bg)] p-4 md:p-8 lg:col-span-2 lg:p-12">
          <h3 className="py-2 text-2xl font-bold">Some of my skills</h3>
          <hr className="mb-4 border border-[var(--color-main-800)]" />
          <div className="flex justify-between">
            <ul className="w-1/2 list-inside list-disc">
              {skillSet1.map((skill, i) => (
                <li className="sm:mb-3" key={i}>
                  {skill}
                </li>
              ))}
            </ul>
            <ul className="w-1/2 list-inside list-disc">
              {skillSet2.map((skill, i) => (
                <li className="sm:mb-3" key={i}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <article className="rounded-lg bg-[var(--card-bg)] p-4 md:col-span-2 md:p-8 lg:col-span-3 lg:p-12">
          <h3 className="py-2 text-2xl font-bold">A short Bio</h3>
          <hr className="mb-4 border border-[var(--color-main-800)]" />
          <div className="flex flex-col gap-8 text-justify md:flex-row">
            <p className="md:leading-7">
              My story goes back to when I was 10, when my uncle&apos;s PC was
              the main victim of my scientific experiments which always would
              end up in breaking or deleting stuff! This passion brought me to
              the field of computer hardware and repairs, which to this day I
              love and do as a hobby from time to time. however this isn&apos;t
              the only field that intrigued me, and there is more to this story.
            </p>
            <p className="md:leading-7">
              My development journey however, started in 2017 with C++ in
              college, which fascinated me by the way programmers think and
              solve problems. After that I became interested in web development
              and started learning HTML, CSS and JavaScript. Later I learned
              other languages like Python, Go and Rust, and did Backend
              development using Node.js. You could say I&apos;m a full-stack
              developer with focus on front-end. Beside the computer and
              technology, I also studied engineering and Management (MBA).
            </p>
          </div>
        </article>

        <div className="rounded-lg bg-[var(--card-bg)] p-4 md:col-span-2 md:p-8 lg:col-span-1 lg:p-12">
          <h3 className="py-2 text-2xl font-bold">Contact</h3>
          <hr className="mb-4 border border-[var(--color-main-800)]" />
          <div className="mx-auto flex max-w-96 justify-around lg:flex-wrap lg:justify-between xl:justify-around">
            {socialMedia.map((medium, i) => (
              <Link key={i} href={medium.url}>
                <medium.icon className="xl: xl: h-8 w-8 fill-[var(--icons-fill)] transition-all duration-300 hover:scale-110 hover:brightness-50 lg:mx-2 lg:my-4 lg:h-10 lg:w-10 xl:mx-6 xl:my-6 xl:h-12 xl:w-12" />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
