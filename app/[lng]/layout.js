import { dir } from "i18next";
import { languages } from "@/i18n/settings";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import "./global.css";

export async function generateStaticParams() {
  // Need to dynamically get the path and pass it to the Navbar

  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }) {

  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        <Navbar lng={lng} path={"/"} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
