import type { Lang } from '../i18n'
import { dictionaries, langPath } from '../i18n'
import { BrandWordmark } from './BrandLogo'

export function Header({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].nav
  const other: Lang = lang === 'es' ? 'en' : 'es'
  const link = 'transition hover:text-slate-900'
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/85 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-slate-900 focus:px-3 focus:py-2 focus:text-white"
      >
        {t.skip}
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href={langPath[lang]} aria-label="D4nthi">
          <BrandWordmark />
        </a>
        <nav aria-label="Principal" className="flex items-center gap-6 text-sm font-medium text-slate-600">
          <a className={'hidden md:inline ' + link} href="#products">{t.products}</a>
          <a className={'hidden md:inline ' + link} href="#process">{t.process}</a>
          <a className={'hidden md:inline ' + link} href="#about">{t.about}</a>
          <a
            href={langPath[other]}
            hrefLang={other}
            lang={other}
            aria-label={t.switchTo}
            className="rounded-md border border-slate-200 px-2.5 py-1 text-xs font-semibold uppercase text-slate-800 transition hover:border-slate-900"
          >
            {other}
          </a>
          <a
            href="#contact"
            className="bg-brand-gradient-deep hidden rounded-lg px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 sm:inline-block"
          >
            {t.cta}
          </a>
        </nav>
      </div>
    </header>
  )
}
