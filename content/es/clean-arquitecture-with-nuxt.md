---
uuid: 5899b8f0-fa1a-403f-aaaa-dcf7bd030570
title: Clean arquitecture with nuxt
description: Deploy your Next.js + Prisma app to PlanetScale and Vercel
allow_coments: false
---

In this tutorial, you'll implement authentication in a [Nuxt.js](https://nuxtjs.org) app using the `Auth` module. For the purpose of this tutorial, you’ll be using `JWT` for authentication. Below is a quick demo of what you'll be building in this tutorial:

You can find the [source code for this application at GitHub.](https://github.com/do-community/nuxt-auth-app)

## Prerequisites

To complete this tutorial, you will need: hello@josueayala.me

- Node.js installed locally, which you can do by following [How to Install Node.js and Create a Local Development Environment.](https://www.digitalocean.com/community/tutorial_series/how-to-install-node-js-and-create-a-local-development-environment)
- A valid Git installation is optionally required for cloning the API, consult [Getting Started with Git.](https://www.digitalocean.com/community/tutorials/how-to-contribute-to-open-source-getting-started-with-git)

Some familiarity with Vue.js and Nuxt.js may be beneficial. You can [refer to this post](https://www.digitalocean.com/community/tutorials/vuejs-server-side-rendering-with-nuxtjs) if you’re getting started with Nuxt.js.

> This is my blog LOL

| Prop        | Type   | Default | Description                                                                                   |
| ----------- | ------ | ------- | --------------------------------------------------------------------------------------------- |
| avatars     | Array  | null    | You must have an array with the routes of all your photographs, so that they can be displayed |
| max         | Number | 5       | Maximum number of avatarts displayed                                                          |
| borderColor | String | #FFFFFF | You can change the color of the borders using **hexadecimal** codes for the colors            |

This tutorial was verified with Node v13.13.0, npm v6.14.4, `vue` v2.6.11, and `nuxt` v2.12.2.

## Step 1 — Spinning up a Sample API

### Sub heading

You are free to use whatever framework that works best for you. However, for quick development, this tutorial will clone an API built with [AdonisJs.](https://adonisjs.com)

The API utilizes:

- JWT ([JSON Web Tokens](https://en.wikipedia.org/wiki/JSON_Web_Token)) for authentication
- [SQLite](https://en.wikipedia.org/wiki/SQLite)
- [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) enabled

The API has three endpoints:

- `/register`: endpoint for user registration
- `/login`: endpoint for authenticating users
- `/me`: endpoint for getting details for the currently authenticated user and it is protected by an `auth` middleware, which means a user must be authenticated to access the endpoint

First, run the following command in your terminal window:

```pug
git clone https://github.com/do-community/jwt-auth-api.git
```

Then, navigate to the project directory:

```pug
cd jwt-auth-api
```

And install the API dependencies:

```pug
npm install
```

</br>

<Alert type="warning" icon="{ type: 'outlined': name: 'warning' }">
  <strong>Note:</strong> When running install, you may encounter issues with <code>sqlite3</code> version <code>4.0.1</code> depending on the version of Node you are running. Refer to the <a href="https://github.com/TryGhost/node-sqlite3/blob/master/CHANGELOG.md" target="_blank">link</a> to determine compatibility with your environment.
</Alert>

Next, rename `.env.example` to `.env`:

```pug
mv .env.example .env
```

I have here my html component with vue

```vue
<template>
  <div
    :class="{
      'bg-yellow-100  border-yellow-500': type === 'warning',
    }"
    class="p-5 rounded-r-lg relative border-l-[.2rem]">
    <div
      :class="{
        'text-yellow-500 bg-white shadow-md': type === 'warning',
      }"
      class="absolute -top-5 -left-5 rounded-full p-2">
      <Icon :name="icon.name" :type="icon.type" />
    </div>
    <slot />
  </div>
</template>
```
