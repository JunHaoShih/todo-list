<template>

<footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center
  md:justify-between md:p-6 dark:bg-gray-800">
  <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
    <label for="checkAll" class="mb-2 flex-auto text-sm font-medium
      text-gray-900
      dark:text-gray-300">
      <input id="checkAll" type="checkbox" v-model="isAllChecked"
        class="w-4 h-4 text-blue-600
        bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600
        dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
    </label>
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
import { Emit } from 'vue-property-decorator';
import TodoListStore from '@/store/tasks';

@Options({
  props: {
    finishedCount: Number,
    totalCount: Number,
  },
})
export default class MyFooter extends Vue {
  isChecked = false;

  todoListStore = TodoListStore();

  onRemoveClicked(event: MouseEvent) {
    this.todoListStore.removeCompleteTasks();
  }

  get isAllChecked(): boolean {
    return this.todoListStore.isAllChecked;
  }

  set isAllChecked(checkState: boolean) {
    this.isChecked = checkState;
    if (checkState === true || this.todoListStore.totalCount === this.todoListStore.finishedCount) {
      this.todoListStore.setAllTasksState(checkState);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
