import React from "react";
import Link from "next/link";
import { useTranslation } from "../../i18n";
import LangSwitch from "../LangSwitch/LangSwitch";
import Container from "../Container/Container";
import styles from "./Navbar.module.css";

const Navbar = async ({ lng, path }) => {
  const { t } = await useTranslation(lng, "navbar");

  const routes = [
    { path: `/${lng}`, name: t("home") },
    { path: `/${lng}/vacancies`, name: t("vacancies") },
    { path: `/${lng}/employer`, name: t("employer") },
    { path: `/${lng}/contact`, name: t("contact") },
  ];

  return (
    <nav className={styles.nav}>
      <Container>
        <ul className={styles.list}>
          {routes.map((route, index) => (
            <li key={index} className={styles.item}>
              <Link href={route.path} className={styles.link}>
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
        <LangSwitch lng={lng} path={path} />
      </Container>
    </nav>
  );
};

export default Navbar;
