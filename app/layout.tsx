import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Roboto_Mono({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Swiv - Privacy-First Prediction Market",
  description: "Make private, precision-based predictions on crypto, politics, and real-world outcomes with MagicBlock Ephemeral Rollups on Solana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-black`}>
        {children}
      </body>
    </html>
  );
}
