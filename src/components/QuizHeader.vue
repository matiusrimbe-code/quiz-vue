<script setup>
import { defineProps } from 'vue'

const { questionHeader, barPercentage } = defineProps(['questionHeader', 'barPercentage'])
</script>
<template>
  <div class="header">
    <h1>Questions {{ questionHeader }}</h1>
    <div class="bar-container">
      <div class="bar">
        <div class="bar-progress" :style="{ width: barPercentage }"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 20px;
  justify-content: space-between;
}

.bar-container {
  width: 500px;
}
.bar {
  width: 100%;
  border: 2px solid gray;
  height: 40px;
  border-radius: 20px;
}

.bar-progress {
  width: 0%;
  background-color: gray;
  height: 100%;
  border-radius: 20px;
}
</style>
