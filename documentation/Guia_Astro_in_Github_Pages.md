## Guía de Instalación de un _Portfolio_ en _GitHub Pages_ Programado en _Astro_

Ya quieras tener simplemente **esta misma página pero con tus datos** o aprender **cómo hacer algo parecido a esta página**, este archivo te ayudará con tu propósito.

<br>

Antes de empezar ten en cuenta que este proyecto se realizó para usar Astro y GitHub Pages, por lo que es posible que el nivel sea muy **básico**, pero **_funcional_**. Las **versiones** y **fechas** al comienzo de este proyecto son:

|||
| ---: | :--- |
| **Proyecto, código y tutorial** | 22 de Agosto de 2026 |
| **Node.js local** | v24.18.0 |
| **Node.js Github** | 22.12.0 |
| **npm** | 11.16.0 |
| **npx** | 11.16.0 |
| **Git** | 2.55.0.windows.1 |
| **TypeScript** | ^7.0.2 |
| **Tailwind** | ^4.3.3 |
|||

> Para comprobar las versiones actuales que se tienen en el sistema se utilizan los siguientes comandos: 
<br>
Node.js> node -v
<br>
Npm> npm -v
<br>
Npx> npx -v
<br>
Git> git --version
<br>
TypeScript y Tailwind en el package.json cuando se instale.

Algunos __comandos__ que podrán ser de utilidad (_ejecutar en la raíz del proyecto_):

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | __Servidor local__ en `http://localhost:4321`. |
| `npm run build` | __Compila__ la página estática optimizada en la carpeta `dist/`. |
| `npm run preview` | __Muestra__ el contenido compilado de `dist/` localmente. |
| `npx astro check` | __Verifica__ errores. |

<br>

---

# Misma Página _pero con tus datos_

## Tu Propio Repositorio

Comienza teniendo un repositorio propio con el código para poder editar todo su contenido eligiendo uno de los métodos más sencillos.

### A- Fork a este proyecto

### B- Plantilla de este proyecto

> **Nota importante**: Si usas esta opción acredita el mérito de código y diseño correspondiente, por favor y gracias. -> Autor: github.com/IsmaelPlaza

## Archivos a editar

* `/astro.config.mjs`
```javascript
15 site: 'https://IsmaelPlaza.github.io', // Sustituir el nombre de usuario por el tuyo. 
16 base: '/', // Sustituir por el nombre del proyecto en caso de no haber llamado al proyecto "NombreDeUsuario.github.io".
```
* `/tailwind.config.mjs`
```javascript
// Sustituye los colores por los que más te gusten, estos son un ejemplo.
// DEFAULT: Modo claro. dark: Modo oscuro. 
// Color base.
19 DEFAULT: '#6366f1',
20 dark: '#818cf8',},
// Color secundario.
22 DEFAULT: '#0ea5e9',
23 dark: '#38bdf8',},
// Color de fondo para las animaciones.
25 DEFAULT: '#ffffff',
26 dark: '#0f172a',},
// Color para cuando la categoría no ha sido seleccionada. "Menos color".
28 DEFAULT: '#64748b',
29 dark: '#94a3b8',

// Sustituye la tipografía que quieras usar. Inter viene descargada e importada en el proyecto.
32 sans: ['Inter', ...fontFamily.sans],},
```

## Configuración necesaria

***Activa GitHub Pages por Fuente "Actions" y activa manualmente el Workflow que permite el despligue en GitHub Pages.***

<br>

---

# Creación de Portfolio en GitHub Pages con Astro desde 0

## Inicialización del Proyecto

Usando la consola de comandos situados en la carpeta donde quieras tener la _carpeta_ contenedora del proyecto (en una consola de comando muevete entre carpetas usando `cd Ruta_de_la_Carpeta`) ejecuta el siguiente comando con las respuestas:
```bash
..\Proyectos> npm create astro <Nombre_cuenta_GitHub>.github.io 

- How would you like to start your new project?> 
"Use minimal (empty) template"

- Install dependencies?
"Yes"

- Initialize a new git repository?
"No" # Lo haremos manual para que no aparezcan pushes "fantasma" de este proyecto "vacio".
```

Este nombre de proyecto con tu nombre de usuario de GitHub permitirá que la _GitHub Page_ esté alojada en la __misma URL raíz de manera más sencilla__. Si pones un nombre de proyecto distinto y quieres la URL raíz deberás llamar al proyecto en _GitHub_ de esa manera igualmente, cualquier otro nombre de proyecto acabará en una URL: ___<Usuario_GitHub>.github.io/<Nombre_Proyecto_en_Github>___.

> **Nota importante**: De manera paralela a no querer pushes fantasma se debe acreditar estar usando la herramienta de Astro. 

### Instalación de Dependencias al Proyecto

---

Estas dependencias son instalaciones de aprendizaje personal. __NO son necesarias para usar Astro__, pero si dan un mejor acabado.

```bash
# Tailwind CSS y Tailwind para tener un mayor dinamismo visual.
..github.io> npx astro add tailwind
# Acepta todo: Instalación de dependencia, creación de página de estilo base "./src/styles/global.css" y modificación de la configuración de Astro para usar Tailwind "./astro.config.mjs".

# Tipografía Inter elegida en este proyecto. Elige la fuente de letra que más te guste para tu proyecto, pero es recomendable instalarla para evitar peticiones externas.
..github.io> npm install @fontsource/inter

# Typescript para poder usar JavaScript tipado.
..github.io> npm install typescript
```

### Archivos de Configuración del Proyecto

---

#### Astro

En la raíz del proyecto modifica o crea el archivo `astro.config.mjs`.

```javascript
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    output: 'static', // Generación estática para Github Pages.
    site: 'https://[Nombre_de_Usuario_Github].github.io', // URL base de GitHub Pages.
    base: '/', // Si tu proyecto no es el nombre del "site" añade el nombre del proyecto tras "/". Ejemplo: '/Portfolio' en vez de '/'.
    integrations: [
        tailwind([applyBaseStyles: false,]),], // Evita estilos básicos y usa directamente el "global.css". SOLO para uso de Tailwind v3, yo uso v4.
  vite: {
    resolve: {alias: {'@': '/src',},}, // Ayuda para llamar al directorio en el código.
    plugins: [tailwindcss()]
  }
});
```

<p align="center">✦ ✦ ✦</p>

#### TypeScript

En la raíz del proyecto modifica o crea el archivo `tsconfig.json` para tener las siguientes opciones.

```json
{
  "extends": "astro/tsconfigs/strict",
  "include": [".astro/types.d.ts", "**/*"],
  "compilerOptions": {
    "baseUrl": ".", // Directorio base.
    "paths": {"@/*": ["src/*"]}, // Ayuda para llamar al directorio en el código.
    "strictNullChecks": true, // Tipado estricto
    "jsx": "preserve" // Para los componentes JSX de Astro.
  },
  "exclude": ["dist"]
}
```

<p align="center">✦ ✦ ✦</p>

#### Archivos para GitHub Pages

Para **desplegar en GitHub Pages** y así comprobar que todo funciona para nuestra página estática (no se tienen en cuenta las pruebas en 'desarrollo' con `npm run dev` que se realicen, se busca que funcione en GitHub Pages, no solo en el ordenador local) se configura el archivo `/.github/workflows/deploy.yml` que realiza un despligue **automático**. Este archivo nos permitirá actualizar la página a partir de lo que se sube a la rama "main" del proyecto GitHub sin necesidad de hacer modificaciones de configuración constantemente. 

##### Deploy automático `/.github/workflows/deploy.yml`.

Este archivo genera un trabajo de __construcción y despliegue__ de Github Actions. Sigue 6 pasos: _comprueba el repositorio, configura Node.js, instala dependencias, construcción de la página con Astro, guardado de la página y despliegue final_.
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22.12.0
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build static site with Astro
        run: npm run build

      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist/

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{steps.deployment.outputs.page_url}}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

<p align="center">✦</p>

##### Desactivar Jekyll con `/public/.nojekyll`.

GitHub Pages puede dar __problemas__ con su motor por defecto __"Jekyll"__. Para este proyecto es mejor bloquear este motor y utilizar el deploy automático que ya se ha configurado.

Para esto solo hace falta generar un archivo en `/public` llamado `.nojekyll`. El archivo _no necesita tener nada_, con el nombre del archivo sirve.

<p align="center">✦</p>

##### Configuración correcta de `/.gitignore`.

Aún no siendo 100% necesario, _subir la menor cantidad de archivos al proyecto de GitHub es una buena práctica_.

Los siguientes archivos y directorios __se pueden ignorar__ en la actualización del proyecto en GitHub si se han generado en algún momento en el desarrollo:
```gitignore
# Directorios
dist/
.astro/
node_modules/

# Archivos de log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Variables de entorno
.env
.env.production
.env.local

# Posibles archivos y directorios de editores, sistemas...
.DS_Store
Thumbs.db
.vscode/
.idea/
```

### Limpieza del proyecto de inicio

---

Los siguientes archivos son __innecesarios para nuestro proyecto__. Son de ayuda/tutorial y documentación empezando por el archivo _README.md_ donde se puede leer información sobre el funcionamiento de Astro, muy recomendable su lectura antes de su eliminación.
* README.md
* AGENTS.md
* CLAUDE.md

### Configuración de GitHub

---

Para poder configurar correctamente el proyecto, sube a GitHub el proyecto como un "proyecto nuevo" de la manera que quieras si aún no lo habías hecho. Recuerda mantener el nombre de proyecto "Nombre_Usuario_Github.github.io" para que salga en la URL raíz y en la rama "main".

En Visual Studio Code:
* En la **pestaña lateral izquierda haz clic en el árbol de nodos** (tercer icono probablemente, debajo del de búsqueda). Si se tienen más proyectos abiertos es probable que los detecte y no salgan los mensajes necesarios. _Cierra todos los proyectos activos y abre en solitario el proyecto_.
* **Inicializar Repositorio** / *Initialize Repository*. Se muestran todos los cambios y archivos que se subirán. Puedes comprobar desde aquí si hay algún archivo/directorio que hayas olvidado meter en el `.gitignore`, pues no debería haber muchos archivos (12).
* **Commit inicial**. Empaqueta con un mensaje descriptivo el primer commit.
* **Publicar rama**. Al ser el primer commit del proyecto, este primer *push* generará la rama "main" directamente. Nos pedirá un **nombre de proyecto** en la barra de comandos superior (poniendo por defecto el nombre del proyecto local) y si queremos que sea **público o privado**. Para GitHub Pages se necesita, en el modelo gratuito, que el proyecto sea público, a no ser que no sea tu caso, el proyecto debe ser **PÚBLICO**.

<p align="center">✦ ✦ ✦</p>

#### GitHub Pages

Con el proyecto subido a GitHub ve a `Configuración/Settings` al apartado de `Pages`. Cambia el `Fuente/Source` a "GitHub Actions". Si quieres cambiarle la URL a un dominio particular que tengas, puedes hacerlo desde este mismo apartado, pero este tutorial no llega hasta ahí, lo siento.

Desde el apartado del proyecto "Actions" podrás ver el workflow de construcción y despligue de la página web. Cualquier cosa que _falle_, edita el archivo `.github/workflows/deploy.yml` para su correcto funcionamiento.

## Personalización del Proyecto (?)
### Personalización del Proyecto (?)

---

#### Tailwind CSS

Para el uso de Tailwind se crea el archivo `tailwind.config.mjs` en la raíz del proyecto. En este archivo se ponen los colores que se usarán en la app, fuentes de tipografía, animaciones, plugins... Estos parámetros son completamente a gusto y _dependientes del uso que vayas a darle en tu código_. 

Puedes echarle un vistazo al código del archivo para hacerte una idea de su uso, pero como resumen:
* El uso específico en mi proyecto fue crear un tema que cambia de modo oscuro a modo claro (o de modo '_DEFAULT_' a modo '_dark_' en el código) mediante la clase 'dark' de \<html\>.
* Tiene los colores específicos para los distintos estados dentro de sus dos modos de vista.
* La fuente de tipografía elegida.
* Animaciones de movimiento.





