import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import relay from 'vite-plugin-relay'
import viteTsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [relay, react(), viteTsconfigPaths()],
})
