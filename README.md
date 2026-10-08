# D4nthi landing

Landing de https://d4nthi.com: React 18 + TypeScript + Tailwind CSS v4 (Vite), prerenderizada
a HTML estático (SEO) en español (`/`) e inglés (`/en/`).

## Desarrollo

```bash
npm install
npm run dev          # http://localhost:5173
npm run lint
npm run build        # typecheck + build + prerender -> dist/client
```

## Agregar un producto

1. Añade una entrada en `src/data/products.ts`.
2. Añade sus textos en `src/i18n/es.ts`, `en.ts` y `types.ts`.
3. Si es una app real, agrégala también al JSON-LD en `scripts/prerender.mjs`.

## Estructura

```
src/components   secciones de la página
src/data         productos
src/i18n         diccionarios tipados (es / en)
scripts          prerender (HTML por idioma, meta SEO, JSON-LD, sitemap)
public           favicon, og-image, robots.txt, manifest
deploy           nginx.conf, deploy.sh, README.md
```

Despliegue: ver [deploy/README.md](deploy/README.md).
