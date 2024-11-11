const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
   pwa: {
    name: 'Donde Claudia',
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
