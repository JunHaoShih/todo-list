<template>
  <div class="mb-6">
    <label for="task" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      Task
      <input id="task" type="text"
        class="block w-full p-4
        text-gray-900 border
        border-gray-300 rounded-lg
        bg-gray-50 sm:text-md
        focus:ring-blue-500
        focus:border-blue-500
        dark:bg-gray-700
        dark:border-gray-600
        dark:placeholder-gray-400
        dark:text-white
        dark:focus:ring-blue-500
        dark:focus:border-blue-500"
        placeholder="Please enter your task and press ENTER"
        v-model="inputTask"
        @keyup.enter="submitTask"/>
    </label>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TodoListStore from '@/modules/todo-list/stores/index';

@Options({})
export default class MyHeader extends Vue {
  todoListStore = TodoListStore();

  // You have to assign value to inputTask, or it will not be reactive
  inputTask = '';

  submitTask(event: KeyboardEvent): void {
    this.todoListStore.addTask(this.inputTask);
    this.inputTask = '';
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
