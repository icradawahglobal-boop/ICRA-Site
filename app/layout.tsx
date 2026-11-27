import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ICRA | Islam and Comparative Religion Academy",
  description: "Dawah, educational and research organization dedicated to sharing the message of Islam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${jakarta.className} bg-[#f8f9fa] text-[#1a1a1a] antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}