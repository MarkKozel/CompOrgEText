<template>
  <div class="key-concepts">
    <table style="border:none">
      <tr>
        <td
          class="KCborder"
          style="10%"
        >
          <p class="KCheader">Key Concepts</p>
        </td>

        <table
          class="KCinner"
          cellspacing="0"
          cellpadding="0"
        >
          <tr
            class="KCinner"
            v-for="concept in ConceptArray"
            :key="concept.Concept"
          >
            <td class="KCinner">
              <p
                :id="concept.Concept"
                class="KCconcept"
              >{{ concept.Concept }}</p>
            </td>
            <td class="KCinner">
              <p
                :id="concept.Concept"
                class="KCdetails"
              >{{ concept.Details }}</p>
            </td>
          </tr>
        </table>

      </tr>
    </table>
  </div>
</template>

<script>
module.exports = {
  name: "KeyConcepts",
  props: {
    ConceptArray: {
      type: Array,
      required: true,
    },
  },

  data: function () {
    return {
      rawData: {},
      concepts: [],
    };
  },
};
</script>

<style scoped>
.KCconcept {
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: rgb(15, 22, 22);
  word-wrap: normal;
}
.KCdetails {
  text-align: left;
  font-size: 16px;
  font-weight: normal;
  font-style: italic;
  color: black;
  word-wrap: normal;
  margin: 0px;
  padding: 0px;
}
.KCheader {
  writing-mode: vertical-lr;
  /* text-orientation:sideways; */
  transform: rotate(180deg);
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #0000ff;
  margin: 0px;
  padding: 1px;
}

.KCborder {
  border-color: black;
  border-style: solid;
  border-width: 1px;
  border-spacing: 1px;
  margin: 0px;
  padding: 10px;
}
/* td.outer {
    border-color: black;
  border-style: solid;
  border-width: 1px;
  border-spacing: 1px;
  margin:0px;
  padding:25px;
} */

.KCinner {
  /* border-color: grey;
  border-style: solid;
  border-width: 0px; 
  border-spacing: 1px;*/
  border: none;
  /* margin:5px;
  padding:25px; */
  /* margin-left:50px */
}
/* td.inner {
  border:none;
}

tr.inner {
  border:none;
} */

td {
  padding-top: 5px;
  padding-left: 25px;
  padding-bottom: 5px;
}
</style>

