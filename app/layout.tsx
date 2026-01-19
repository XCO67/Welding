import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alsarraf Numercial Machining | Professional Manufacturing Services",
  description: "Alsarraf Numercial Machining - Professional manufacturing and fabrication services including CNC machining, laser cutting, sheet metal, 3D printing, and more.",
  keywords: ["CNC machining", "laser cutting", "sheet metal", "3D printing", "welding", "manufacturing", "Kuwait"],
  authors: [{ name: "Alsarraf Numercial Machining" }],
  robots: "index, follow",
  openGraph: {
    title: "Alsarraf Numercial Machining | Professional Manufacturing Services",
    description: "Professional manufacturing and fabrication services with unmatched quality and craftsmanship",
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
