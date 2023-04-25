import styles from "./VacancyItem.module.css";

const VacancyItem = ({ vacancy }) => {
  return (
    <li key={vacancy.id} className={styles.item}>
      <a href={`vacancies/${vacancy.id}`} className={styles.link}>
        <div>
          <div>
            <h1 className={styles.title}>{vacancy.attributes.name}</h1>
            <p>{vacancy.attributes.location}</p>
          </div>
          <div>
            <p>{vacancy.attributes.salaryFrom}</p>
            <p>{vacancy.attributes.salaryTo}</p>
          </div>
        </div>
      </a>
    </li>
  );
};

export default VacancyItem;
