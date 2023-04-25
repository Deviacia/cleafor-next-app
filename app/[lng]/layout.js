'use client'

import { dir } from "i18next";
import { languages } from "@/i18n/settings";
import { usePathname } from 'next/navigation';
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import "./global.css";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }) {
  // This needs for correct language switching and routing
  const pathname = usePathname();
  const path = pathname.split('/').splice(2).join('/')

  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        <Navbar lng={lng} path={`/${path}`} />
        {children}
        <Footer lng={lng} />
      </body>
    </html>
  );
}
