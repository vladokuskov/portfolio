import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full h-full flex flex-col justify-start items-center">
        <Navbar />

        <main className="w-full flex flex-col justify-start items-start p-4 py-12 my-4 mx-auto min-h-[85vh] max-w-6xl">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
