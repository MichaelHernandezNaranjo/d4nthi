import { es } from './es'
import { en } from './en'
import type { Dictionary, Lang } from './types'

export type { Dictionary, Lang }

export const dictionaries: Record<Lang, Dictionary> = { es, en }

export const SITE_URL = 'https://d4nthi.com'

/** Public path of each language version (Spanish at the root, English under /en/). */
export const langPath: Record<Lang, string> = { es: '/', en: '/en/' }

export function langFromPath(pathname: string): Lang {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'es'
}
