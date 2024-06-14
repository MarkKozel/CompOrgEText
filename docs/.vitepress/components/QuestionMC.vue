<template>
  <div class="question-mc">
    <table class="questionTable" style="width: 100%">
      <tr>
        <p class="questionHeader"><b>Quick Question:</b> Choose One</p>
        <p class="question">{{ question }}</p>
      </tr>

      <tr>
        <td>
          <label class="PossibleAnswers">
            <input type="radio" name="radio" value="A" id="A" v-model="picked" />
            <b>A</b>. {{ AChoice }}
            <span class="questionCheckmark"></span>
          </label>
        </td>
        <td>
          <label class="PossibleAnswers">
            <input type="radio" name="radio" value="B" id="B" v-model="picked" />
            <b>B</b>. {{ BChoice }}
            <span class="questionCheckmark"></span>
          </label>
        </td>
      </tr>

      <tr>
        <td>
          <label v-if="CChoice" class="PossibleAnswers">
            <input type="radio" name="radio" value="C" id="C" v-model="picked" />
            <b>C</b>. {{ CChoice }}
            <span class="questionCheckmark"></span>
          </label>
        </td>
        <td>
          <label v-if="DChoice" class="PossibleAnswers">
            <input type="radio" name="radio" value="D" id="D" v-model="picked" />
            <b>D</b>. {{ DChoice }}
            <span class="questionCheckmark"></span>
          </label>
        </td>
      </tr>

      <button class="questionButton" v-if="picked" v-on:click="checkAnswer">Submit</button>
      <div v-if="result">
        <p class="mcresult"> {{ result }} </p>
        <p class="mcresultfb">{{ resultFeedback }} </p>
      </div>
    </table>
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