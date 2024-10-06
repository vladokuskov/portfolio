import dynamic from "next/dynamic";
import { cookies } from "next/headers";
import { ThemeSwitcher } from "../ui/themeSwitcher";

const Footer = () => {
  const theme = cookies().get("x-theme")?.value;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center justify-center gap-2 mt-12 mb-4 pb-2">
      <ThemeSwitcher theme={theme === "dark" ? "dark" : "light"} />
      <p className="font-poppins text-foreground/70 text-sm font-extralight tracking-wide">
        Vladyslav Okuskov &copy; {currentYear}
      </p>
    </footer>
  );
};

export { Footer };