import { dir } from "i18next";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { languages } from "../i18n/settings";
import "./global.css";

export async function generateStaticParams() {
  const lng = languages.map((lng) => ({ lng }));
  // const path
  // Need to dynamically get the path and pass it to the Navbar

  return lng;
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
