import type { Lang } from '../i18n'
import { dictionaries } from '../i18n'
import { BrandWordmark } from './BrandLogo'

export function Footer({ lang }: { lang: Lang }) {
  const d = dictionaries[lang]
  const link = 'text-slate-300 transition hover:text-white'
  return (
    <footer className="bg-ink text-sm text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-3">
        <div>
          <BrandWordmark light />
          <p className="mt-4 max-w-xs">{d.footer.tagline}</p>
        </div>
        <nav aria-label={d.footer.sections}>
          <p className="font-semibold text-white">{d.footer.sections}</p>
          <ul className="mt-4 space-y-2">
            <li><a className={link} href="#products">{d.nav.products}</a></li>
            <li><a className={link} href="#process">{d.nav.process}</a></li>
            <li><a className={link} href="#about">{d.nav.about}</a></li>
          </ul>
        </nav>
        <div>
          <p className="font-semibold text-white">{d.products.eyebrow}</p>
          <ul className="mt-4 space-y-2">
            <li><a className={link} href="https://notes.d4nthi.com">Notes</a></li>
            <li><a className={link} href="mailto:info@d4nthi.com">info@d4nthi.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} D4nthi. {d.footer.rights}
      </div>
    </footer>
  )
}
