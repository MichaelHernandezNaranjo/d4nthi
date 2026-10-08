export interface Product {
  id: string
  url?: string
  /** Key into the dictionary; products without url render as "coming soon". */
  status: 'live' | 'soon'
}

/** Add new apps here (and their texts in src/i18n). */
export const products: Product[] = [
  { id: 'notes', url: 'https://notes.d4nthi.com', status: 'live' },
  { id: 'next', status: 'soon' },
]
