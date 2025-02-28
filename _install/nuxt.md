### Nuxt 3

::VideoCard
---
title: "Nuxt 3 Setup - Vue School Course"
poster: "https://cdn.formk.it/web-assets/robust-vue-js-forms-with-formkit-2.jpg"
watch-time: "4 mins"
external-vid: "https://vueschool.io/lessons/project-setup-and-formkit-config?friend=formkit"
---
::

Using FormKit with Nuxt requires minimal setup. First include the Nuxt module as a dependency within your project:

```sh
npm install @formkit/nuxt
```

Then in your `nuxt.config` file add the module to your modules list:

```js
// nuxt.config
export default defineNuxtConfig({
  modules: ['@formkit/nuxt'],
})
```

That's it! FormKit is now registered in your project using the default config and you can start using the `<FormKit>` component.