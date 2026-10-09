import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Jain Wisdom — Discover. Learn. Connect.",
  description:
    "A thoughtful digital home for Jain knowledge, learning and community. Client presentation demo.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
