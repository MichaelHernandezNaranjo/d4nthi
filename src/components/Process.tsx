import type { Lang } from '../i18n'
import { dictionaries } from '../i18n'

export function Process({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].process
  return (
    <section id="process" className="scroll-mt-16 bg-slate-50 py-24" aria-labelledby="process-title">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">{t.eyebrow}</p>
        <h2 id="process-title" className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{t.title}</h2>
        <p className="mt-3 text-slate-600">{t.lead}</p>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.steps.map((s, i) => (
            <li key={s.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <span className="bg-brand-gradient-deep flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-white">{i + 1}</span>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
