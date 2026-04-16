# Portafolio personal (React + Vite)

Portafolio moderno, minimalista y profesional construido con React + Vite, pensado para complementar tu CV y causar una buena impresión a reclutadores.

## Scripts

- `npm install` — instala dependencias
- `npm run dev` — entorno de desarrollo
- `npm run build` — build de producción
- `npm run preview` — previsualizar build

## Estructura principal

- `src/data/siteData.js`: archivo central con tus datos personales y contenido.
- `src/components/`: componentes reutilizables (Navbar, Cards, Timeline, Footer…).
- `src/sections/`: secciones de la landing (Hero, Sobre mí, Habilidades, Proyectos, Experiencia, Contacto).
- `src/styles/globals.css`: estilos globales, layout, modo oscuro y diseño.

## Despliegue en Vercel

1. Sube este proyecto a un repositorio de GitHub.
2. En Vercel, importa el repositorio.
3. Deja el comando de build por defecto: `npm run build`.
4. Deja el directorio de salida por defecto: `dist`.

El resto de personalización se hace principalmente en `src/data/siteData.js`.
