// https://nuxt.com/docs/api/configuration/nuxt-config
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineNuxtConfig({

    ssr: true,

    // typescripts
    typescript: {
        strict: true,
        typeCheck: true,
        tsConfig: {
            compilerOptions: {
                strict: true,
                types: ['@pinia/nuxt', './types/type.d.ts'],
            },
        },
    },

    // css
    css: ['~/assets/sass/app.scss', '~/assets/sass/mode/dark.scss', '~/assets/sass/mode/light.scss'],

    // modules
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        'unplugin-icons/nuxt',
        '@intlify/nuxt3',
    ],

    // build
    build: {
        transpile: ['@headlessui/vue']
    },

    // auto import components
    components: true,

    // localization - i18n config
    intlify: {
        localeDir: 'locales',
        vueI18n: {
            locale: 'zh',
            fallbackLocale: 'zh',
            availableLocales: ['en', 'zh'],
        },
    },

    // vite
    vite: {
        // need add declare from xxx.d.ts
        define: {
            // __BUILD_TIME__: JSON.stringify(dayjs().format('YYYY/MM/DD HH:mm')),
        },

        plugins: [
            Components({
                dts: 'types/components.d.ts',
                resolvers: [
                    IconsResolver({
                        prefix: 'Icon',
                    })
                ],
            }),
        ],
    },

})
