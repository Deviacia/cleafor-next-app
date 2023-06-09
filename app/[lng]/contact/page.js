import { useTranslation } from "@/i18n";
import Container from "@/components/Container/Container";

export async function generateMetadata({ params: { lng } }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng, "contact");
  return { title: t("title") };
}

export default async function Contact({ params: { lng } }) {
  return (
      <main className='main'>
        <Container>
          Contact form will be here
        </Container>
      </main>
  );
}
