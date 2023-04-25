import { use } from "react";
import { getVacancy } from "@/api/vacancies";
import { useTranslation } from "@/i18n";
import Container from "@/components/Container/Container";
import ErrorBoundary from "@/components/ErrorBoundary";
import VacancyProfile from "@/components/Vacancies/VacancyProfile";

export async function generateMetadata({ params: { lng } }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng, "vacancies");
  return { title: t("title") };
}

export default function Vacancy({ params: { lng, id } }) {
  const vacancy = use(getVacancy(id, lng));

  return (
    <main className="main">
      <Container isNarrow={true}>
        <ErrorBoundary>
          <VacancyProfile data={vacancy.data} />
        </ErrorBoundary>
      </Container>
    </main>
  );
}
