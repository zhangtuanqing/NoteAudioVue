import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from "unplugin-element-plus/vite";

// https://vitejs.dev/config/
export default defineConfig({
    define: {
        'process.env': {}
    },
    plugins: [
        vue(),
        cssInjectedByJsPlugin(),
        AutoImport({
            resolvers: [ElementPlusResolver({
                importStyle: "sass"
            })],
        }),
        Components({
            resolvers: [ElementPlusResolver({
                importStyle: "sass"
            })],
        }),
        ElementPlus({
            useSource: true
        })
    ],
    resolve: {alias: {'vue': 'vue/dist/vue.esm-bundler.js'}},
    build: {
        lib: {
            entry: 'src/components/index.ts', // 设置入口文件【这里也可以直接引用插件.vue根组件】
            name: 'NoteAudio', // 打包后的文件名【可以自定义】
            fileName: 'NoteAudio',
            formats: ['es'],
        },
        rollupOptions: {
            // 不将 Vue 和 Element Plus 设为外部依赖
            external: [],
            output: {
                // 确保全局变量名称正确，如果需要的话
                globals: {},
            }
        }
    }
})