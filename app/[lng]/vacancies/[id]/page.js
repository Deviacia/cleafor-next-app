import { use } from "react";
// import { useRouter } from "next/navigation";
import { useTranslation } from "../../../i18n";
import Container from "../../../components/Container/Container";

export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, "vacancy");
  return { title: t("title") };
}

async function getVacancy(id) {
  try {
    const res = await fetch(`http://127.0.0.1:8080/api/vacancies/${id}`);

    return res.json();
  } catch (error) {
    return {
      data: {
        error: error.message,
      },
    };
  }
}

export default function Page({ params: { lng, id } }) {
  const vacancy = use(getVacancy(id));
  // const router = useRouter();
  const data = vacancy?.data;

  return (
    <main>
      <Container>
        {vacancy.error ? (
          <div>{vacancy.error.message}</div>
        ) : (
          <div>
            {/* <button onClick={() => router.back()}>Back</button> */}
            <div>
              <p>Vacancy ID: {data?.id}</p>
              <h1>{data?.attributes.name}</h1>
              <p>{data?.attributes.description}</p>
            </div>
          </div>
        )}
      </Container>
    </main>
  );
}
