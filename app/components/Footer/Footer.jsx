import { useTranslation } from "@/i18n";
import Container from "../Container/Container";
import styles from "./Footer.module.css";

const Footer = async ({ lng }) => {
  const { t } = await useTranslation(lng, "footer");

  return (
    <div className={styles.footer}>
      <Container>Footer</Container>
    </div>
  );
};

export default Footer;
