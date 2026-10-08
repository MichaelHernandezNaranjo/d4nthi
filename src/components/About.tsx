import type { Lang } from '../i18n'
import { dictionaries } from '../i18n'

export function About({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].about
  return (
    <section id="about" className="scroll-mt-16 py-24" aria-labelledby="about-title">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">{t.eyebrow}</p>
          <h2 id="about-title" className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{t.title}</h2>
          <p className="mt-4 text-lg text-slate-600">{t.text}</p>
        </div>
        <ul className="space-y-6">
          {t.values.map((v, i) => (
            <li key={v.title} className="flex gap-5 border-l-4 border-blue-600 pl-5">
              <span className="text-brand-gradient text-2xl font-extrabold">0{i + 1}</span>
              <div>
                <h3 className="text-lg font-bold text-slate-900">{v.title}</h3>
                <p className="text-slate-600">{v.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
