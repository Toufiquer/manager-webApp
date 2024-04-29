import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryClientProviderPage from "@/components/common/query-client-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meal Night Manager",
  description: "Meal Night Manager ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProviderPage>{children}</QueryClientProviderPage>
      </body>
    </html>
  );
}
