import { use } from "react";
import { useTranslation } from "@/i18n";
import { getVacancies } from "@/api/vacancies";
import { getCategories } from "@/api/categories";
import ErrorBoundary from "@/components/ErrorBoundary";
import Container from "@/components/Container/Container";
import { VacanciesList } from "@/modules/VacanciesPage";
import CategoryItem from "@/components/Categories/CategoryItem";

export async function generateMetadata({ params: { lng } }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng, "vacancies");
  return { title: t("title") };
}

export default function Vacancies({ params: { lng } }) {
  const vacancies = use(getVacancies(lng));
  const categories = use(getCategories(lng));

  return (
    <main className="main">
      <Container isNarrow={true}>
        <ErrorBoundary>
          <div>
            {categories.data.map((category) => (
              <CategoryItem
                key={category.attributes.name}
                category={category}
              />
            ))}
          </div>
          <VacanciesList vacancies={vacancies} />
        </ErrorBoundary>
      </Container>
    </main>
  );
}
