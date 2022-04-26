<template>
  <div class="lc3instruction">
    <table
      class="int-outer"
      style="width: auto"
    >
      <h3 class="int-title">{{ data.InstructionName }}</h3>

      <table
        class="int-inner"
        style="width: 80%"
      >
        <tr>
          <td
            v-for="el in data.header"
            :key="el.name"
            class="int-bits float-left"
          >
            {{ el.name }}
          </td>
        </tr>

        <tr>
          <td
            v-for="el in data.header"
            :key="el.name"
            class="int-bits float-left"
          >
            {{ el.bits }}
          </td>
        </tr>
      </table>

      <p
        class="int-close"
        v-for="header in data.header"
        :key="header.name"
      >
        <b>{{ header.name }}</b> : {{ header.desc }}
      </p>

      <div
        class="int-close"
        v-if="data.examples"
      >
        <!-- <br /> -->
        <p
          v-if="data.operation"
          class="int-example"
        >Operation:</p>

        <p class="int-operation">{{ data.operation }}</p>

        <p class="int-example">Examples:</p>
        <p
          v-for="example in data.examples"
          :key="example"
          class="int-close int-code"
        > {{ example }} </p>
      </div>
    </table>
  </div>
</template>

<script>
const path = require("path");
module.exports = {
  props: {
    fileName: {
      type: String,
      required: false,
    },
    info: {
      type: Array,
      required: false,
    },
    examples: {
      type: Object,
      required: false,
    },
    operation: {
      type: String,
      required: false,
    },
  },

  computed: {
    getHeader: function () {
      console.log(Object.keys(this.bitPattern));
      return Object.keys(this.bitPattern);
    },
    getBits: function () {
      console.log(Object.values(this.bitPattern));
      return Object.values(this.bitPattern);
    },
  },

  mounted: function () {
    // const p = path.join("..", "public", "instructions", this.fileName);
    // const p = path.join(".", this.fileName);
    const data = require("./dataFile.js");
    this.data = data.default;
    console.log(this.data);
    // import(this.fileName)
    //   .then((data) => {
    //     console.log("theData: ", data);
    //     this.data = data;
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
    // console.log("theData: ", data);

    // const fileData = require(this.fileName);
    // console.log("fileData : ", fileData);

    // this.data = data;
  },

  data: function () {
    return {
      data: {},
    };
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
.int-code {
  font-family: "Source Code Pro", "Consolas", "Bitstream Vera Sans Mono",
    "Courier New", "Courier", monospace;
  font-weight: bolder;
  margin: 0px;
  padding: 0px;
  margin-left: 10px;
}

.int-bits {
  font-size: 1.5em;
  font-family: monospace, monospace;
  /* overflow: auto; */
  /* display: block; */
  text-align: center;
}

.int-operation {
  /* text-indent:1.5em; */
  margin: 0px;
  margin-left: 50px;
  /* margin-left: 10px; */
  /* font-weight: normal; */
  padding-left: 10px;
}

.int-example {
  margin: 0px;
  margin-left: 10px;
  font-weight: bolder;
  padding: 0px;
}

.int-title {
  margin-top: 1px;
  margin-bottom: 1px;
  margin-left: 5px;
  margin-right: 1px;
}

table.int-outer {
  border-color: black;
  border-style: solid;
  border-width: 1px;
  border-spacing: 1px;
  /* margin-left:50px */
}

table.int-inner {
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

p.int-close {
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  text-indent: 60px;
}
</style>