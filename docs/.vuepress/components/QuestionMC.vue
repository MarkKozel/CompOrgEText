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
/* button {
  background-color: #0000ff;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  opacity: 0.9;
  font-size: 16px;
  font-family: Arial, sans-serif;
}

.PossibleAnswers {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
/* .PossibleAnswers input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom radio button */
/* .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #0000ff;
  border-radius: 50%;
} */

/* On mouse-over, add a grey background color */
/* .PossibleAnswers:hover input ~ .checkmark {
  background-color: #9999ff;
} */

/* When the radio button is checked, add a blue background */
/* .PossibleAnswers input:checked ~ .checkmark {
  background-color: #9999ff;
} */

/* Create the indicator (the dot/circle - hidden when not checked) */
/* .checkmark:after {
  content: "";
  position: absolute;
  display: none;
} */

/* Show the indicator (dot/circle) when checked */
/* .PossibleAnswers input:checked ~ .checkmark:after {
  display: block;
} */

/* Style the indicator (dot/circle) */
/* .PossibleAnswers .checkmark:after {
  top: 6px;
  left: 6px;
  width: 13px;
  height: 13px;
  border-radius: 80%;
  background: white;
} */

/* .questionTable {
  border-color: #0000ff;
  border-style: solid;
  border-width: 1px;
  border-spacing: 0px;
  margin: 0px;
  padding: 0px;
}
.questionTd {
  padding-top: 1px;
  padding-left: 10px;
  padding-bottom: 10px;
} */
</style>

