import { useTranslation } from '@/i18n'

export default async function EmployerHead({ params: { lng } }) {
  const { t } = await useTranslation(lng, 'employer')

  return (
    <>
      <title>{t('title')}</title>
      <meta
        name="description"
        content="A playground to explore new Next.js 13 app directory features such as nested layouts, instant loading states, streaming, and component level data fetching."
      />
    </>
  )
}
