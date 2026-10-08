import type { Lang } from '../i18n'
import { dictionaries } from '../i18n'

export function About({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].about
  return (
    <section id="about" className="scroll-mt-16 bg-slate-50 py-24" aria-labelledby="about-title">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">{t.eyebrow}</p>
        <h2 id="about-title" className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {t.title}
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">{t.text}</p>
        <ul className="mt-12 grid gap-8 sm:grid-cols-3">
          {t.values.map((v, i) => (
            <li key={v.title} className="border-l-2 border-blue-600 pl-5">
              <span className="text-sm font-semibold text-blue-700">0{i + 1}</span>
              <h3 className="mt-1 text-lg font-bold text-slate-900">{v.title}</h3>
              <p className="mt-1 text-slate-600">{v.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
