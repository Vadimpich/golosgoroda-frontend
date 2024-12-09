import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert'
import fs from 'fs';
import path from 'path';
import {VitePWA} from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
    server: {
        port: 3000,
        proxy: {
            '/api': {
                target: 'http://localhost:8000',
                changeOrigin: true,
            },
        },
        https:{
            key: fs.readFileSync(path.resolve(__dirname, 'cert.key')),
            cert: fs.readFileSync(path.resolve(__dirname, 'cert.crt')),
        },
    },
    base: '',
    plugins: [
        react(),
        mkcert(),
        VitePWA({registerType: 'autoUpdate',
          devOptions: {
            enabled: true,
          },
          manifest: {
            "name": "Golos Goroda",
            "short_name": "Golos Goroda",
            "start_url": "/",
            "display": "standalone",
            "background_color": "#fdfdfd",
            "theme_color": "#4d00ff",
            "orientation": "portrait-primary",
            "icons": [
              {
                "src": "/logo192.png",
                "type": "image/png", "sizes": "192x192"
              }
            ]
          }
        })
    ],
});
