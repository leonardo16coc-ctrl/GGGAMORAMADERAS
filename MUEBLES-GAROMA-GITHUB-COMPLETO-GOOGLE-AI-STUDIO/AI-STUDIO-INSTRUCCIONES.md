# Importar Muebles Garoma en Google AI Studio

1. Descomprime `MUEBLES-GAROMA-GITHUB-COMPLETO.zip`.
2. En GitHub crea un repositorio nuevo llamado `muebles-garoma`.
3. Usa `Add file` → `Upload files` y sube todos los archivos/carpetas de este proyecto. Los archivos `index.html`, `package.json`, `src/` y `public/` deben estar en la **raíz del repositorio**.
4. En Google AI Studio abre **Build**, pulsa **+** (Agregar archivos), elige **Importar desde GitHub**, autoriza GitHub si es necesario y selecciona `muebles-garoma`.
5. Pega el texto sugerido debajo para que el agente preserve el diseño y funcionalidad.

## Prompt para AI Studio

> Importa este proyecto existente Muebles Garoma respetando el sitio actual (HTML, CSS, JavaScript y fotos de `public/media`). Conserva la identidad negro/blanco/verde, las fotos de organizadores al inicio, y mueve el formulario “Pon tus medidas” más abajo. Mantén catálogo, carrito, medidas, CTA contra entrega, WhatsApp 33 2192 3079, envíos locales y nacionales, testimonios sin inventar, y el SEO. No agregues precios o medidas inventadas. Prioriza que cargue de forma estable en Safari, Chrome y móviles. Mantén rutas y funciones existentes y prueba las imágenes antes de modificar.

## Ejecutar y publicar

- `npm run dev`: abre el servidor local en `http://localhost:5173` (configurable con `PORT`).
- `npm run build`: genera `dist/` listo para hosting.
- GitHub Pages: Settings → Pages → Build and deployment → GitHub Actions. El archivo `.github/workflows/deploy-pages.yml` se ocupa de compilar y desplegar tras publicar en `main`.

**Importante:** importarlo en AI Studio no publica automáticamente la tienda. El envío por WhatsApp es iniciado por el cliente; los pagos reales con tarjeta no están configurados como pasarela automática.
