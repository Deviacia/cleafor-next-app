"use client";

import { useRouter } from "next/navigation";
import styles from "./PreviousButton.module.css";

const PreviousButton = () => {
  const { back } = useRouter();

  return (
    <>
      <button className={styles.button} onClick={() => back()}>
        back
      </button>
    </>
  );
};

export default PreviousButton;
