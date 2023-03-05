// https://nuxt.com/docs/api/configuration/nuxt-config
import Components from 'unplugin-vue-components/vite'

export default defineNuxtConfig({

    ssr: true,

    // typescripts
    typescript: {
        strict: true,
        typeCheck: true,
        tsConfig: {
            compilerOptions: {
                strict: true,
                types: ['@pinia/nuxt', './type.d.ts'],
            },
        },
    },

    // plugins
    // plugins: ['~/plugins/element-plus'],

    // css
    css: [],



    // modules
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
    ],



    // auto import components
    components: true,

    // vite
    vite: {
        // need add declare from xxx.d.ts
        define: {
            // __BUILD_TIME__: JSON.stringify(dayjs().format('YYYY/MM/DD HH:mm')),
        },

        plugins: [
            Components({
                dts: true,
                resolvers: [],
            }),
        ],
    },

})
