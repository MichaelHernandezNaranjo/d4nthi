import type { Lang } from '../i18n'
import { dictionaries } from '../i18n'

export function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="border-t border-slate-200 py-8 text-sm text-slate-600">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6">
        <span className="font-bold text-slate-900">
          D4nthi<span className="text-blue-600">.</span>
        </span>
        <span>
          © {new Date().getFullYear()} D4nthi. {dictionaries[lang].footer.rights}
        </span>
      </div>
    </footer>
  )
}
