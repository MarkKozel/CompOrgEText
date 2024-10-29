<template>
  <div class="key-concepts">
    <table style="border:none">
      <tbody>
        <tr>
          <td class="KCborder" style="width:10%">
            <p class="KCheader">Key Concepts</p>
          </td>
          <td style="" width:90%>
            <table class="KCinner" cellspacing="0" cellpadding="0">
              <tr class="KCinner" v-for="concept in ConceptArray">
                <td class="KCconcept">{{ concept.Concept }}</td>
                <td class="KCdetails">{{ concept.Details }}</td>
              </tr>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
  ConceptArray: {
    type: Array,
    required: true
  },
});
</script>

<style>
.KCconcept {
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #005AAA;
  word-wrap: normal;
  margin: 0px;
}

.KCdetails {
  text-align: left;
  font-size: 16px;
  font-weight: normal;
  font-style: italic;
  color: rgb(117, 117, 117);
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
  color: #005AAA;
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

td {
  padding-top: 5px;
  padding-left: 25px;
  padding-bottom: 5px;
}
</style>
