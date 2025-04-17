import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";













import { Providers } from "./provider";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("./components/Footer"));
const Navbar = dynamic(() => import("./components/Navbar"));

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ObiTech Portfolio",
  description:
    "Welcome to ObiTech! We create modern, user-friendly websites, mobile apps, and backend systems. Our work focuses on clean design, strong performance, and the latest technology like React, Next.js, Python and more . We’re passionate about delivering top-quality results and bringing your ideas to life. Let’s build something amazing together! 🚀 ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Providers>
            <div className="flex flex-col">
              <header className="about_bg !pb-4 sticky top-0 z-50 !right-0 !left-0 w-full">
                <Navbar />
              </header>
              <main className="flex-grow">{children}</main>
              <footer className="dark:bg-slate-900 bg-slate-50 py-10 dark:text-white static bottom-0">
                <Footer />
              </footer>
            </div>
          </Providers>
        </body>
      </html>
    </>
  );
}
