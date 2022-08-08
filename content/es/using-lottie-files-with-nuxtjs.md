---
uuid: 5899b8f0-fa1a-403f-aaaa-dcf7bd030570
title: Usando archivos lottie con NuxtJS
description: A menudo usar animaciones en nuestra web no es un trabajo fácil, por lo que en este blog vamos a aprender a usar animaciones lottie dentro de nuestro proyecto con nuxtJS fácilmente.
allowComents: false
isPublished: true
---

## ¿Qué es un lottie?

Un lottie es simplemente un archivo `JSON` que contiene configuraciones vectoriales de nuestras animaciones, este formato nos permite mantener una animación codificada de alta calidad y rendimiento, mostrando fidelidad y compatibilidad entre diferentes dispositivos, [leer más](https://lottiefiles.com/what-is-lottie).

[Ver archivo lottie de ejemplo ->](https://assets5.lottiefiles.com/packages/lf20_rbtawnwz.json)

## Instalando el paquete lottie-web

Vamos a hacer uso del paquete `lottie-web` que es proporcionado y patrocinado por [airbnb.io](https://airbnb.io), para configurarlo solo tienes que agregar la dependencia con `yarn` o `npm`.

```shell
yarn add lottie-web
```

[comment]: <> (Ver más link de la libreria.)

[comment]: <> (Una vez se haya finalizado la instalación no es necesario agregarlo como complemento en `nuxt.config.js`.)

## Usando el paquete

Primeramente, vamos a realizar una importación del paquete dentro de nuestro componente.

```js
import lottie from 'lottie-web';
```

Ahora tenemos la referencia `lottie` que se podrá utilizar en cualquier porción de código, para eso vamos a crear un método que nos permitirá generar una instancia de nuestra animación:

```js
loadLottie(reference, file) {
  // Lottie config instance
  const animation = lottie.loadAnimation({
    container: this.$refs[reference],
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: `${window.location.origin}/animations/${file}.json`,
  });

  // Init animation
  animation.play();
}
```

Repasemos algunos puntos claves:

- `container`: Elemento DOM sobre el que se renderiza la animación
- `renderer`: `svg` / `canvas` / `html` para configurar el renderizador.
- `loop`: `true` / `false` / `number`
- `autoplay`: `true` / `false` la animación debería comenzar a reproducirse tan pronto como esté lista.
- `path`: Ruta relativa al objeto de animación. (Los datos de animación y la ruta son mutuamente excluyentes).

Ver más información de la [api](http://airbnb.io/lottie/#/web).

<Alert type="warning">
  <strong>Nota:</strong> <code>path</code> recibe la ruta relativa de tu animación, por lo que todas tus animaciones deben estar dentro de la carpeta <code>static</code>, ejemplo: <code>static/animations/{file-name}.json</code>
</Alert>

Nuestro método `loadLottie(...)` recibe 2 parámetros, el primer parámetro es un elemento `HTML` que nos servirá de contenedor para nuestra animación:

```html
<div ref="animation-container"></div>
```

El segundo parámetro es el nombre del archivo, basta solamente usar el nombre sin la extensión `.json`.

Para usar la animación vamos a hacer uso del hook [mounted](https://vuejs.org/api/options-lifecycle.html#mounted), Esto ejecutará nuestra animación una vez se cargue la página.

```js
mounted() {
  this.loadLottie('animation-container', 'animation-1');
}
```

¡**Listo**, eso es todo! Ahora tendremos como resultado una bella animación reproduciéndose en nuestro sitio:

<Lottie src="78790-hello"></Lottie>

## Complementos de animación

De aquí en adelante la única limitante es tu imaginación, puedes crear diferentes configuraciones y personalizaciones gracias a la amplia [api de configuración](https://airbnb.io/lottie/#/web) que nos proporciona el paquete `lottie-web`, incluso puedes hacer uso de los diferentes eventos como `onComplete, onLoopComplete, onEnterFrame, onSegmentStart`, por ejemplo:

```js
animation.addEventListener('loopComplete', () => {
  console.log('Execute function...');
});
```

Esta es solamente una pequeña referencia de uso, puedes echar a volar tu imaginación y no dudes en mandarme tus proyectos asombrosos haciendo uso de esta hermosa librería.
