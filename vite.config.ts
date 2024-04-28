import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': {}
  },
  plugins: [vue(), cssInjectedByJsPlugin()],
  resolve: { alias: { 'vue': 'vue/dist/vue.esm-bundler.js' } },
  build: {
    lib: {
      entry: 'src/components/index.ts', // 设置入口文件【这里也可以直接引用插件.vue根组件】
      name: 'NoteAudio', // 打包后的文件名【可以自定义】
      fileName: 'NoteAudio',
      formats:['es', 'cjs', 'iife'],
    },
  }
})