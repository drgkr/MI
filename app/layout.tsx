import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mollywood Index — Find films worth your time",
  description: "Search, sort and explore Malayalam films through a transparent seven-measure rating method.",
  icons: { icon: "/MI/favicon.svg" },
  openGraph: { title: "Mollywood Index", description: "Explore two years of Malayalam cinema." },
  twitter: { card: "summary", title: "Mollywood Index", description: "Explore two years of Malayalam cinema." },
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
