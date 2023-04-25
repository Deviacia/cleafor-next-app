"use client";

import { useState } from "react";
import Link from "next/link";
import LangSwitch from "../LangSwitch/LangSwitch";
import Container from "../Container/Container";
import styles from "./Navbar.module.css";

const NavbarClient = ({ routes, lng, path }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <nav className={styles.nav}>
      <Container className={styles.container}>
        <Link href={`/${lng}`}>LOGO</Link>

        <div className={styles.column}>
          <ul className={styles.list}>
            {routes?.map((route, index) => (
              <li key={index} className={styles.item}>
                <Link href={route.path} className={styles.link}>
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
          <LangSwitch lng={lng} path={path} />
        </div>
      </Container>
    </nav>
  );
};

export default NavbarClient;
