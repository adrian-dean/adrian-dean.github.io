import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/my-portfolio/', // Update this to match your repo name
  plugins: [react()],
});