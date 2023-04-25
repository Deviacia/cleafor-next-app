import { useTranslation } from "@/i18n";
import styles from "./HomeExperiences.module.css";

const HomeExperiences = async ({ lng }) => {
  const { t } = await useTranslation(lng, "home");

  return (
    <>
      <div>HomeExperiences</div>
    </>
  );
};

export default HomeExperiences;
