import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import SessionProvider from "@/context/SessionProvider";
import { Toaster } from "@/components/ui/sonner";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ping",
  description: "A scalable Next.js chat application!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <SessionProvider>
        <body className={`${roboto.className} antialiased`}>
          {children}
          <Toaster richColors duration={5000} />
        </body>
      </SessionProvider>
    </html>
  );
}
