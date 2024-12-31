<template>
  <div class="question">
    <table class="question-table" v-cloak>
      <thead>
        <tr>
          <td colspan="2">
            <p class="question-header"><b>Quick Question:</b> Choose One</p>
            <p class="question-text">{{ question }}</p>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr class="possible-answers-group">
          <td class="possible-answer-cell">
            <label class="possible-answer">
              <input type="radio" name="radio" value="A" id="A" v-model="picked" />
              <span class="answer-label"><b>A</b>. {{ AChoice }}</span>
            </label>
          </td>
          <td class="possible-answer-cell">
            <label class="possible-answer">
              <input type="radio" name="radio" value="B" id="B" v-model="picked" />
              <span class="answer-label"><b>B</b>. {{ BChoice }}</span>
            </label>
          </td>
        </tr>
        <tr class="possible-answers-group">
          <td class="possible-answer-cell">
            <label v-if="CChoice" class="possible-answer">
              <input type="radio" name="radio" value="C" id="C" v-model="picked" />
              <span class="answer-label"><b>C</b>. {{ CChoice }}</span>
            </label>
          </td>
          <td class="possible-answer-cell">
            <label v-if="DChoice" class="possible-answer">
              <input type="radio" name="radio" value="D" id="D" v-model="picked" />
              <span class="answer-label"> <b>D</b>. {{ DChoice }}</span>
            </label>
          </td>
        </tr>
      </tbody>
    </table>

    <button class="submit-button" v-if="picked" v-on:click="checkAnswer">Check your Answer</button>
    <div v-if="result" class="result-container">
      <p class="result-test">{{ result }}</p>
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
  AChoice: {
    type: String,
    required: true,
  },
  BChoice: {
    type: String,
    required: true,
  },
  CChoice: {
    type: String,
    required: false,
  },
  DChoice: {
    type: String,
    required: false,
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
const resultFeedback = ref('')

function checkAnswer() {
  if (props.answer.toLowerCase() === picked.value.toLowerCase()) {
    result.value = "Correct!";
    resultFeedback.value = `${props.rightAnswerFeedback}`;
  } else {
    result.value = `Incorrect. The correct answer is ${props.answer}`;
    props.resultFeedback = props.wrongAnswerFeedback
      ? `${props.wrongAnswerFeedback}`
      : `${props.rightAnswerFeedback}`;
  }
};
</script>