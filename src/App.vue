<template>
  <div id="app">
    <NavBar />
    <main class="flex justify-center py-8">
      <section class="flex gap-20">
        <CardVue 
          title="Boletas SII" 
          link="https://clave.w.sii.cl/oauthsii-v1/?response_type=code&client_id=e0378e96-4014-4a47-b852-9d9246797f5c&redirect_uri=https://eboleta.sii.cl/emitir/&scope=user_info&state=730b12d3-0586-42cb-8d8e-57c15125a8a9" 
          image="/img/eboleta.png"
        />
        <CardVue 
          title="Propinas" 
          link="https://willsondev.github.io/Calculadora-Propinas/" 
          image="/img/cd4f3915abc6062f19bc802cef58c354.jpg" 
        />
      </section>
    </main>
       <button v-if="showInstallButton" @click="installApp">Instalar App</button>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import CardVue from './components/CardVue.vue'

export default {
  components: {
    NavBar,
    CardVue
  },
  data() {
    return {
      showInstallButton: false,
      deferredPrompt: null,
    };
  },
  mounted() {
    window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault();
      this.deferredPrompt = event;
      this.showInstallButton = true;
    });
  },
  methods: {
    async installApp() {
      if (this.deferredPrompt) {
        this.deferredPrompt.prompt();
        const choiceResult = await this.deferredPrompt.userChoice;
        if (choiceResult.outcome === 'accepted') {
          console.log('El usuario aceptó la instalación');
        } else {
          console.log('El usuario rechazó la instalación');
        }
        this.deferredPrompt = null;
        this.showInstallButton = false;
      }
    },
  },
}
</script>

<style>
/* Puedes eliminar los estilos aquí, ya que Tailwind los reemplaza */
button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
}
</style>
