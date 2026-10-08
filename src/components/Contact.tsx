import type { Lang } from '../i18n'
import { dictionaries } from '../i18n'

export function Contact({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].contact
  return (
    <section id="contact" className="scroll-mt-16 px-6 pb-24" aria-labelledby="contact-title">
      <div className="bg-brand-gradient-deep relative mx-auto max-w-6xl overflow-hidden rounded-3xl px-8 py-16 text-center text-white shadow-xl">
        <div aria-hidden="true" className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-black/20 blur-3xl" />
        <h2 id="contact-title" className="relative text-3xl font-extrabold tracking-tight sm:text-5xl">{t.title}</h2>
        <p className="relative mx-auto mt-4 max-w-xl text-white/90">{t.text}</p>
        <a
          href="mailto:info@d4nthi.com"
          className="relative mt-8 inline-block rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {t.cta}
        </a>
      </div>
    </section>
  )
}
