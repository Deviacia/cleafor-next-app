import { useTranslation } from '../../i18n'
import Container from '../../components/Container/Container'

export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, 'employer')
  return { title: t('title') }
}

export default async function Employer({ params: { lng } }) {
  return (
      <main>
        <Container></Container>
      </main>
  )
}