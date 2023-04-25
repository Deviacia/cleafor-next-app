import { use } from "react";
import { getVacancy } from '@/api/vacancies'
import { useTranslation } from '@/i18n'
import Container from "@/components/Container/Container";
import ErrorBoundary from "@/components/ErrorBoundary";

export async function generateMetadata({ params: { lng } }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng, "vacancies");
  return { title: t("title") };
}

export default function VacancyPage({ params: { lng, id } }) {
  const vacancy = use(getVacancy(id));
  const data = vacancy?.data;

  return (
    <main>
      <Container isNarrow={true}>
        <ErrorBoundary>
          <div>
            <p>Vacancy ID: {data?.id}</p>
            <h1>{data?.attributes.name}</h1>
            <p>{data?.attributes.description}</p>
          </div>
        </ErrorBoundary>
      </Container>
    </main>
  );
}
