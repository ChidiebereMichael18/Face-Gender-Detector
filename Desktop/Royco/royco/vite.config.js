import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(
      {
        config: {
          theme: {
            extend: {
              fontFamily: {
                lexend: ['Lexend', 'serif'],
                mont: ['Montserrat', 'sans-serif'],
              },
              colors: {
                primary: '#FF5733',
                secondary: '#C70039',
                accent: '#900C3F',
                neutral: '#581845',
                'base-100': '#FFFFFF',
              },
            },
          },
        },
      }
    ),
  ],
})
