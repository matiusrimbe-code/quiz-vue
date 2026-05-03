<script setup>
import QuizContent from '@/components/QuizContent.vue'
import QuizHeader from '@/components/QuizHeader.vue'
import { useRoute } from 'vue-router'
import quizes from '@/data/quizes.json'
import { computed, ref } from 'vue'
import QuizResult from '@/components/QuizResult.vue'

const route = useRoute()
const quizId = parseInt(route.params.id)
const quiz = quizes.find((q) => q.id === quizId)
const currentQuestion = ref(0)
const correctAnswer = ref(0)
const showResult = ref(false)

const questionHeader = computed(() => {
  return `${currentQuestion.value + 1}/${quiz.questions.length}`
})
const barPercentage = computed(() => {
  return `${((currentQuestion.value + 1) / quiz.questions.length) * 100}%`
})

function selectOption(option) {
  if (option.correct) {
    correctAnswer.value++
  }
  if (currentQuestion.value === quiz.questions.length - 1) {
    showResult.value = true
    return
  }
  currentQuestion.value++
}
</script>
<template>
  <div v-if="quiz">
    <QuizHeader :questionHeader="questionHeader" :barPercentage="barPercentage" />
    <QuizContent
      :question="quiz.questions[currentQuestion]"
      @selectOption="selectOption"
      v-if="!showResult"
    />
    <QuizResult :correctAnswer="correctAnswer" :questionLength="quiz.questions.length" v-else />
  </div>

  <div class="card" v-else>
    <h1>Maaf</h1>
    <p>Quiz Tidak Tersedia</p>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 900px;
  width: 100%;
  min-height: 80vh;
  margin: 0 auto;
}

.card h1 {
  font-size: 130px;
}

.card p {
  font-size: 36px;
}

.card h1,
.card p {
  color: rgb(58, 58, 58);
  margin: 0;
  padding: 0;
}
</style>
