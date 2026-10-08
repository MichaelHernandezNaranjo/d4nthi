import type { Lang } from '../i18n'
import { dictionaries } from '../i18n'

export function Contact({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].contact
  return (
    <section id="contact" className="scroll-mt-16 py-24" aria-labelledby="contact-title">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 id="contact-title" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {t.title}
        </h2>
        <p className="mt-4 text-slate-600">{t.text}</p>
        <a
          href="mailto:info@d4nthi.com"
          className="mt-8 inline-block rounded-lg bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          {t.cta}
        </a>
      </div>
    </section>
  )
}
