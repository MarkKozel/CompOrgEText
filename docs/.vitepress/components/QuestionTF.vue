<template>
  <div class="question">
    <table class="question-table" v-cloak>
      <thead>
        <tr>
          <th colspan="2">
            <p class="question-header"><strong>True/False</strong></p>
            <p class="question-text">{{ question }}</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="possible-answers-group">
          <td>
            <label class="possible-answer">
              <input type="radio" name="answer" value="True" v-model="picked" />
              <span class="answer-label">True</span>
            </label>
          </td>
          <td>
            <label class="possible-answer">
              <input type="radio" name="answer" value="False" v-model="picked" />
              <span class="answer-label">False</span>
            </label>
          </td>
        </tr>
      </tbody>
    </table>

    <button class="submit-button" v-if="picked" @click="checkAnswer"> Check Your Answer </button>

    <div v-if="result" class="result-container">
      <p class="result-text">{{ result }}</p>
      <p class="result-feedback">{{ resultFeedback }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  rightAnswerFeedback: {
    type: String,
    required: false,
    default: "Good job",
  },
  wrongAnswerFeedback: {
    type: String,
    required: false,
    default: "Good question to review later",
  },
});

// const answered = ref('false');
const picked = ref('');
const result = ref('');
const resultFeedback = ref('');

function checkAnswer() {
  if (props.answer.toLowerCase() === picked.value.toLowerCase()) {
    result.value = "Correct!";
    resultFeedback.value = `${props.rightAnswerFeedback}`;
  } else {
    result.value = `Incorrect`;
    resultFeedback.value =
      props.wrongAnswerFeedback !== "rightAnswerFeedback"
        ? `${props.wrongAnswerFeedback}`
        : `${props.rightAnswerFeedback}`;
  }
};
</script>
