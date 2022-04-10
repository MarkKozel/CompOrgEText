<template>
  <div class="question-tf">
    <table class="questionTable" style="width: 100%">
      <tr>
        <!-- <td> -->
        <p class="header"><b>Quick Question:</b> True/False</p>

        <p class="question">{{ question }}</p>
<tr>
        <td>
          <label class="PossibleAnswers">
            True
            <input
              type="radio"
              name="radio"
              value="True"
              id="t"
              v-model="picked"
            />
            <span class="checkmark"></span>
          </label>
        </td>
        <td>
          <label class="PossibleAnswers">
            False
            <input
              type="radio"
              name="radio"
              value="False"
              id="f"
              v-model="picked"
            />
            <span class="checkmark"></span>
          </label>
        </td>
</tr>
        <button v-if="picked" v-on:click="checkAnswer">Submit</button>
        <p v-if="result">{{ result }}</p>
        <!-- </td> -->
        <!-- <td></td> -->
      </tr>
    </table>
  </div>
</template>

<script>
module.exports = {
  props: {
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
  },
  data: function () {
    return {
      answered: false,
      picked: "",
      result: "",
    };
  },
  methods: {
    checkAnswer() {
      if (this.answer.toLowerCase() === this.picked.toLowerCase()) {
        this.result = "Correct! " + this.rightAnswerFeedback;
      } else {
        this.result = "Incorrect. " + this.wrongAnswerFeedback;
      }
    },
  },
};
</script>

<style scoped>
</style>

