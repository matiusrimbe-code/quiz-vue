<script setup>
import { useRouter } from 'vue-router'

const { quiz } = defineProps(['quiz'])
const router = useRouter()

function goToQuiz() {
  router.push({ name: 'quiz', params: { id: quiz.id } })
}
</script>

<template>
  <div class="card" @click="goToQuiz">
    <div class="card-header">
      <img :src="quiz.img" :alt="quiz.title" width="230px" />
    </div>
    <div class="card-body">
      <h3>{{ quiz.title }}</h3>
      <p>{{ quiz.questions.length }} Questions</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #cfcfcf;
  border-radius: 20px;
  overflow: hidden;
}

.card:hover {
  border: 2px solid #cfcfcf;
  cursor: pointer;
}

.card-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
