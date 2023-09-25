import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'
import { readFileSync } from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: {
      key: readFileSync('./localhost-key.pem'),
      cert: readFileSync('./localhost-cert.pem')
    }
  },
  plugins: [react(), mkcert()]
})
