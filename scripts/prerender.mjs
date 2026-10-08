// Prerenders every language version into static HTML (SEO) after the client and SSR builds.
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const dist = resolve('dist/client')
const { render, dictionaries, langPath, SITE_URL } = await import(
  pathToFileURL(resolve('dist/server/entry-server.js')).href
)
const template = await readFile(resolve(dist, 'index.html'), 'utf8')
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

const langs = ['es', 'en']
const url = (l) => SITE_URL + langPath[l]
const image = `${SITE_URL}/og-image.png`

function head(lang) {
  const m = dictionaries[lang].meta
  const other = lang === 'es' ? 'en' : 'es'
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'D4nthi',
        url: SITE_URL,
        logo: `${SITE_URL}/favicon.svg`,
        email: 'info@d4nthi.com',
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'D4nthi',
        inLanguage: lang,
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Notes',
        url: 'https://notes.d4nthi.com',
        applicationCategory: 'ProductivityApplication',
        operatingSystem: 'Web',
        description: dictionaries[lang].products.notes.description,
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
    ],
  }
  return [
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.description)}" />`,
    `<link rel="canonical" href="${url(lang)}" />`,
    ...langs.map((l) => `<link rel="alternate" hreflang="${l}" href="${url(l)}" />`),
    `<link rel="alternate" hreflang="x-default" href="${url('es')}" />`,
    `<meta name="robots" content="index,follow,max-image-preview:large" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="D4nthi" />`,
    `<meta property="og:title" content="${esc(m.title)}" />`,
    `<meta property="og:description" content="${esc(m.description)}" />`,
    `<meta property="og:url" content="${url(lang)}" />`,
    `<meta property="og:locale" content="${m.ogLocale}" />`,
    `<meta property="og:locale:alternate" content="${dictionaries[other].meta.ogLocale}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(m.title)}" />`,
    `<meta name="twitter:description" content="${esc(m.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`,
  ].join('\n    ')
}

for (const lang of langs) {
  const html = template
    .replace('<html lang="es">', `<html lang="${lang}">`)
    .replace('<!--head-->', head(lang))
    .replace('<!--app-->', render(lang))
  const dir = lang === 'es' ? dist : resolve(dist, 'en')
  await mkdir(dir, { recursive: true })
  await writeFile(resolve(dir, 'index.html'), html)
}

const today = new Date().toISOString().slice(0, 10)
const alternates = (l) =>
  [...langs.map((x) => `<xhtml:link rel="alternate" hreflang="${x}" href="${url(x)}"/>`),
   `<xhtml:link rel="alternate" hreflang="x-default" href="${url('es')}"/>`].join('')
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${langs.map((l) => `  <url><loc>${url(l)}</loc><lastmod>${today}</lastmod>${alternates(l)}</url>`).join('\n')}
</urlset>
`
await writeFile(resolve(dist, 'sitemap.xml'), sitemap)
console.log('Prerendered:', langs.map(url).join(', '))
