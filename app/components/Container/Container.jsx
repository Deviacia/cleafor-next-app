import styles from "./Container.module.css";

const Container = ({ children, isNarrow }) => {
  return (
    <div
      className={
        isNarrow
          ? [styles.container, styles.container_narrow].join(" ")
          : styles.container
      }
    >
      {children}
    </div>
  );
};

export default Container;
