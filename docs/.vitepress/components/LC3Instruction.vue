<template>
  <div class="lc3instruction">
    <table class="int-outer">
      <thead>
        <tr>
          <th colspan="2">
            <h3 class="int-title">{{ opName }}</h3>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td colspan="2">
            <table class="int-inner" style="width: 80%">
              <tbody>
                <tr>
                  <td class="int-bits float-left" v-for="heading in getHeader" :key="heading">
                    {{ heading }}
                  </td>
                </tr>
                <tr>
                  <td class="int-bits float-left" v-for="bits in getBits" :key="bits">
                    {{ bits }}
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>

        <tr v-for="description in descriptions" :key="description">
          <td colspan="2">
            <p class="int-close">
              <b>{{ formatName(description) }}</b> : {{ formatDesc(description) }}
            </p>
          </td>
        </tr>

        <tr v-if="examples">
          <td colspan="2">
            <div class="int-close">
              <br />
              <p v-if="operation" class="int-example">Operation:</p>
              <p class="int-operation">{{ operation }}</p>

              <p class="int-example">Examples:</p>
              <p class="int-close int-code" v-for="example in examples" :key="example">
                {{ example }}
              </p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script setup>
import { ref, computed } from 'vue';
const props = defineProps({
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
});

const getHeader = computed(() => Object.keys(props.bitPattern));
const getBits = computed(() => Object.values(props.bitPattern));
// computed: {
//   getHeader: function () {
//     return Object.keys(this.bitPattern);
//   },
//   getBits: function () {
//     return Object.values(this.bitPattern);
//   },
// },

function formatName(desc) {
  return Object.keys(desc)[0];
};

function formatDesc(desc) {
  return Object.values(desc)[0];
};
</script>




<!-- <script>
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
</script> -->

<style>
.int-code {
  font-family: "Source Code Pro", "Consolas", "Bitstream Vera Sans Mono",
    "Courier New", "Courier", monospace;
  font-weight: bolder;
  margin: 0px;
  padding: 0px;
  margin-left: 10px;
}

.int-bits {
  font-size: 24px;
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
  width: 100%;
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