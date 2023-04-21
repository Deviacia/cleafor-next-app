import { use } from 'react'
import { useTranslation } from '../../../i18n'
import PageLayout from '../../../layouts/PageLayout/PageLayout'
import Container from '../../../components/Container/Container'

export async function generateMetadata({ params: { lng } }) {
    const { t } = await useTranslation(lng, 'vacancy')
    return { title: t('title') }
}

async function getVacancy(id) {
    const res = await fetch(`http://localhost:1337/api/vacancies/${id}`)

    return res.json()
}

export default function Page({ params: { lng, id } }) {
    const vacancy = use(getVacancy(id))
    const data = vacancy.data

    return (
        <PageLayout lng={lng} path={`/vacancies/${id}`}>
            <main>
                <Container>
                    <div>
                        <p>Vacancy ID: {data.id}</p>
                        <h1>{data.attributes.name}</h1>
                    </div>
                </Container>
            </main>
        </PageLayout>
    )
}