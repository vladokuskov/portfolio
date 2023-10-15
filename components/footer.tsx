"use client";

import { ThemeSwitcher } from "./themeSwitcher";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center gap-2 mt-12 mb-4">
      <ThemeSwitcher />
    </footer>
  );
};

export { Footer };
