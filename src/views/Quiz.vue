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
  <QuizHeader :questionHeader="questionHeader" :barPercentage="barPercentage" />
  <QuizContent
    :question="quiz.questions[currentQuestion]"
    @selectOption="selectOption"
    v-if="!showResult"
  />
  <QuizResult :correctAnswer="correctAnswer" :questionLength="quiz.questions.length" v-else />
</template>
