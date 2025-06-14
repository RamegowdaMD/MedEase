// // import { defineConfig } from 'vite'
// // import react from '@vitejs/plugin-react'

// // // https://vite.dev/config/
// // export default defineConfig({
// //   plugins: [react()],
// //   host: '0.0.0.0',
// //   server:{port:5173}
// // })
// // frontend/vite.config.js
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: '0.0.0.0',     
//     port: 5173,
//     strictPort: true,
//     watch: {
//       usePolling: true   
//     }
//   }
// })


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: '0.0.0.0',     
//     port: 5173,
//     strictPort: true,
//     watch: {
//       usePolling: true
//     },
//     proxy: {
//       '/api': {
//         target: 'http://localhost:5000', // your backend port
//         changeOrigin: true,
//         secure: false
//       }
//     }
//   }
//})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true
    },
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // your backend port
        changeOrigin: true,
        secure: false
      }
    }
  }
})

