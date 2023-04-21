import { useTranslation } from '../../i18n'
import PageLayout from '../../layouts/PageLayout/PageLayout'
import Container from '../../components/Container/Container'
import { use } from 'react'
import VacanciesList from '../../modules/VacanciesPage/VacanciesList'

export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, 'vacancies')
  return { title: t('title') }
}

async function getVacancies() {
  const res = await fetch('http://localhost:1337/api/vacancies')
  
  return res.json()
}

export default function Page({ params: { lng } }) {
  const vacancies = use(getVacancies())

  return (
    <PageLayout lng={lng} path={'/vacancies'}>
      <main>
        <Container>
          <VacanciesList vacancies={vacancies}/>
        </Container>
      </main>
    </PageLayout>
  )
}