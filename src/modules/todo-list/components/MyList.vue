<template>
  <!-- eslint-disable max-len -->
  <div class="h-auto max-h-[70%] overflow-y-auto rounded-lg">

    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="sticky top-0 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="p-4">
            <div class="flex items-center">
              <label for="checkbox-all-search" class="" >
                <input id="checkbox-all-search" type="checkbox" v-model="isAllChecked"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              </label>
            </div>
          </th>
          <th scope="col" class="px-6 py-3">
            Task name
          </th>
          <th scope="col" class="px-6 py-3 w-12">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <MyItem v-for="task in todoListStore.tasks" :key="task" :task="task"></MyItem>
      </tbody>
    </table>
  </div>

<!-- eslint-enable max-len -->

</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TodoListStore from '@/modules/todo-list/stores';
import MyItem from './MyItem.vue';

@Options({
  components: {
    MyItem,
  },
})
export default class MyList extends Vue {
  todoListStore = TodoListStore();

  isChecked = false;

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
