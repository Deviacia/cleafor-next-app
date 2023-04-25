import React from "react";
import VacancyItem from "../../components/Vacancies/VacancyItem";

const VacanciesList = ({ vacancies }) => {
  return (
    <ul>
      {vacancies.data
        ? vacancies.data.map((vacancy) => (
            <VacancyItem key={vacancy.id} vacancy={vacancy} />
          ))
        : null}
    </ul>
  );
};

export default VacanciesList;
