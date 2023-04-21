import Link from 'next/link'
import { languages } from '../../../i18n/settings'

export const FooterBase = ({ t, lng, path = '' }) => {
  return (
    <footer>
      {languages.filter((l) => lng !== l).map((l, index) => {
        return (
          <span key={l}>
            {index > 0 && (' or ')}
            <Link href={`/${l}${path}`}>
              {l}
            </Link>
          </span>
        )
      })}
    </footer>
  )
}
