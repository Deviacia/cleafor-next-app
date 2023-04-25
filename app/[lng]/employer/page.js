import Container from '@/components/Container/Container'
import { useTranslation } from '@/i18n'

export async function generateMetadata({ params: { lng } }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng, "employer");
  return { title: t("title") };
}

export default async function Employer({ params: { lng } }) {
  return (
    <main className='main'>
      <Container>
        Information for employer will be here
      </Container>
    </main>
  )
}