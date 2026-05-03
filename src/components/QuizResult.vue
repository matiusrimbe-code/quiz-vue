<script setup>
import { defineProps, ref } from 'vue'
const { correctAnswer, questionLength } = defineProps(['correctAnswer', 'questionLength'])
const resultQuestion = ref((correctAnswer / questionLength) * 100)
</script>

<template>
  <div class="result-container">
    <div class="result">
      <h1>Result: {{ resultQuestion }}</h1>
      <h2>{{ correctAnswer }} / {{ questionLength }}</h2>
    </div>
    <RouterLink class="btn-back" to="/">Go Back</RouterLink>
  </div>
</template>

<style scoped>
.result-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin: 40px;
  background-color: #ecebeb;
  border-radius: 10px;
  padding: 20px;
}

.result {
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
}

.result h1 {
  font-size: 36px;
  text-align: center;
  width: 100%;
}

.result h2 {
  font-size: 28px;
  text-align: center;
  width: 100%;
}

.btn-back {
  padding: 10px 20px;
  background-color: gray;
  border-radius: 20px;
  text-decoration: none;
  color: #fff;
}

.btn-back:hover {
  background-color: #8f8f8f;
}
</style>
