"use client";

import Link from "next/link";
import NavLogo from "@/public/assets/icons/logo.svg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 backdrop-blur-sm z-50 w-full h-12 flex flex-col items-center justify-center p-1">
      <Link
        href="/"
        className="flex items-center hover:text-neutral-800 focus:text-neutral-800 dark:hocus:text-white dark:focus:text-whit dark:text-white text-neutral-800"
        aria-label="Back to home"
        tabIndex={0}
      >
        <NavLogo width={140} />
      </Link>
    </nav>
  );
};

export { Navbar };
