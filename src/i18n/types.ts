export type Lang = 'es' | 'en'

export interface Dictionary {
  meta: { title: string; description: string; ogLocale: string }
  nav: {
    products: string
    process: string
    about: string
    contact: string
    cta: string
    skip: string
    switchTo: string
  }
  hero: {
    eyebrow: string
    title: string
    highlight: string
    lead: string
    cta1: string
    cta2: string
    cardLabel: string
    cardItems: string[]
  }
  stats: { value: string; label: string }[]
  products: {
    eyebrow: string
    title: string
    lead: string
    live: string
    soon: string
    open: string
    notes: { name: string; tagline: string; description: string; features: string[] }
    next: { name: string; description: string }
  }
  process: {
    eyebrow: string
    title: string
    lead: string
    steps: { title: string; description: string }[]
  }
  about: {
    eyebrow: string
    title: string
    text: string
    values: { title: string; description: string }[]
  }
  contact: { title: string; text: string; cta: string }
  footer: { tagline: string; sections: string; rights: string }
}
