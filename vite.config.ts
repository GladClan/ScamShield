import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Use root base in local dev and repo base for production deploys.
  base: command === 'build' ? '/ScamShield/' : '/',
}));
