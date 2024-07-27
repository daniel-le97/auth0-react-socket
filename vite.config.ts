import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { vitePluginSocket } from './plugins/vitePluginSocket'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginSocket()],
})
