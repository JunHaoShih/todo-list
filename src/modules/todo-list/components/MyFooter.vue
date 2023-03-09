<template>

<footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center
  md:justify-between md:p-6 dark:bg-gray-800">
  <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
    完成 <span class="hover:underline text-green-600">{{ todoListStore.finishedCount }}</span> 項
    / 共 <span class="hover:underline text-red-600">{{ todoListStore.totalCount }}</span> 項
  </span>
  <button type="button" class="text-white
    bg-red-700 hover:bg-red-800 focus:outline-none
    focus:ring-4  focus:ring-red-300 font-medium rounded-full
    text-sm px-5 py-2.5 text-center mr-2 mb-2
    dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
    @click="onRemoveClicked">Remove Complete Tasks</button>
</footer>

</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TodoListStore from '@/modules/todo-list/stores/index';

@Options({
  props: {
    finishedCount: Number,
    totalCount: Number,
  },
})
export default class MyFooter extends Vue {
  todoListStore = TodoListStore();

  onRemoveClicked(event: MouseEvent) {
    this.todoListStore.removeCompleteTasks();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
