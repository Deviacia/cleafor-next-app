import { use } from "react";
import Container from "../../components/Container/Container";
import VacanciesList from "../../modules/VacanciesPage/VacanciesList";
import { getVacancies } from '../../api/vacancies'
import { useTranslation } from '../../i18n'
import ErrorBoundary from "@/app/components/ErrorBoundary";

export async function generateMetadata({ params: { lng } }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng, "vacancies");
  return { title: t("title") };
}

export default function Vacancies({ params: { lng } }) {
  const vacancies = use(getVacancies());

  return (
    <main>
      <Container>
        <ErrorBoundary>
          <VacanciesList vacancies={vacancies} />
        </ErrorBoundary>
      </Container>
    </main>
  );
}
