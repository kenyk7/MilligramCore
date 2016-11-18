# Features
**Gulp: Sass, Browser-sync, Cssnano, Sourcemaps css, Plumber**

Minimal css frontend framework scalable and extensible baased milligram and use grid core.css

## MilligramCore

Pasos a seguir para utilizar el automatizador de tareas **Gulp**

### Requisitos:
  - Tener instalado **nodejs** y **npm**
  - Instalar **gulp**, **bower** y **browser-sync** de forma **global**

```sh
$ npm install -g gulp bower browser-sync
```
  - Una vez instalados los paquetes globales iniciamos la instalación de los paquetes locales de desarrollo 

```sh
$ npm install
$ bower install
```

  - Lo siguiente es abrir el archivo **gulpfile.js** y hacer la siguientes ajustes:
  - Una vez hecho lo anterior abrir una terminal en esta carpeta y ejecutar:

```sh
$ gulp serve
```
```sh
$ gulp
```
```sh
$ gulp dist
```

**NOTA:**
  - Con **gulp serve** solo se activa el modo de desarrollo en vivo(**.php|.html**).
  - Con **gulp** se activa también el desarrollo en vivo con escucha de **todos** los archivos de desarrollo de la carpeta **src/(js,sass,img)**  + **.php**
  - y con **gulp dist** generas los archivos para producción y ya puedes enviar los cambios al git
  - la carpeta assets es  la carpeta de dist por default.

**Recomendación**

En caso de errores prueba instalar de nuevo los paquetes de node y bower
```sh
$ npm install
$ bower install
```

## Sass utils core
Use sass mixin responsive helpers file in `sass/mixin/_media_queries.scss`

Example use `@include maxw(xs){};` for  `@media (max-width: 767px){};`

Or use `@include minw(xs){};` for  `@media (min-width: 768px){};`

### Sass extensible buttons

Use var $buttons for add type buttons for easy generator

```scss
$buttons: (
  second: #606c76,
  black: black
);

```

### Existing mixin media queries for default:
Mixin `maxw($breakpoint)` with parameters **lg** = 80rem , **md** = 64rem , **sm** = 48rem , **xs** = 32rem.

Example `@include maxw(md){...};`  output  `@media (max-width: 64rem){...};`

Mixin `minw($breakpoint)` with parameters **lg** = 80rem , **md** = 64rem , **sm** = 48rem , **xs** = 32rem.

Example `@include minw(xs){...};`  output  `@media (max-width: 732rem){...};`


#### Dependencies

  - Normalize css

License
----
MIT
