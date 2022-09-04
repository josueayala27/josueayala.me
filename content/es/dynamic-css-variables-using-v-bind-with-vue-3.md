---
uuid: 5899b8f0-fa1a-403f-aaaa-dcf7bd030570
#title: Dynamic CSS variables using binding with vue 3
title: Variables CSS dinámicas usando binding con vue 3
description: Blog post description
allowComents: false
isPublished: true
---

## Binding en vue.js

Primeramente vamos a destacar que no es un concepto nuevo para `vue 3`, el concepto se viene trabajando con anterioridad

## Actualizaciones SFC (Componente de archivo único)

`Vue 3` nos ha venido sorprendiendo cada vez más, a pesar de su gran espera para sus primeros releases hemos visto que el equipo de vue sin duda alguna ha estado trabajando arduamente para traernos caracteristicas nuevas.

```vue
<template>
  <div class="circle" />
</template>

<script setup>
const color = '#FF5733';
</script>

<style scoped>
.circle {
  height: 10rem;
  width: 10rem;
  border-radius: 100%;
  color: v-bind(color);
}
</style>
```
