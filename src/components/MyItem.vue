<template>
  <div class="flex">
    <label v-bind:for="task.id.toString()" class="block mb-2 flex-auto text-sm font-medium
      text-gray-900
      dark:text-gray-300">
      <input v-bind:id="task.id.toString()" type="checkbox" value="" v-model="task.isDone"
        class="w-4 h-4 text-blue-600
        bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600
        dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        {{ task.taskName }}
    </label>
    <button type="button" class="text-white
      bg-red-700 hover:bg-red-800 focus:outline-none
      focus:ring-4  focus:ring-red-300 font-medium rounded-full
      text-sm px-5 py-2.5 text-center mr-2 mb-2
      dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      @click="onRemoveClicked">Remove</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Emit } from 'vue-property-decorator';
import Task from './task';

@Options({
  props: {
    task: Task,
  },
})
export default class MyItem extends Vue {
  task!: Task

  onRemoveClicked(event: MouseEvent) {
    this.sendBackId();
  }

  @Emit()
  sendBackId(): number {
    return this.task.id;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
