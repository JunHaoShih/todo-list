<template>

<footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center
  md:justify-between md:p-6 dark:bg-gray-800">
  <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
    完成 <span class="hover:underline text-green-600">{{ finishedCount }}</span> 項
    / 共 <span class="hover:underline text-red-600">{{ totalCount }}</span> 項
  </span>
</footer>

</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    finishedCount: Number,
    totalCount: Number,
  },
})
export default class MyFooter extends Vue {
  finishedCount!: number

  totalCount!: number
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
