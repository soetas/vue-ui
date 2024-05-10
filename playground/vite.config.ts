import { defineConfig } from 'vite'

export default defineConfig({
  build:{
    rollupOptions:{
      output:{
        sourcemapIgnoreList(relativeSourcePath, sourcemapPath) {
          return false
        },
        sourcemap:true
      }
    }
  }
})
