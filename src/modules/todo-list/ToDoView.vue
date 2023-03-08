<template>
  <div id="todo-container" class="container mx-auto max-w-5xl">
    <MyHeader/>
    <MyList/>
    <MyFooter/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import MyHeader from '@/modules/todo-list/components/MyHeader.vue';
import MyFooter from '@/modules/todo-list/components/MyFooter.vue';
import MyList from '@/modules/todo-list/components/MyList.vue';
import TodoListStore from '@/modules/todo-list/stores/index';
import { Task } from '@/modules/todo-list/stores/task-model';

@Options({
  components: {
    MyHeader,
    MyFooter,
    MyList,
  },
})
export default class ToDoView extends Vue {
  todoListStore = TodoListStore();

  created(): void {
    const localTasks: string | null = localStorage.getItem('todoTasks');
    if (localTasks) {
      this.todoListStore.tasks = JSON.parse(localTasks!);
    }
  }

  @Watch('todoListStore.tasks', { deep: true })
  onTasksChanged(newTasks: Task[], oldTasks: Task[]) {
    localStorage.setItem('todoTasks', JSON.stringify(this.todoListStore.tasks));
  }
}
</script>
