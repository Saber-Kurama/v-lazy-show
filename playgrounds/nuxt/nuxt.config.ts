/* eslint-disable no-console */
import vLazyShow from '../../src/nuxt'

// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
// @ts-ignore ignore
export default defineNuxtConfig({
  modules: [
    '@nuxt/devtools',
    vLazyShow,
  ],
  devtools: {
    componentInspector: false,
  },
  vite: {
    plugins: [
      {
        name: 'log',
        enforce: 'post',
        transform(code, id, ctx) {
          if (id.includes('app.vue') && ctx?.ssr) {
            const line = `${'-'.repeat(15)}`
            console.log(line)
            console.log(id)
            console.log(line)
            console.log(code)
            console.log(line)
          }
        },
      },
    ],
  },
})
