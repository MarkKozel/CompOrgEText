<template>
  <div class="question-mc">
    <table class="questionTable" style="width: 100%">
      <tr>
        <!-- <td class="questionTd"> -->
        <p class="header"><b>Quick Question:</b> Choose One</p>

        <p class="question">{{ question }}</p>
      </tr>

      <tr>
        <td>
          <label class="PossibleAnswers">
            <input
              type="radio"
              name="radio"
              value="A"
              id="A"
              v-model="picked"
            />
            {{ AChoice }}
            <span class="checkmark"></span>
          </label>
        </td>
        <td>
          <label class="PossibleAnswers">
            <input
              type="radio"
              name="radio"
              value="B"
              id="B"
              v-model="picked"
            />
            {{ BChoice }}
            <span class="checkmark"></span>
          </label>
        </td>
      </tr>

      <tr>
        <td>
          <label v-if="CChoice" class="PossibleAnswers">
            <input
              type="radio"
              name="radio"
              value="C"
              id="C"
              v-model="picked"
            />
            {{ CChoice }}
            <span class="checkmark"></span>
          </label>
        </td>
        <td>
          <label v-if="DChoice" class="PossibleAnswers">
            <input
              type="radio"
              name="radio"
              value="D"
              id="D"
              v-model="picked"
            />
            {{ DChoice }}
            <span class="checkmark"></span>
          </label>
        </td>
      </tr>

      <button v-if="picked" v-on:click="checkAnswer">Submit</button>
      <p v-if="result">{{ result }}</p>
      <!-- </td> -->
      <!-- <td></td> -->
      <!-- </tr> -->
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

