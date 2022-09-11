---
uuid: 5899b8f0-fa1a-403f-aaaa-dcf7bd030570
#title: Dynamic CSS variables using binding with vue 3
title: Variables CSS dinámicas usando v-bind en vue 3
description: Blog post description
allowComents: true
isPublished: true
---

## Binding en `vue.js`

Primeramente vamos a destacar que el concepto `binding` no es nuevo para `vue 3`, sin embargo se vuelve un tema un poco dificil de entender

## `v-bind()` dentro de nuestro CSS

`Vue 3` ha venido sorprendiendo cada vez más, a pesar de la gran espera para sus primeras [liberaciones](https://github.com/vuejs/core/releases), hemos visto que el equipo de [vue.js](https://vuejs.org/about/team.html) sin duda alguna ha estado trabajando arduamente para traernos caracteristicas asombrosas.

**¡Así es!** Ahora podemos ocupar la función `v-bind()` dentro de nuestro CSS. Echemos un primer vistazo a esta asombrosa caracteristica:

```vue
<script setup>
const color = ref('red');
</script>

<style>
.circle {
  /* La variable {color} debe estar especificada dentro del archivo .vue */
  color: v-bind(color);
}
</style>
```

Esto es increíble, pero se vuelve aún más increíble al tener soporte para propiedades anidadas:

```vue
<script setup>
const theme = reactive({
  color: 'red'
});
</script>

<style>
.circle {
  color: v-bind('theme.color');
}
</style>
```

## ¿Cómo funciona `v-bind()` detrás de escenas?

La función `v-bind()` nos permite maneajr variables completamente reactivas y dinamicas, por lo cual es bastante curioso saber como es qué esto funciona

`Vue.js` convertira `color` en una variable interna de CSS:

```less
--472cff63-color: red;
```

Y se inyectara directamente dentro de la clase de CSS:

```css
.circle {
    color: var(--472cff63-color);
}
```
