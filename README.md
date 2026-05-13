# 21 Coordinates Studio — Premium Architecture Landing

Sitio web estático, minimalista y editorial para **21 Coordinates Studio** (Architectural Designer), diseñado para GitHub Pages.

## Qué incluye
- Navegación sticky con efecto glass + menú mobile.
- Hero con composición abstracta de coordenadas (CSS puro).
- Secciones: Studio, Work, Services, Process, Manifesto, Contact.
- Placeholders premium para proyectos futuros.
- Animaciones suaves con Intersection Observer.
- SEO base (meta tags, OG, canonical, favicon SVG inline).
- Footer con año dinámico.

## Estructura

```text
/
├── index.html
├── README.md
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   └── img/
│       └── .gitkeep
└── .nojekyll
```

## Previsualización local
Abre `index.html` directamente en tu navegador, o usa un servidor estático:

```bash
python3 -m http.server 8080
```

Luego visita `http://localhost:8080`.

## Cómo editar textos y branding
1. **Textos principales:** `index.html`.
2. **Slogan y datos de contacto:** bloque `#contact` y footer en `index.html`.
3. **Estilo visual (paleta, tipografía, spacing):** `assets/css/styles.css` en `:root` y bloques de sección.
4. **Animaciones/comportamiento:** `assets/js/main.js`.

## Cómo agregar proyectos reales
En `index.html`, ubica el bloque `#work` y duplica un `<article class="project-card">`.
- Cambia título, categoría, año y descripción.
- Reemplaza el placeholder CSS (`m1`, `m2`, etc.) por una imagen real con:
  - `<img src="assets/img/tu-proyecto.jpg" alt="Descripción del proyecto" />`
  - O dejando un `div.project-media` con nuevo fondo.

## Publicar en GitHub Pages
1. Sube el repo a GitHub.
2. Ve a **Settings → Pages**.
3. En **Build and deployment**, selecciona:
   - **Source:** Deploy from a branch
   - **Branch:** `main` (root)
4. Guarda y espera el deploy.
5. Tu sitio quedará en: `https://<usuario>.github.io/<repo>/`

> Cuando tengas dominio propio, actualiza el `<link rel="canonical">` y `og:url` en `index.html`.

## Personalización futura recomendada
- Integrar galería de proyectos con páginas individuales.
- Añadir formulario real (Formspree / Netlify Forms / backend propio).
- Agregar sistema multilenguaje ES/EN.
- Optimizar Open Graph con imagen de portada real de la marca.
