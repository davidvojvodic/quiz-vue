<template>
  <!-- The main container for the component -->
  <div>
    <!-- The RouterView component is used to render the matched component for the current route -->
    <RouterView />
  </div>
</template>

<script setup>
  // Importing the RouterView component from the vue-router package
  import { RouterView } from "vue-router";
</script>
