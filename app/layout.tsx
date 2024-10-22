import type { Metadata } from "next";
import localFont from "next/font/local";
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from "next/font/google";

import { Toaster } from "@/components/ui/toaster"
import '@stream-io/video-react-sdk/dist/css/styles.css'
import 'react-datepicker/dist/react-datepicker.css'

const inter = Inter({ subsets: ["latin"] });

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Stream",
  description: "Video Calling app",
  icons: {
    icon:'/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
       appearance={{
        layout: {
          logoImageUrl:'/icons/logo.svg',
          socialButtonsVariant: 'iconButton'
        },
        variables: {
          colorText: '#fff',
          colorPrimary: '#0E78F9',
          colorBackground: '#1C1F2E',
          colorInputBackground: '#252A41',
          colorInputText: '#fff'
        },
       }}
      >
      <body className={`${inter.className} bg-dark-2`}>
          <Toaster />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
