import { Inter } from "next/font/google";
import "./ui/globals.css";
import "tailwindcss/tailwind.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  tittle: "INCO Academy",
  description: "Academy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>INCO Academy</title>
        <meta name="description" content="Academy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
