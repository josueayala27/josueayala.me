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

`Vue 3` ha venido sorprendiendo cada vez más, a pesar de la gran espera para sus primeras [liberaciones](https://github.com/vuejs/core/releases), hemos visto que el equipo de `vue` sin duda alguna ha estado trabajando arduamente para traernos caracteristicas sorprendentes.

**¡Así es!** Ahora podemos ocupar la función `v-bind()` dentro de nuestro CSS. Echemos un primer vistazo a esta asombrosa caracteristica:

```vue
<style>
.circle {
  /* {variable} necesita estar especificada en nuestro archivo .vue */
  color: v-bind(variable);
}
</style>
```

<Alert type="warning">
  Cabe destacar que estas nuevas funcionalidades solo pueden estar presentes dentro de nuestro componente de un solo archivo, en pocas palabras dentro de nuestro archivo <code>.vue</code>
</Alert>
