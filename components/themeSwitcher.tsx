"use client";

import Icon from "@/components/ui/icon";
import SunIcon from "@/public/assets/icons/sun.svg";
import MoonIcon from "@/public/assets/icons/moon.svg";
import { useEffect, useState } from "react";
import clsx from "clsx";

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = getCookie("theme");
    const initialIsDark =
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(initialIsDark);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    updateTheme(newIsDark);
    setCookie("theme", newIsDark ? "dark" : "light", 365); // Set cookie for 365 days
  };

  const updateTheme = (dark: boolean) => {
    const themeMetaTag = document.querySelector('meta[name="theme-color"]');
    const themeColor = dark ? "#161615" : "#f7f7ee";

    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    if (themeMetaTag) {
      themeMetaTag.setAttribute("content", themeColor);
    }
  };

  const getCookie = (name: string) => {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) {
      return parts.pop()?.split(";").shift();
    }
  };

  const setCookie = (name: string, value: string, days: number): void => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + "; " + expires + "; path=/";
  };
  return (
    <button
      onClick={toggleTheme}
      className={clsx(
        "text-neutral-800 hover:text-neutral-700 focus:bg-neutral-200 p-2 focus:scale-90 rounded-md",
        "dark:text-neutral-300 dark:hover:text-neutral-5 dark:focus:bg-neutral-800"
      )}
      aria-label="Switch theme"
    >
      <Icon svg={isDark ? MoonIcon : SunIcon} />
    </button>
  );
};

export { ThemeSwitcher };
