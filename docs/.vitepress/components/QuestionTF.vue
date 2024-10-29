<template>
  <div class="question-tf">
    <table class="questionTable" style="width: 100%">
      <tbody>
        <!-- <tr class="questionTr">
          <td colspan="2">
            <p class="questionHeader"><b>True/False</b></p>
            <p class="question">{{ question }}</p>
          </td>
        </tr>

        <tr class="questionTr">
          <td class="questionTd">
            <label class="PossibleAnswers">
              True
              <input type="radio" name="radio" value="True" id="t" v-model="picked" />
              <span class="questionCheckmark"></span>
            </label>
          </td>
          <td class="questionTd">
            <label class="PossibleAnswers">
              False
              <input type="radio" name="radio" value="False" id="f" v-model="picked" />
              <span class="questionCheckmark"></span>
            </label>
          </td>
        </tr>

        <button class="questionButton" v-if="picked" v-on:click="checkAnswer">Submit</button>
        <div v-if="result">
          <p class="tfresult"> {{ result }} </p>
          <p class="tfresultfb">{{ resultFeedback }} </p>
        </div> -->
        <!-- </tr> -->
      </tbody>
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
