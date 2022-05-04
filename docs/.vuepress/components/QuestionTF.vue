<template>
  <div class="question-tf">
    <table
      class="questionTable"
      style="width: 100%"
    >
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
      <button
        v-if="picked"
        v-on:click="checkAnswer"
      >Submit</button>
      <div v-if="result">
        <p class="tfresult"> {{ result }} </p>
        <p class="tfresultfb">{{ resultFeedback }} </p>
      </div>
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
      resultFeedback: "",
    };
  },
  methods: {
    checkAnswer() {
      if (this.answer.toLowerCase() === this.picked.toLowerCase()) {
        this.result = "Correct!";
        this.resultFeedback = `${this.rightAnswerFeedback}`;
      } else {
        this.result = `Incorrect`;
        this.resultFeedback = this.wrongAnswerFeedback
          ? this.wrongAnswerFeedback
          : this.rightAnswerFeedback;
      }
    },
  },
};
</script>

<style scoped>
.tfresult {
  font-size: 20px;
  padding: 5px 15px;
}
.tfresultfb {
  font-size: 16px;
  text-align: center;
  padding: 5px 60px;
}
</style>

