'use client'

import React, { useState } from "react";
import Link from "next/link";
import LangSwitch from "../LangSwitch/LangSwitch";
import Container from "../Container/Container";
import styles from "./Navbar.module.css";

const NavbarClient = ({ routes, lng, path }) => {
  // const [isExpanded, setIsExpanded] = useState(false);

  return (
    <nav className={styles.nav}>
      <Container>
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
      </Container>
    </nav>
  );
};

export default NavbarClient;
