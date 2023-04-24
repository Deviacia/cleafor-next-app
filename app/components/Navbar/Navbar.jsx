import React from "react";
import { useTranslation } from "../../i18n";
import NavbarClient from './NavbarClient'

const Navbar = async ({ lng, path }) => {
  const { t } = await useTranslation(lng, "navbar");

  const routes = [
    { path: `/${lng}`, name: t("home") },
    { path: `/${lng}/vacancies`, name: t("vacancies") },
    { path: `/${lng}/employer`, name: t("employer") },
    { path: `/${lng}/contact`, name: t("contact") },
  ];

  return <NavbarClient routes={routes} lng={lng} path={path} />
};

export default Navbar;
