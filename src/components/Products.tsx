import type { Lang } from '../i18n'
import { dictionaries } from '../i18n'
import { products } from '../data/products'

export function Products({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].products
  const names = { notes: t.notes, next: { name: t.next.name, tagline: '', description: t.next.description } }
  return (
    <section id="products" className="scroll-mt-16 py-24" aria-labelledby="products-title">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">{t.eyebrow}</p>
        <h2 id="products-title" className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {t.title}
        </h2>
        <p className="mt-3 max-w-xl text-slate-600">{t.lead}</p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => {
            const c = names[p.id as keyof typeof names]
            const live = p.status === 'live'
            return (
              <li
                key={p.id}
                className={
                  'flex flex-col rounded-2xl border p-7 transition ' +
                  (live
                    ? 'border-slate-200 bg-white shadow-sm hover:-translate-y-1 hover:shadow-xl'
                    : 'border-dashed border-slate-300 bg-slate-50')
                }
              >
                <span
                  className={
                    'mb-4 w-fit rounded-full px-3 py-1 text-xs font-semibold ' +
                    (live ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-600')
                  }
                >
                  {live ? t.live : t.soon}
                </span>
                <h3 className="text-xl font-bold text-slate-900">{c.name}</h3>
                {c.tagline && <p className="text-sm font-medium text-blue-700">{c.tagline}</p>}
                <p className="mt-3 flex-1 text-slate-600">{c.description}</p>
                {p.url && (
                  <a
                    href={p.url}
                    className="mt-6 inline-flex items-center gap-1 font-semibold text-blue-700 hover:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    {t.open}
                    <span aria-hidden="true">→</span>
                    <span className="sr-only"> {c.name}</span>
                  </a>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
