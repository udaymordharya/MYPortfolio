import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  theme: {
  extend: {
    animation: {
      'pulse-slow': 'pulse 6s ease-in-out infinite',
      'pulse-slower': 'pulse 10s ease-in-out infinite',
    },
  },
},

})
