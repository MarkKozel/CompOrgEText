<template>
  <div class="key-concepts">
    <table style="border:none">
      <tr>
        <td class="border" style="10%">
          <p class="header">Key Concepts</p>
        </td>

          <table class="inner" cellspacing="0" cellpadding="0">
            <tr class="inner" v-for="concept in ConceptArray" :key="concept.Concept">
              <td class="inner">
                <p :id="concept.Concept" class="concept">{{ concept.Concept }}</p>
              </td>
              <td class="inner">
                <p :id="concept.Concept" class="details">{{ concept.Details }}</p>
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
      required: true
    }
  },

  data: function() {
    return {
      rawData: {},
      concepts: []
    };
  }
};
</script>

<style scoped>
.concept {
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: rgb(15, 22, 22);
  word-wrap: normal;
}
.details {
  text-align: left;
  font-size: 16px;
  font-weight: normal;
  font-style: italic;
  color: black;
  word-wrap: normal;
  margin:0px;
  padding:0px;
}
.header {
  writing-mode: vertical-lr;
  /* text-orientation:sideways; */
  transform: rotate(180deg);
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #0000ff;
    margin:0px;
  padding:0px;
}

.border {
  border-color: black;
  border-style: solid;
  border-width: 1px;
  border-spacing: 1px;
  margin:0px;
  padding:10px;
}
/* td.outer {
    border-color: black;
  border-style: solid;
  border-width: 1px;
  border-spacing: 1px;
  margin:0px;
  padding:25px;
} */

.inner {
  /* border-color: grey;
  border-style: solid;
  border-width: 0px; 
  border-spacing: 1px;*/
  border:none;
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

