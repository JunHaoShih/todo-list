<template>
  <div id="todo-container" class="container mx-auto max-w-5xl">
    <MyHeader/>
    <MyList/>
    <MyFooter/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import MyHeader from '@/components/MyHeader.vue'; // @ is an alias to /src
import MyFooter from '@/components/MyFooter.vue';
import MyList from '@/components/MyList.vue';
import TodoListStore from '@/store/tasks';
import { Watch } from 'vue-property-decorator';
import { Task } from '@/store/tasks/task-model';

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
