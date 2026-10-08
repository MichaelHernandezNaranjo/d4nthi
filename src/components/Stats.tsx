import type { Lang } from '../i18n'
import { dictionaries } from '../i18n'

export function Stats({ lang }: { lang: Lang }) {
  return (
    <section aria-label="D4nthi" className="border-b border-slate-200 bg-white">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-6 py-12 lg:grid-cols-4">
        {dictionaries[lang].stats.map((s) => (
          <div key={s.label} className="text-center lg:border-r lg:border-slate-200 lg:last:border-0">
            <dt className="sr-only">{s.label}</dt>
            <dd>
              <span className="text-brand-gradient block text-4xl font-extrabold tracking-tight">{s.value}</span>
              <span className="mt-1 block text-sm text-slate-600">{s.label}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
