import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Button from "@/components/ui/Button";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import { headers } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alma Immigration",
  description: "Expert immigration services for extraordinary individuals",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const pathname = headersList.get("x-invoke-path") || "";
  const isHomePage = pathname === "/";

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {isHomePage && (
          <nav className="bg-background ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16 items-center">
                <Link href="/" className="flex items-center">
                  <span className="text-4xl font-bold">almă</span>
                </Link>
                <div className="flex space-x-8">
                  <Button href="/assessment" size="lg">
                    Get Assessment
                    <ArrowRightIcon width="22" height="22" />
                  </Button>
                </div>
              </div>
            </div>
          </nav>
        )}
        {children}
      </body>
    </html>
  );
}
