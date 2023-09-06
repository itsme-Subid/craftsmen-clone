import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const satoshi = localFont({
  src: "../../public/fonts/Satoshi-Variable.ttf",
});

export const metadata: Metadata = {
  title: "The Craftsmen Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${satoshi.className} mx-2`}>{children}</body>
    </html>
  );
}
