# Muebles Garoma — sitio web completo

Tienda de muebles en español, con diseño negro, blanco y verde, fotos de estudio, listado de **organizadores primero**, catálogo, productos con precios conocidos, carrito, y el formulario **Pon tus medidas** más abajo, que abre WhatsApp para solicitar una cotización.

## Iniciar en computadora / Google AI Studio

Este es un proyecto **HTML/CSS/JavaScript + Node.js sin dependencias npm**, sin React ni servidor de pagos. Compatible con importación desde GitHub en Google AI Studio (modo Build).

```bash
npm run dev
```

Abre `http://localhost:5173` (o el puerto indicado por `PORT`).

Para compilar el sitio para hosting:

```bash
npm run build
```

Los archivos de publicación se generan en `dist/`.

## Subir a GitHub y luego Google AI Studio

1. Crea en GitHub un repositorio, por ejemplo `muebles-garoma`.
2. Extrae el ZIP y sube **todos los archivos y carpetas**, no el ZIP como archivo único.
3. En [Google AI Studio](https://aistudio.google.com/) entra a **Build**.
4. Pulsa **+ (Agregar archivos)** y elige **Importar desde GitHub**.
5. Selecciona el repositorio e indica que conserve el diseño y las fotos del catálogo.

También puedes publicarlo automáticamente con GitHub Pages usando el workflow incluido en `.github/workflows/deploy-pages.yml`; habilita **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Estructura

- `index.html`: portada, catálogo, formularios, SEO, productos destacados y secciones.
- `src/styles.css`: estilos adaptables y colores Garoma.
- `src/app.js`: productos, galería, carrito, cálculo de envíos y formularios WhatsApp.
- `public/media/`: fotografías de estudio, vistas adicionales, logotipo e iconos utilizados.
- `metadata.json`: permisos de localización opcional para Google AI Studio.
- `tools/serve.mjs`: servidor de desarrollo sin dependencias.
- `tools/build.mjs`: genera la carpeta `dist/` sin dependencias.
- `.github/workflows/deploy-pages.yml`: publicación con GitHub Pages.

## Configuración de negocio

- **WhatsApp:** +52 33 2192 3079 (busca `523321923079` en `src/app.js` y `index.html`).
- **Envíos locales anunciados:** Guadalajara y zona habitual $150 MXN; Tlajomulco $200 MXN.
- **Resto de México:** el envío se cotiza individualmente.
- **Contra entrega:** siempre sujeto a confirmación de cobertura y disponibilidad.
- **Visa, Mastercard, Mercado Pago:** la web no realiza cargos ni implementa una pasarela. Los métodos deben confirmarse con el vendedor.
- **Medidas:** no inventar medidas de productos. El formulario permite enviar alto, ancho y fondo directamente a WhatsApp.
- **Testimonios:** no mostrar reseñas ni promedios inventados.

## Notas

Las fotografías se ambientaron/retocaron digitalmente a partir de referencias de muebles. Antes de vender, verifica que el número de compartimentos, la distribución y los acabados coincidan con la pieza física.

El mapa usa Leaflet/OpenStreetMap y necesita conexión a Internet. El GPS requiere permiso explícito del usuario y normalmente HTTPS. El formulario abre WhatsApp con mensaje preparado; el cliente confirma el envío manualmente.

Todo el catálogo visual principal está **dentro del repositorio**: no depende de enlaces externos para las fotos de los muebles.
