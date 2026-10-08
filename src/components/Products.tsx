import type { Lang } from '../i18n'
import { dictionaries } from '../i18n'
import { products } from '../data/products'

export function Products({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].products
  const notes = products.find((p) => p.id === 'notes')!
  const soon = products.filter((p) => p.status === 'soon')
  return (
    <section id="products" className="scroll-mt-16 py-24" aria-labelledby="products-title">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">{t.eyebrow}</p>
        <h2 id="products-title" className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{t.title}</h2>
        <p className="mt-3 max-w-xl text-slate-600">{t.lead}</p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <article className="bg-brand-gradient-deep relative overflow-hidden rounded-3xl p-8 text-white shadow-xl lg:col-span-2">
            <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/15 blur-2xl" />
            <span className="relative rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">{t.live}</span>
            <h3 className="relative mt-5 text-3xl font-extrabold">{t.notes.name}</h3>
            <p className="relative text-sm font-medium text-white/90">{t.notes.tagline}</p>
            <p className="relative mt-4 max-w-lg text-white/90">{t.notes.description}</p>
            <ul className="relative mt-6 space-y-2 text-sm">
              {t.notes.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5" /></svg>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={notes.url}
              className="relative mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {t.open} <span aria-hidden="true">→</span>
              <span className="sr-only"> {t.notes.name}</span>
            </a>
          </article>

          {soon.map((p) => (
            <article key={p.id} className="flex flex-col rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-8">
              <span className="w-fit rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">{t.soon}</span>
              <h3 className="mt-5 text-xl font-bold text-slate-900">{t.next.name}</h3>
              <p className="mt-3 text-slate-600">{t.next.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
