import type { Metadata } from "next";
import "./globals.css";

import Providers from "@/lib/Providers/Providers";
import { kumbh, roboto } from "./fonts";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: {
    default: "Admin Dashboard | Discount Me ",
    template: "%s | Chez tati",
  },
  description: "This is  official Admin Dashboard website of Discount Me ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kumbh.className} ${roboto.variable}  antialiased bg-[#232323]`}
      >
        <Providers>
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}
