<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  max-width: 900px;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px 40px;
}
</style>
