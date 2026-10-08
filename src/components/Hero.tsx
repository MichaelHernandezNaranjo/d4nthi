import type { Lang } from '../i18n'
import { dictionaries } from '../i18n'
import { BrandLogo } from './BrandLogo'

export function Hero({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].hero
  const notes = dictionaries[lang].products.notes
  return (
    <section className="bg-brand-gradient-deep relative overflow-hidden text-white">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/15 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -left-24 h-[28rem] w-[28rem] rounded-full bg-black/20 blur-3xl" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.07)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-28 pt-24 lg:grid-cols-[1.15fr_1fr] lg:pt-32">
        <div className="animate-[rise_.7s_ease-out_both]">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            {t.eyebrow}
          </p>
          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {t.title} <span className="text-white/80">{t.highlight}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/90">{t.lead}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#products" className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              {t.cta1}
            </a>
            <a href="#contact" className="rounded-lg border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              {t.cta2}
            </a>
          </div>
        </div>

        <div className="animate-[rise_.9s_ease-out_both] lg:justify-self-end">
          <div className="w-full max-w-sm animate-[float_6s_ease-in-out_infinite] rounded-3xl border border-white/30 bg-white/15 p-6 shadow-2xl backdrop-blur-md">
            <div className="flex items-center gap-3">
              <BrandLogo className="h-11 w-11" translucent />
              <div>
                <p className="font-bold">{notes.name}</p>
                <p className="text-xs text-white/85">{t.cardLabel}</p>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-sm">
              {t.cardItems.map((i) => (
                <li key={i} className="flex items-center gap-3 rounded-xl bg-white/15 px-4 py-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
