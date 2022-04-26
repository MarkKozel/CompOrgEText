<template>
  <div class="you-do-it">
    <p class="header">You Do It!</p>
    <p class="info">Estimated time to complete: {{ endTime }}</p>
    <p class="instructions">Instructions: {{ instructions }}</p>
  </div>
</template>

<script>
module.exports = {
  props: ["time", "instructions"],

  data: function() {
    return {
      endTime: this.time
    };
  }
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
.info {
  text-align: left;
  font-size: 12px;
}
.instructions {
  text-align: left;
  font-size: 14px;
}
.header {
  font-size: 2em;
  text-align: center;
}
</style>

