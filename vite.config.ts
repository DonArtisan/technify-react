import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import relay from 'vite-plugin-relay'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [relay, react(), viteTsconfigPaths()],
})
