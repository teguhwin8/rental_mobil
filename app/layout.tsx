import { Analytics } from "@vercel/analytics/react";
import { Footer, Navbar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Rental Mobil",
  description: "Website Rental Mobil",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
