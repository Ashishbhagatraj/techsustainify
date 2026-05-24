import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import ClientShell from "./components/layout/ClientShell";
import Footer from "./components/layout/Footer";
import { ThemeProvider } from "./components/themecontext/page";
import ScrollToTop from "@/app/components/scroll-top/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tech Sustainify",
  description: "Learn Programming with Tech Sustainify",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ScrollToTop />
        <ThemeProvider>
          <ClientShell>
            {children}
          </ClientShell>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}