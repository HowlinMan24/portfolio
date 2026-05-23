import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Hristijan Mijalkov — Full-stack Engineer & Aspiring Data Scientist",
  description:
    "Portfolio of Hristijan Mijalkov — full-stack engineer and aspiring data scientist building secure web apps and end-to-end ML pipelines.",
  openGraph: {
    title: "Hristijan Mijalkov — Full-stack Engineer & Aspiring Data Scientist",
    description:
      "Portfolio of Hristijan Mijalkov — full-stack engineer and aspiring data scientist building secure web apps and end-to-end ML pipelines.",
    type: "website",
    url: "https://hristijanmijalkov.dev",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hristijan Mijalkov",
    description: "Full-stack Engineer & Aspiring Data Scientist",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
