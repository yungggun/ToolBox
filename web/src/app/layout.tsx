import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import NextTopLoader from "nextjs-toploader";
import SessionProvider from "@/context/SessionProvider";
import { Toaster } from "sonner";

const inter = Poppins({ subsets: ["latin"], weight:["100", "400"]});

export const metadata: Metadata = {
  title: "ToolBox",
  description: "A Website with useful Tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <NextUIProvider>
          <NextTopLoader />
          <SessionProvider>{children}</SessionProvider>
          <Toaster position="bottom-right" richColors />
        </NextUIProvider>
      </body>
    </html>
  );
}
