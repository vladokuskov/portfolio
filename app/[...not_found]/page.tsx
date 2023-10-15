import Link from "next/link";

export const metadata = { title: "Not found" };

export default function NotFound() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-2">
      <h1 className="text-foreground font-ruda text-3xl w-full text-center mt-44">
        404 - Page Not Found
      </h1>
      <Link
        href="/"
        className="text-foreground hover:text-foreground/90 hover:underline focus:text-foreground/90"
      >
        Back to Home
      </Link>
    </div>
  );
}
