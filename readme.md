# Features
**Gulp: Sass, Browser-sync, Cssnano, Sourcemaps css, Plumber**

Minimal css frontend framework scalable y extensible basado en milligram y core.css

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
  - Una vez hecho lo anterior abrir una términal en esta carpeta y ejecutar:

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
Usar sass mixin responsive helpers `sass/mixin/_media_queries.scss`

Ejemplo de uso `@include maxw(xs){};` para  `@media (max-width: 767px){};`

O usar `@include minw(xs){};` para  `@media (min-width: 768px){};`

### Sass extensible buttons

Usar varible $buttons para agregar nuevos bottons de forma fácil con el mixin generator

```scss
$buttons: (
  second: #606c76,
  black: black
);

```

### Existing mixin media queries for default:
Mixin `maxw($breakpoint)` con parámetros **lg** = 80rem , **md** = 64rem , **sm** = 48rem , **xs** = 32rem.

Ejemplo `@include maxw(md){...};`  output  `@media (max-width: 64rem){...};`

Mixin `minw($breakpoint)` con parámetros **lg** = 80rem , **md** = 64rem , **sm** = 48rem , **xs** = 32rem.

Ejemplo `@include minw(xs){...};`  output  `@media (max-width: 732rem){...};`


#### Dependencies

  - Normalize css

License
----
MIT
