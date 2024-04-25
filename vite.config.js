// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1/clean_furniture/', // Địa chỉ máy chủ cần proxy đến
        changeOrigin: true,
        secure: false // Nếu máy chủ không sử dụng HTTPS, thiết lập secure thành false
      }
    }
  }
});
