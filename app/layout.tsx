import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevPortfolio | Engone Edouard Joan",
  description:
    "Full-stack developer specializing in enterprise-grade architectures and modern web technologies.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background font-body-base text-on-background selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}