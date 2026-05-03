<script setup>
import { defineProps } from 'vue'
const { question } = defineProps(['question'])

const emit = defineEmits(['selectOption'])

function onSelectOption(option) {
  emit('selectOption', option)
}
</script>

<template>
  <div class="content">
    <div class="card">
      <h3>{{ question.text }}</h3>

      <div
        class="option-container"
        v-for="option in question.answers"
        :key="option.id"
        @click="onSelectOption(option)"
      >
        <div class="option">
          <p class="option-choice">{{ option.label }}</p>
          <p class="option-value">{{ option.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  margin: 40px 0;
}

.card {
  border: 1px solid gray;
  border-radius: 10px;
  padding: 40px;
}

.card h3 {
  font-size: 24px;
}

.option-container {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 18px;
}

.option {
  display: flex;
  align-items: center;
  gap: 0px;
  cursor: pointer;
  background-color: gray;
  border-radius: 20px 0 20px 0;
  overflow: hidden;
}

.option-choice {
  padding: 10px 20px;
  background-color: gray;
  color: #fff;
}

.option-value {
  padding: 10px;
  background-color: #c9c8c8;
  width: 100%;
}

.option-value:hover {
  background-color: #dddddd;
}
</style>
