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
  description:
    "Make private, precision-based predictions on crypto, politics, and real-world outcomes on Solana.",

  openGraph: {
    title: "Swiv - Privacy-First Prediction Market",
    description:
      "Make private, precision-based predictions on crypto, politics, and real-world outcomes on Solana.",
    url: "https://swiv.xyz",
    siteName: "Swiv",
    images: [
      {
        url: "https://swiv.xyz/images/swiv-banner.png",
        width: 1500,
        height: 500,
        alt: "Swiv - Private Prediction Market",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Swiv - Privacy-First Prediction Market",
    description:
      "Make private, precision-based predictions on crypto, politics, and real-world outcomes on Solana.",
    images: ["https://swiv.xyz/images/swiv-banner.png"],
  },
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
