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
            },
        },
    },

    // plugins
    // plugins: ['~/plugins/element-plus'],

    // css
    css: [],



    // modules
    modules: [
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
        // 解决在开发模式下降低 naive-ui 引起的打包缓慢
        // optimizeDeps: {
        //     include:
        //         process.env.NODE_ENV === 'development'
        //             ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone']
        //             : [],
        // },
    },

})
