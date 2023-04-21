import React from "react";

const VacanciesList = ({ vacancies }) => {
  const data = vacancies?.data;
  const meta = vacancies?.meta;

  return (
    <>
      <ul>
        {data.map((vacancy) => (
          <li key={vacancy.id}>
            <a href={`vacancies/${vacancy.id}`}>{vacancy.id}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default VacanciesList;
