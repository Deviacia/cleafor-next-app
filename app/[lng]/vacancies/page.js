import { use } from "react";
import Container from "@/components/Container/Container";
import VacanciesList from "@/modules/VacanciesPage/VacanciesList";
import { getVacancies } from '@/api/vacancies'
import { useTranslation } from '@/i18n'
import ErrorBoundary from "@/components/ErrorBoundary";

export async function generateMetadata({ params: { lng } }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng, "vacancies");
  return { title: t("title") };
}

export default function Vacancies({ params: { lng } }) {
  const vacancies = use(getVacancies());

  return (
    <main>
      <Container isNarrow={true}>
        <ErrorBoundary>
          <VacanciesList vacancies={vacancies} />
        </ErrorBoundary>
      </Container>
    </main>
  );
}
