import type { ReactNode } from "react";
import NavBar from "@/components/NavBar";
import "./globals.css";
import { exo_2, orbitron } from "@/app/fonts";

export const metadata = {
  title: {
    default: "Indie Gamer",
    template: "%s | Indie Gamer",
  },
  description: "Only the best indie games, recommended for you",
};

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  console.log("render root");
  return (
    <html lang="en" className={`${exo_2.variable} ${orbitron.variable}`}>
      <body className=" bg-orange-50 flex flex-col px-4 py-2 min-h-screen">
        <header>
          <NavBar />
        </header>
        <main className="grow py-3">{children}</main>
        <footer className="border-t py-3 text-center text-slate-500 text-xs">
          Game data and images courtesy of{" "}
          <a
            href="https://rawg.io"
            target="_blank"
            className=" text-orange-800 hover:underline"
          >
            {" "}
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
