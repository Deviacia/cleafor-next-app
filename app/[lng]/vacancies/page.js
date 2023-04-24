import { useTranslation } from "../../i18n";
import { use } from "react";
import Container from "../../components/Container/Container";
import VacanciesList from "../../modules/VacanciesPage/VacanciesList";

export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, "vacancies");
  return { title: t("title") };
}

async function getVacancies() {
  try {
    const res = await fetch("http://127.0.0.1:8080/api/vacancies", {
      cache: "force-cache",
    });

    return res.json();
  } catch (error) {
    return {
      error,
    };
  }
}

export default function Vacancies({ params: { lng } }) {
  const vacancies = use(getVacancies());

  return (
      <main>
        <Container>
          {vacancies.error ? (
            <div>{vacancies.error.message}</div>
          ) : (
            <VacanciesList vacancies={vacancies} />
          )}
        </Container>
      </main>
  );
}
