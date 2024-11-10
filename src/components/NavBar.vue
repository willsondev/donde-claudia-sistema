<template>
  <nav class="bg-green-500 p-3">
    <ul class="flex gap-2 list-none m-0">
      <li><a href="#" class="text-white no-underline font-olivia text-3xl ">Donde Claudia</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
/* Cargar la fuente desde la carpeta local */
@font-face {
  font-family: 'Olivia';
  src: url('@/assets/fonts/Olivia.ttf') format('truetype');
}

/* Aplicar la fuente Olivia */
.font-olivia {
  font-family: 'Olivia', sans-serif;
}
</style>
