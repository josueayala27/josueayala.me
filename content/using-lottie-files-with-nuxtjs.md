---
uuid: 5899b8f0-fa1a-403f-aaaa-dcf7bd030570
title: Using Lottie files with nuxt.js
description: Many times using animations on our website is not an easy job, so in this blog we are going to learn how to use Lottie animations within our project with nuxt.js easily.
allowComents: false
isPublished: true
---

## What is a Lottie?

A Lottie is a `JSON` file containing vector settings of our animations, this format allows us to maintain a high quality and performance encoded animation, showing fidelity and compatibility between different devices, see the [official guide](https://lottiefiles.com/what-is-lottie).

[View Lottie file example ->](https://assets5.lottiefiles.com/packages/lf20_rbtawnwz.json)

## Installing the lottie-web package

We are going to use the `lottie-web` package which is provided and sponsored by [airbnb.io](https://airbnb.io), to configure it you just need to add the dependency with `yarn` or `npm`.

```shell
yarn add lottie-web
```

[comment]: <> (Ver más link de la libreria.)

[comment]: <> (Una vez se haya finalizado la instalación no es necesario agregarlo como complemento en `nuxt.config.js`.)

## Using the package

First of all, we are going to import the package into our component.

```js
import lottie from 'lottie-web';
```

Now we have the `lottie` reference which can be used anywhere in the code, for that we are going to create a method that will allow us to generate an instance of our animation:

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

Let's review some important points:

- `container`: Dom element on which to render the animation.
- `renderer`: `svg` / `canvas` / `html` to set the renderer.
- `loop`: `true` / `false` / `number`.
- `autoplay`: `true` / `false` it will start playing as soon as it is ready.
- `path`: The relative path to the animation object. (animationData and path are mutually exclusive).

See more information about the [api](http://airbnb.io/lottie/#/web).

::Alert
<strong>Note:</strong> <code>path</code> receives the relative path of your animation, so all your animations must be inside the <code>static</code> folder, for example: <code>static/animations/{file-name}.json</code>
::
<!-- <Alert type="warning">
  <strong>Note:</strong> <code>path</code> receives the relative path of your animation, so all your animations must be inside the <code>static</code> folder, for example: <code>static/animations/{file-name}.json</code>
</Alert> -->

Our `loadLottie(...)` method receives 2 parameters:

- The first parameter is an `HTML` element that will serve as a container for our animation:

```html
<div ref="animation-container"></div>
```

- The second parameter is the name of the file without the `.json` extension.

To use the animation we are going to use the [mounted](https://vuejs.org/api/options-lifecycle.html#mounted) hook. This will run our animation once the page loads.

```js
mounted() {
  this.loadLottie('animation-container', 'animation-1');
}
```

**That's it!** Now we will have as a result a beautiful animation playing on our site:

::Lottie{src="78790-hello"}

## Animation events

From here on out the only limitation is your imagination. You can create different configurations and customizations thanks to the extensive [configuration api](https://airbnb.io/lottie/#/web) provided by the `lottie-web` package, and even make use of the different events as `onComplete, onLoopComplete, onEnterFrame, onSegmentStart`, for example:

```js
animation.addEventListener('loopComplete', () => {
  console.log('Execute function...');
});
```

This is just a small usage reference. Explore your imagination and feel free to [send me](mailto:hello@josueayala.me) your amazing projects using this beautiful library.
