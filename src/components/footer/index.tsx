import { type ReactNode } from "react";
import Link from "next/link";
import { FaLink } from "react-icons/fa6";
import { RxExternalLink } from "react-icons/rx";

import FooterWrapper from "./FooterWrapper";
import { socialMedia, techs, pages } from "@/data/common-data.json";

interface LinkListProps {
  listName: string;
  list: { name: string; url?: string; path?: string }[];
  extraClass?: string;
  icon?: ReactNode;
}

function LinkList({
  list,
  listName,
  extraClass = "",
  icon = null,
}: LinkListProps) {
  return (
    <div className="flex-grow md:mb-6 lg:max-w-96">
      <h4 className="mb-4 border-b border-[var(--color-main-800)] pb-1 text-base font-bold">
        {listName}
      </h4>
      <ul className="pl-3">
        {list.map((item, i) => (
          <li
            key={i}
            className={`mb-4 w-fit text-xl font-thin transition-all duration-300 hover:translate-x-2 hover:scale-105 ${extraClass}`}
          >
            <Link href={item.url || item.path || ""}>
              {item.name}
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <FooterWrapper>
      <LinkList
        list={socialMedia}
        listName="Connect"
        icon={<FaLink className="ml-1 inline" />}
      />

      <LinkList
        list={pages}
        listName="Explore"
        extraClass="border-[var(--color-main-800)] hover:border-b"
      />

      <LinkList
        list={techs}
        listName="Powered By"
        icon={<RxExternalLink className="ml-1 inline" />}
      />

      <span className="absolute bottom-2 left-4 text-xs">
        Copyright &copy; {new Date().getFullYear()} — Zana Abdollahpour
      </span>
    </FooterWrapper>
  );
}
