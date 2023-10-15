"use client";

import Link from "next/link";
import NavLogo from "@/public/assets/icons/logo.svg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 backdrop-blur-sm z-50 w-full h-12 flex flex-col items-center justify-center p-1">
      <Link
        href="/"
        className="flex items-center text-foreground hover:text-foreground/90 focus:text-foreground/90"
        aria-label="Back to home"
        tabIndex={0}
      >
        <NavLogo width={140} />
      </Link>
    </nav>
  );
};

export { Navbar };
