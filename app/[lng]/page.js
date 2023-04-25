import { useTranslation } from '@/i18n'
import Container from "@/components/Container/Container";
import {
  HomeHero,
  HomeExperiences,
  HomeServices,
  HomeAbout,
  HomeContact
} from "@/modules/HomePage";

export async function generateMetadata({ params: { lng } }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng, "home");
  return { title: t("title") };
}

export default async function Home() {
  return (
    <main>
      <HomeHero />
      <Container isNarrow={true}>
        <HomeExperiences />
        <HomeServices />
        <HomeAbout />
        <HomeContact />
      </Container>
    </main>
  );
}
