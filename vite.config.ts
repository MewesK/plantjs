import { defineConfig } from 'vite';

export default defineConfig(({ command, mode }) => {
  return {
    base: '/plantjs/',
    build: {
      chunkSizeWarningLimit: 10000,
    },
    optimizeDeps: {
      exclude: ['@babylonjs/havok'],
    },
    resolve: {
      alias: {
        babylonjs: mode === 'development' ? 'babylonjs/babylon.max' : 'babylonjs',
      },
    },
  };
});
