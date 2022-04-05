<template>
  <div class="lc3instruction">
    <table class="outer" style="width: 100%">
      <h3 class="title">{{ opName }}</h3>
      <table class="inner">
        <thead>
          <tr>
            <th
              style="text-align: center"
              v-for="heading in getHeader"
              :key="heading"
            >
              {{ heading }}
            </th>
          </tr>
        </thead>
        <tbody>
          <td style="text-align: center" v-for="bits in getBits" :key="bits">
            {{ bits }}
          </td>
        </tbody>
      </table>

      <p class="close" v-for="description in descriptions" :key="description">
        <b>{{ formatName(description) }}</b> : {{ formatDesc(description) }}
      </p>

      <div class="close" v-if="examples">
        <br />

        <p v-if="operation" class="example">Operation:</p>
        <p class="operation">{{ operation }}</p>

        <p class="example">Examples:</p>
        <p class="close code" v-for="example in examples" :key="example">
          {{ example }}
        </p>
      </div>
    </table>
  </div>
</template>

<script>
module.exports = {
  props: {
    opName: {
      type: String,
      required: true,
    },
    bitPattern: {
      type: Object,
      required: true,
    },
    descriptions: {
      type: Array,
      required: false,
    },
    examples: {
      type: Array,
      required: false,
    },
    operation: {
      type: String,
      required: false,
    },
  },

  computed: {
    getHeader: function () {
      return Object.keys(this.bitPattern);
    },
    getBits: function () {
      return Object.values(this.bitPattern);
    },
  },

  data: function () {
    return {};
  },
  methods: {
    formatName(desc) {
      return Object.keys(desc)[0];
    },
    formatDesc(desc) {
      return Object.values(desc)[0];
    },
  },
};
</script>

<style scoped>
.code {
  font-family: "Source Code Pro", "Consolas", "Bitstream Vera Sans Mono",
    "Courier New", "Courier", monospace;
  font-weight: bolder;
  margin: 0px;
  padding: 0px;
  margin-left: 10px;
}

.operation {
  /* text-indent:1.5em; */
  margin: 0px;
  margin-left: 50px;
  /* margin-left: 10px; */
  /* font-weight: normal; */
  padding-left: 10px;
}

.example {
  margin: 0px;
  margin-left: 10px;
  font-weight: bolder;
  padding: 0px;
}

.title {
  margin-top: 1px;
  margin-bottom: 1px;
  margin-left: 5px;
  margin-right: 1px;
}

table.outer {
  border-color: black;
  border-style: solid;
  border-width: 1px;
  border-spacing: 1px;
  /* margin-left:50px */
}

table.inner {
  border-color: grey;
  border-style: solid;
  border-width: 1px;
  border-spacing: 1px;
  margin-left: 50px;
}
td {
  padding-top: 5px;
  padding-left: 25px;
  padding-bottom: 5px;
}

p.close {
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  text-indent: 60px;
}
</style>