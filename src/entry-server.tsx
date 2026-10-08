import { renderToString } from 'react-dom/server'
import App from './App'
import type { Lang } from './i18n'

export { dictionaries, langPath, SITE_URL } from './i18n'

export function render(lang: Lang): string {
  return renderToString(<App lang={lang} />)
}
