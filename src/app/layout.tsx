import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ReduxProvider } from "@/common/providers/ReduxProvider";
import QueryProvider from "@/common/providers/QueryProvider";
import "./globals.css";
import { AuthProvider } from "@/common/providers/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alma Assessment",
  description: "Alma Assessment Platform",
  icons: {
    icon: [
      {
        url: "https://cdn.prod.website-files.com/67899ab4e6c7ecc71a7add09/67a535546209b8a41217a98a_alma%20favicon.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <ReduxProvider>
            <QueryProvider>{children}</QueryProvider>
          </ReduxProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
