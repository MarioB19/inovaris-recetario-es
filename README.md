# Landing — Recetas que Sí Puedo Comer (es / MX)

Landing de venta del recetario para personas con diabetes. Arquitectura Inovaris
(Next.js App Router, 100% JavaScript, Tailwind, Pixel manual con dedupe,
HotmartSrcListener). Construida con la skill `landing-inovaris`.

## Correr en local
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
```

## Lo único que se cambia por landing
- `components/FacebookPixel.js` → `PIXEL_ID` (actual: 2524905684595792)
- `components/FinalCta.js` y `components/Closing.js` → `BASE_CHECKOUT_URL`
  (HOY es PLACEHOLDER → reemplazar por la URL real de Hotmart: pay.hotmart.com/XXXXX)
- `lib/copy.js` → todo el texto
- `public/*.webp` → imágenes

## Deploy (resumen)
GitHub (repo `landing-recetario-es`) → Netlify (build) → CNAME en Hostinger
`recetario-es.inovaris.online` → target de Netlify. Detalle en la nota
`Landing — Recetario — es — 2026-06-21.md`.

## Pendiente antes de pautar
1. Reemplazar `BASE_CHECKOUT_URL` (x2) por el checkout real de Hotmart.
2. Testimonios reales en `lib/copy.js` (`testimonials.items`) tras la validación.
