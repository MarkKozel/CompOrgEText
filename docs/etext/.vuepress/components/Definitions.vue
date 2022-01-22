<template>
  <div class="question-tf">
    <table style="width:100%">
      <tr>
        
      </tr>
    </table>
  </div>
</template>

<script>
const fs = require("fs");
module.exports = {
  props: {
    dataFileName: {
      type: String,
      required: true
    },
    sortColumn: {
      type: String,
      required: true
    }
  },
  mounted: function() {
    this.fileData = JSON.parse(fs.readFileSync(this.dataFileName, "utf8"));
  },

  data: function() {
    return {
      fileData: {},
      sorted: []
    };
  },
  methods: {
    onData() {
      for (let entry in (this, fileData)) {
        sorted.push(entry);
      }
    }
  }
};
</script>

<style scoped>
table {
  border-color: darkgreen;
  border-style: solid;
  border-width: 3px;
  border-spacing: 5px;
}
td {
  padding-top: 5px;
  padding-left: 25px;
  padding-bottom: 25px;
}
</style>

