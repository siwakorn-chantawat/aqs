"use client";

import { links } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="z-50">
      <nav className="flex fixed justify-center items-center p-5 sm:px-10 sm:py-8 w-full ">
        <ul className="flex h-12 items-center justify-center px-2 text-sm bg-[#e8e5e480] rounded-full backdrop-blur-md">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`px-4 py-3 rounded-full sm:px-6 ${
                  link.path === pathname ? "bg-white" : undefined
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
