import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sparky",
  description: "Premium Home Services",
  verification: {
    google: "00Tll4nTUIZo5sGMKKbG_aX1wr49ZgAbWgCconpIYUU",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
