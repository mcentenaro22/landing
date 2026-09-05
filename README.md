# Portfolio BIM — starter

Starter de portfolio estático pensado para ir agregando obras una por una.

## Estructura

- `/` → home / portfolio
- `/proyectos/nave-1141/` → ficha completa de la Nave Deportiva
- `/about/` → perfil
- `/public/models/` → IFCs
- `/public/images/` → renders / axonometrías / detalles

## IFC

El proyecto usa `web-ifc-viewer` + WebGL. No es un iframe: el navegador carga y procesa el IFC directamente. El WASM de `web-ifc` se obtiene desde un CDN, y el IFC queda servido desde `/public/models/`.

Para correrlo:

```bash
npm install
npm run dev
```

Abrí la URL que indique Vite. No abras `index.html` con `file://`, porque WebAssembly y la carga del IFC necesitan un servidor HTTP/HTTPS.

Para producción:

```bash
npm run build
```

La carpeta `dist/` se puede desplegar en Netlify, Vercel, Cloudflare Pages, GitHub Pages (con ajuste de base path) o cualquier hosting estático.

## Agregar otra obra

1. Crear `proyectos/nombre-de-obra/index.html`.
2. Agregar el IFC en `public/models/`.
3. Agregar imágenes en `public/images/`.
4. Copiar el patrón de `src/viewer.js` y cambiar la ruta del IFC.
5. Agregar una tarjeta en el home que apunte a `/proyectos/nombre-de-obra/`.

## Importante

Reemplazá `5490000000000` por tu número real de WhatsApp en los links `wa.me`.
