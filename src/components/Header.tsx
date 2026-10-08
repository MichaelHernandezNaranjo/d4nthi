import type { Lang } from '../i18n'
import { dictionaries, langPath } from '../i18n'

export function Header({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].nav
  const other: Lang = lang === 'es' ? 'en' : 'es'
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-slate-900 focus:px-3 focus:py-2 focus:text-white"
      >
        {t.skip}
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href={langPath[lang]} className="text-xl font-extrabold tracking-tight text-slate-900">
          D4nthi<span className="text-blue-600">.</span>
        </a>
        <nav aria-label="Principal" className="flex items-center gap-6 text-sm text-slate-600">
          <a className="hidden transition hover:text-slate-900 sm:inline" href="#products">
            {t.products}
          </a>
          <a className="hidden transition hover:text-slate-900 sm:inline" href="#about">
            {t.about}
          </a>
          <a className="transition hover:text-slate-900" href="#contact">
            {t.contact}
          </a>
          <a
            href={langPath[other]}
            hrefLang={other}
            lang={other}
            aria-label={t.switchTo}
            className="rounded-md border border-slate-200 px-2.5 py-1 text-xs font-semibold uppercase text-slate-800 transition hover:border-slate-900"
          >
            {other}
          </a>
        </nav>
      </div>
    </header>
  )
}
