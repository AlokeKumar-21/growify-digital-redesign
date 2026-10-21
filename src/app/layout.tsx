
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Growify Digital | Growth Systems for Luxury Commerce",
  description:
    "Connect commerce, performance marketing, customer retention and technology with Growify Digital's integrated approach to growth.",
  applicationName: "Growify Digital",
  openGraph: {
    title: "Growify Digital | Growth Systems for Luxury Commerce",
    description:
      "Commerce, customer experience and technology working together for ambitious brands.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
