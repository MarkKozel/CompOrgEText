<template>
  <div class="question-mc">
    <table
      class="questionTable"
      style="width: 100%"
    >
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
            <b>A</b>. {{ AChoice }}
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
            <b>B</b>. {{ BChoice }}
            <span class="checkmark"></span>
          </label>
        </td>
      </tr>

      <tr>
        <td>
          <label
            v-if="CChoice"
            class="PossibleAnswers"
          >
            <input
              type="radio"
              name="radio"
              value="C"
              id="C"
              v-model="picked"
            />
            <b>C</b>. {{ CChoice }}
            <span class="checkmark"></span>
          </label>
        </td>
        <td>
          <label
            v-if="DChoice"
            class="PossibleAnswers"
          >
            <input
              type="radio"
              name="radio"
              value="D"
              id="D"
              v-model="picked"
            />
            <b>D</b>. {{ DChoice }}
            <span class="checkmark"></span>
          </label>
        </td>
      </tr>

      <button
        v-if="picked"
        v-on:click="checkAnswer"
      >Submit</button>
      <div v-if="result">
        <p class="mcresult"> {{ result }} </p>
        <p class="mcresultfb">{{ resultFeedback }} </p>
      </div>
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
      resultFeedback: "",
    };
  },
  methods: {
    checkAnswer() {
      if (this.answer.toLowerCase() === this.picked.toLowerCase()) {
        this.result = "Correct!";
        this.resultFeedback = `${this.rightAnswerFeedback}`;
      } else {
        this.result = `Incorrect. The correct answer is ${this.answer}`;
        this.resultFeedback = this.wrongAnswerFeedback
          ? `${this.wrongAnswerFeedback}`
          : `${this.rightAnswerFeedback}`;
      }
    },
  },
};
</script>

<style scoped>
.mcresult {
  font-size: 20px;
  padding: 5px 15px;
}
.mcresultfb {
  font-size: 16px;
  text-align: center;
  padding: 5px 60px;
}
</style>

