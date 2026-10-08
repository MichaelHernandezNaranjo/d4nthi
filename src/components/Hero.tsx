import type { Lang } from '../i18n'
import { dictionaries } from '../i18n'

export function Hero({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].hero
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(37,99,235,0.10),transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:56px_56px] opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
      />
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-24 sm:pt-32">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-700">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
          {t.eyebrow}
        </p>
        <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-7xl">
          {t.title} <span className="text-blue-600">{t.highlight}</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-slate-600">{t.lead}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#products"
            className="rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            {t.cta1}
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            {t.cta2}
          </a>
        </div>
      </div>
    </section>
  )
}
