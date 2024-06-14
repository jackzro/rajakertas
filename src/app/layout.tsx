import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/utils/ReactQueryProvider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { WhatsAppOutlined } from "@ant-design/icons";
import GoogleAnalytic from "@/components/GoogleAnalytic";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RajaKertas",
  description: "RajaKertas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytic />
      <ReactQueryProvider>
        <body className={inter.className}>
          <AntdRegistry>{children} </AntdRegistry>
        </body>
      </ReactQueryProvider>
    </html>
  );
}
