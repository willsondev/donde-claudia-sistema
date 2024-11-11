const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
   pwa: {
    name: 'Mi Aplicación Vue',
    themeColor: '#42b983',
    msTileColor: '#ffffff',
    manifestOptions: {
      background_color: '#ffffff',
      start_url: '/',
      display: 'standalone'
    },
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    }
  }
});
