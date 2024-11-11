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
    <!-- Instalar PWA -->
   
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
      event.preventDefault(); // Prevenir la instalación automática
      this.deferredPrompt = event; // Guardar el evento para usarlo luego
      this.showInstallButton = true; // Mostrar el botón de instalación
    });
  },
  methods: {
    async installApp() {
      if (this.deferredPrompt) {
        this.deferredPrompt.prompt(); // Mostrar el prompt de instalación
        const choiceResult = await this.deferredPrompt.userChoice; // Esperar la decisión del usuario
        if (choiceResult.outcome === 'accepted') {
          console.log('El usuario aceptó la instalación');
        } else {
          console.log('El usuario rechazó la instalación');
        }
        this.deferredPrompt = null; // Resetear el prompt después de la interacción
        this.showInstallButton = false; // Ocultar el botón de instalación
      }
    },
  },
}
</script>

<style>
/* Estilo para el botón de instalación */
.install-button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.install-button:hover {
  background-color: #45a049;
}
</style>
