"use client";

import Overlay from "@/components/general/Overlay";
import { MouseEvent, useState } from "react";
import MobileMenuButton from "./MobileMenuButton";
import UserMenu from "./UserMenu";
import Link from "next/link";

export default function MobileMenu({ links }: { links: { href: string; content: string }[] }) {
  const [isOpen, setIsOpen] = useState(false);

  const activeMenuStyles = "-translate-x-full";

  function handleClick<T = HTMLButtonElement>(evt: MouseEvent<T>) {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <MobileMenuButton onClick={handleClick} active={isOpen} />
      <Overlay active={isOpen} onClick={handleClick} />
      <div
        className={`fixed top-0 left-full w-64 h-screen bg-white transition-transform duration-300 ease-in-out z-[90] py-16 px-4 ${
          isOpen && activeMenuStyles
        }`}
      >
        <UserMenu />
        <ul className="mt-8">
          {links.map((link, idx) => (
            <li className="" key={`${link.href}-${idx}`}>
              <Link className="p-3 w-full block rounded-md transition-all hover:bg-gray-100" href={link.href}>
                {link.content}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
