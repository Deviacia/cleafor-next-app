import VacancyItem from "@/components/Vacancies/VacancyItem";
import styles from './VacanciesList.module.css'

const VacanciesList = ({ vacancies }) => {
  return (
    <ul className={styles.list}>
      {vacancies.data
        ? vacancies.data.map((vacancy) => (
            <VacancyItem key={vacancy.id} vacancy={vacancy} />
          ))
        : null}
    </ul>
  );
};

export default VacanciesList;
