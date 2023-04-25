import HomeHero from "../modules/HomePage/HomeHero";
import HomeExperiences from "../modules/HomePage/HomeExperiences";
import HomeServices from "../modules/HomePage/HomeServices";
import HomeAbout from "../modules/HomePage/HomeAbout";
import HomeContact from "../modules/HomePage/HomeContact";
import Container from "../components/Container/Container";
import { useTranslation } from '../i18n'

export async function generateMetadata({ params: { lng } }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng, "home");
  return { title: t("title") };
}

export default async function Home({ params: { lng } }) {
  return (
    <main>
      <HomeHero />
      <Container>
        <HomeExperiences />
        <HomeServices />
        <HomeAbout />
        <HomeContact />
      </Container>
    </main>
  );
}
