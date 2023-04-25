import styles from "./Container.module.css";

const Container = ({ children, isNarrow, className }) => {
  const baseCondition = isNarrow
    ? [styles.container, styles.container_narrow].join(" ")
    : styles.container;

  const styled = className ? [baseCondition, className].join(" ") : baseCondition;

  return (
    <div
      className={styled}
    >
      {children}
    </div>
  );
};

export default Container;
