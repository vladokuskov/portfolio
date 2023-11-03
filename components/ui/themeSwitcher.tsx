"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import SunIcon from "@/public/assets/icons/sun.svg";
import MoonIcon from "@/public/assets/icons/moon.svg";
import Icon from "./icon";

const ThemeSwitcher = ({ theme }: { theme: "light" | "dark" }) => {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => {
          Cookies.set("x-theme", theme === "dark" ? "light" : "dark");
          router.refresh();
        }}
        className="text-foreground hover:text-foreground/90 focus:text-foreground/90 p-2 focus:scale-90 rounded-md"
        title="Switch theme"
        aria-label="Switch theme"
      >
        <Icon svg={theme === "dark" ? SunIcon : MoonIcon} />
      </button>
    </div>
  );
};
export { ThemeSwitcher };
