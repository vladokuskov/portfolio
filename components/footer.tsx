import dynamic from "next/dynamic";
import { cookies } from "next/headers";
import { ThemeSwitcher } from "./themeSwitcher";

const Footer = () => {
  const theme = cookies().get("x-theme")?.value;
  return (
    <footer className="flex items-center justify-center gap-2 mt-12 mb-4">
      <ThemeSwitcher theme={theme === "dark" ? "dark" : "light"} />
    </footer>
  );
};

export { Footer };
