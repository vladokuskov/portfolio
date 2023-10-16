import { siteConfig } from "@/config/site";
import { cookies } from "next/headers";
import clsx from "clsx";
import "../styles/global.css";
import { Inter, Ramaraja, Roboto, Ruda } from "next/font/google";

const ruda = Ruda({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ruda",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const inter = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const ramaraja = Ramaraja({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-ramaraja",
});

export const metadata = {
  title: {
    template: `%s | ${siteConfig.name}`,
    default: `${siteConfig.name} - Web developer`,
  },
  description: siteConfig.description,
  keywords: [
    "Vladyslav",
    "Okuskov",
    "Next.js",
    "React.js",
    "JavaScript",
    "TypeScript",
    "Web developer",
  ],
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
  ],
  icons: {
    icon: [
      { url: "/favicon-16x16.png" },
      new URL("/favicon-16x16.png", siteConfig.url),
    ],
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const prefersDark = cookies().get("x-theme")?.value === "dark";
  return (
    <html lang="en">
      <body
        className={clsx(
          `${ruda.variable} ${ramaraja.variable} ${roboto.variable} ${inter.variable} bg-background`,
          prefersDark ? "dark" : undefined
        )}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
