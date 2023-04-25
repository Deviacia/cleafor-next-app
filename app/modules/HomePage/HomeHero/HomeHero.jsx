import { useTranslation } from "@/i18n";
import Container from "@/components/Container/Container";
import styles from "./HomeHero.module.css";

const HomeHero = async ({ lng }) => {
  const { t } = await useTranslation(lng, "home");

  return (
    <div className={styles.hero}>
      <Container isNarrow={true} className={styles.container}>
        <div>
          <h1>{t("hero.heading")}</h1>
          <button>{t("hero.button")}</button>
        </div>
      </Container>
    </div>
  );
};

export default HomeHero;
