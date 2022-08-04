---
uuid: 5899b8f0-fa1a-403f-aaaa-dcf7bd030570
title: Using lottie files with NuxtJS
description: A menudo usar animaciones en nuestra web no es un trabajo facil, por lo que en este blog vamos a aprender a usar animaciones lottie dentro de nuestro proyecto con nuxtJS facilmente.
allowComents: false
isPublished: true
---

## ¿Qué es un lottie?

Un lottie es simplemente un archivo `JSON` que contiene animaciones vectoriales de nuestras animaciones, este formato nos permite mantener una animación codificada de alta calidad, mostrando fidelidad y compatibilidad entre diferentes dispositivos, <a href="https://lottiefiles.com/what-is-lottie" target="_blank">leer más</a>.

## Instalando el paquete lottie-web

Vamos a hacer uso del paquete `lottie-web` que es proporcionado y patrocinado por <a href="https://airbnb.io" target="_blank">airbnb.io</a>

Para configurarlo, solo tiene que agregar la dependencia con Yarn o NPM.

```shell
yarn add lottie-web
```

Una vez se haya finalizado la instalación no es necesario agregarlo como complemento en `nuxt.config.js`.

## Usando el paquete

Primeramente vamos a importar nuestro paquete dentro de nuestro pagina o componente donde queramos utilizar un archivo lottie.

```js
import lottie from 'lottie-web';
```

Ahora tendremos la refererencia `lottie` que se podrá utilizar en cualquier porción de código, para eso vamos a crear un método que nos permitira iniciar nuestra animación:

```js
loadLottie(reference, file) {
  // Lottie config instance
  const animation = lottie.loadAnimation({
    container: this.$refs.reference,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: `animations/${file}.json`,
  });

  // Init instance animation
  animation.play();
}
```

Nuestro método `loadLottie(...)` recibe 2 parametros, el primer parametro es un elemento `HTML` que nos servira de contenedor
