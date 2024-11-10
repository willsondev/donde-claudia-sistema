<template>
  <div class="card-container transform transition duration-300 hover:scale-105 hover:shadow-lg">
    <a :href="link" target="_blank" class="block">
      <img :src="image" alt="Imagen de {{ title }}" class="w-full h-48 object-cover rounded-t-md">
      <div class="p-4 bg-white rounded-b-md">
        <h3 class="text-xl font-semibold text-gray-800">{{ title }}</h3>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    link: String,
    image: String
  }
}
</script>

<style scoped>
/* Puedes eliminar los estilos aquí, ya que Tailwind los reemplaza */
</style>
