---
title: Home
description: Custom events in Vue 3
---

# Custom events in Vue 3

As someone who has been using Vue 2 for a while now, switching over to Vue 3 with its new composition API and other cool features is exciting but comes with its little hiccups.

One of the hiccups or issues I faced while writing Vue 3 applications was using custom events in the new Composition API instead of the good ol' Options API.

I tried checking out the [Vue Docs](https://v3.vuejs.org/guide/component-custom-events.html#defining-custom-events), but I wasn't getting exactly what I wanted. Then I set out on a googling spree, desperate to find a way to use custom events with the [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html#better-logic-reuse) in my project. 

And I finally found the way(s) 😋.

So here, I'll discuss how to emit custom events from our components using the Composition API.

## Define Custom events Inline

Before I dive right into how to use Custom events with the Composition API in Vue 3, here's how we normally use custom events inline. To emit custom events inline, maybe in an input field or button, we can define events using the `v-on` or `@` drective:

```html
<button @click="$emit('btn-click')">Click me</button>
```
