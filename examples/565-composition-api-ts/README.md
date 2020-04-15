# vue-composition-api-ts
Example of a project using
- Vue 2.6.11
- Axios 0.19
- TypeScript 3.8.3
- @vue/composition-api 0.5.0.
- bootstrap 4.4.1

It has Typescript interfaces and the concept of "services" (like in Angular) to talk to a backend.

You can type in a (partial) country name and hit Enter to search for that country.

Please check the various `.ts` files for their code. We placed the code that talks to the backend in its own 'hook' `.ts` file and used composition to import and consume it in the CountryComponent.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
