import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Hristijan Mijalkov — Full-stack Engineer & Data Scientist",
  description:
    "Portfolio of Hristijan Mijalkov — full-stack engineer and data scientist building production web apps and end-to-end ML pipelines.",
  openGraph: {
    title: "Hristijan Mijalkov — Full-stack Engineer & Data Scientist",
    description:
      "Full-stack engineer and data scientist. Angular, NestJS, Python, PySpark, AWS. Open to new opportunities.",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hristijan Mijalkov",
    description: "Full-stack Engineer & Aspiring Data Scientist",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-white text-zinc-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
