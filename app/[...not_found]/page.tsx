import { siteConfig } from "@/config/site";

export const metadata = { title: `${siteConfig.name} - Not found` };

export default function NotFound() {
  return (
    <h1 className="text-black font-ruda text-3xl w-full text-center mt-44">
      404 - Page Not Found
    </h1>
  );
}
