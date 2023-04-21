import { useTranslation } from '../../i18n'
import PageLayout from '../../layouts/PageLayout/PageLayout'
import Container from '../../components/Container/Container'

export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, 'contact')
  return { title: t('title') }
}

export default async function Page({ params: { lng } }) {
  return (
    <PageLayout lng={lng} path={'/contact'}>
      <main>
        <Container></Container>
      </main>
    </PageLayout>
  )
}