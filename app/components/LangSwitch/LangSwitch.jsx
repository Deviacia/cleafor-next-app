import Link from "next/link";
import { languages } from "@/i18n/settings";
import styles from './LangSwitch.module.css';

const LangSwitch = ({ lng, path = "" }) => {
  return (
    <ul className={styles.list}>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <span key={l} className={styles.item}>
              {index > 0 && " or "}
              <Link href={`/${l}${path}`} className={styles.link}>{l}</Link>
            </span>
          );
        })}
    </ul>
  );
};

export default LangSwitch;
