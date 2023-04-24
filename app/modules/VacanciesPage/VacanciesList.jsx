import React from "react";
import VacancyItem from "../../components/Vacancies/VacancyItem";

const VacanciesList = ({ vacancies }) => {
  const data = vacancies?.data;

  return (
    <ul>
      {data ? data.map((vacancy) => <VacancyItem key={vacancy.id} vacancy={vacancy} />) : null}
    </ul>
  );
};

export default VacanciesList;
