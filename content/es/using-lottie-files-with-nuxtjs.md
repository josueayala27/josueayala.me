---
uuid: 5899b8f0-fa1a-403f-aaaa-dcf7bd030570
title: Usando archivos de lottie con NuxtJS
description: A menudo usar animaciones en nuestra web no es un trabajo facil, por lo que en este blog vamos a aprender a usar animaciones lottie dentro de nuestro proyecto con nuxtJS facilmente.
allowComents: false
isPublished: true
---

## ¿Qué es un lottie?

Un lottie es simplemente un archivo `JSON` que contiene animaciones vectoriales de nuestras animaciones, este formato nos permite mantener una animación codificada de alta calidad y rendimiento, mostrando fidelidad y compatibilidad entre diferentes dispositivos, [leer más](https://lottiefiles.com/what-is-lottie).

## Instalando el paquete lottie-web

Vamos a hacer uso del paquete `lottie-web` que es proporcionado y patrocinado por [airbnb.io](https://airbnb.io), para configurarlo, solo tienes que agregar la dependencia con `yarn` o `npm`.

```shell
yarn add lottie-web
```

[comment]: <> (Ver más link de la libreria.)

[comment]: <> (Una vez se haya finalizado la instalación no es necesario agregarlo como complemento en `nuxt.config.js`.)

## Usando el paquete

Primeramente vamos a realizar una importación del paquete dentro de nuestro componente.

```js
import lottie from 'lottie-web';
```

Ahora tendremos la refererencia `lottie` que se podrá utilizar en cualquier porción de código, para eso vamos a crear un método que nos permitira iniciar nuestra animación:

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

  // Init instance animation
  animation.play();
}
```

<Alert type="warning">
  <strong>Nota:</strong> <code>path</code> recibe la ruta en donde se encuentra tu animación, tener en cuenta que se esta accediendo a un archivo estatico, por lo que la carpeta debe de estar dentro de <code>static</code>, ejemplo: <code>static/animations/{file}.json</code>
</Alert>

Nuestro método `loadLottie(...)` recibe 2 parametros, el primer parametro es un elemento `HTML` que nos servirá de contenedor para nuestra animación:

```html
<div ref="animation-container"></div>
```

El segundo parametro es el nombre del archivo, basta solamente usar el nombre del archivo sin la extensión `.json`.

Para usar la animación vamos a hacer uso del hook [mounted](https://vuejs.org/api/options-lifecycle.html#mounted), _Esto ejecutará nuestra animación una vez se cargue la pagina_.

```js
mounted() {
  this.loadLottie('animation-container', 'animation-1');
}
```

¡**Listo**, eso es todo! ahora tendremos como resultado una bella animación reproduciendose en nuestro sitio:

<Lottie src="114334-hello-apple"></Lottie>

## Personalizar animación

De aquí en adelante la única limitante es tu imaginación, puedes crear diferentes configuraciones y personalizaciones posibles gracias a la amplia [api de configuración](https://airbnb.io/lottie/#/web) que nos proporciona el paquete `lottie-web`, incluso puedes hacer uso de los diferentes eventos como `complete`, `loopComplete`, entre otros, por ejemplo:

```js
animation.addEventListener('loopComplete', () => {
  console.log('The loop is complete');
});
```

Puedes mandarme tus proyectos asombrosos haciendo uso de esta hermosa librería.
