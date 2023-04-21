import { useTranslation } from '../../i18n'
import PageLayout from '../../layouts/PageLayout/PageLayout'
import Container from '../../components/Container/Container'

export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, 'employer')
  return { title: t('title') }
}

export default async function Page({ params: { lng } }) {
  return (
    <PageLayout lng={lng} path={'/employer'}>
      <main>
        <Container></Container>
      </main>
    </PageLayout>
  )
}