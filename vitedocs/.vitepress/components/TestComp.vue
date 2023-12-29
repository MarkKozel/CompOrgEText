
<!-- <template>
  <li v-for="(datum, idx) in qaData">
    {{ idx + 1 }}. {{ datum.q }}: {{ datum.a }}
  </li>
  <h3>{{ fileName }}</h3>
</template> -->

<template>
  <ul v-if="entries.length > 0">
    <li v-for="(item, index) in entries" :key="index">
      {{ JSON.stringify(item) }}
    </li>
    <h2>Data from {{ dataPath }}</h2>
  </ul>
  <p v-else>Loading data...</p>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const dataPath = "./data.json" // Replace with your file path
const data = ref(null)
// import rawData from "./data.json";
// const fileName = ref(null)

onMounted(() => {
  // fetch(dataPath)
  import(/* @vite-ignore */ dataPath)

    // .then(response => response.json())
    .then(loadedData => {
      data.value = loadedData
    })
    .catch(error => {
      console.info(error)
      data.value = [
        {
          "name": "John Doe",
          "age": 30,
          "address": {
            "street": "123 Main Street",
            "city": "Anytown",
            "state": "CA",
            "zip": "12345"
          }
        }
      ];
    })
})

const entries = computed(() => {
  if (!data.value) return []
  return Object.entries(data.value)
})
</script>



<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>
  