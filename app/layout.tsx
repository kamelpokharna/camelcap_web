import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Camel Capital",
  description: "Camel Capital invests in founders who are obsessed with solving hard problems.",
  icons: {
    icon: {
      url: "../public/camel_capital_logo.png",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="msapplication-TileImage" content="../public/camel_capital_logo.png" />
      <body>
      <meta name="msapplication-TileImage" content="../public/camel_capital_logo.png" />
        <Navbar />
        <main className="relative overflow-hidden bg-rootBackgroundColor">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
