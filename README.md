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
  (✅ cableada: https://murocraft6.gumroad.com/l/vwhns?wanted=true)
- `lib/copy.js` → todo el texto
- `public/*.webp` → imágenes

## Deploy (resumen)
GitHub (repo `landing-recetario-es`) → Netlify (build) → CNAME en Hostinger
`recetario-es.inovaris.online` → target de Netlify. Detalle en la nota
`Landing — Recetario — es — 2026-06-21.md`.

## Pendiente antes de pautar
1. ~~Reemplazar `BASE_CHECKOUT_URL` (x2)~~ ✅ checkout real de Gumroad cableado (01-jul-2026).
2. Testimonios reales en `lib/copy.js` (`testimonials.items`) tras la validación.

> Nota: el componente `HotmartSrcListener` y las claves `hotmart_src` / `hotmart_fbclid`
> conservan el nombre por compatibilidad, pero son genéricos: solo guardan `src`/`fbclid`
> y se anexan a la URL de Gumroad. No hace falta renombrarlos. Pasarela: Gumroad —
> ver `Migración a Gumroad — Moneda, Riesgo y Proceso — 2026-06-29.md`.
