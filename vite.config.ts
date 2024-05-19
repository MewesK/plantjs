import { defineConfig } from 'vite';

export default defineConfig(({ command, mode }) => {
  return {
    build: {
      chunkSizeWarningLimit: 10000,
    },
    resolve: {
      alias: {
        babylonjs: mode === 'development' ? 'babylonjs/babylon.max' : 'babylonjs',
      },
    },
  };
});
