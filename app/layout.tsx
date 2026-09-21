import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Hristijan Mijalkov — Full-stack & AI Engineer",
  description:
    "Portfolio of Hristijan Mijalkov — full-stack and AI engineer building production web apps and end-to-end ML pipelines.",
  openGraph: {
    title: "Hristijan Mijalkov — Full-stack & AI Engineer",
    description:
      "Full-stack and AI engineer. Angular, NestJS, Python, PySpark, AWS. Open to new opportunities.",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hristijan Mijalkov",
    description: "Full-stack & AI Engineer",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
