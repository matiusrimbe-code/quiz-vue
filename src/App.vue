<script setup>
import { ref, watch } from 'vue'
import dataQuiz from './data/quizes.json'
import QuizCard from './components/QuizCard.vue'
const quizes = ref(dataQuiz)
const search = ref('')

watch(search, () => {
  quizes.value = dataQuiz.filter((quiz) => {
    return quiz.title.toLowerCase().includes(search.value.toLowerCase())
  })
})
</script>

<template>
  <main>
    <div class="header">
      <h1>Quizes</h1>
      <input v-model.trim="search" type="text" class="search-input" placeholder="Search ..." />
    </div>

    <div class="content">
      <QuizCard v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
    </div>
  </main>
</template>

<style scoped>
main {
  max-width: 900px;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
}

.header {
  display: flex;
  align-items: center;
  gap: 40px;
  margin: 40px;
  border-bottom: 1px solid #cfcfcf;
  padding-bottom: 20px;

  border-top: 1px solid #cfcfcf;
  padding-top: 20px;
}

.search-input {
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 16px;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  margin: 40px;
}
</style>
