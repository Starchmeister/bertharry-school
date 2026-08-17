import type { Metadata } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bertharryschools.co.za"),
  title: "Bertharry English Private School",
  description:
    "Bertharry English Private School — quality primary and secondary education in Tembisa since 1991.",
  openGraph: {
    title: "Bertharry English Private School",
    description:
      "Quality primary and secondary education in Tembisa since 1991. 2025 admissions are now open.",
    url: "/",
    siteName: "Bertharry English Private School",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Bertharry English Private School",
    description:
      "Quality primary and secondary education in Tembisa since 1991. 2025 admissions are now open.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)]">
        <ScrollReveal />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
