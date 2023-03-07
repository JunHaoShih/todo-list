<template>
  <div id="todo-container" class="container mx-auto max-w-5xl">
    <MyHeader @applyInput="addTask"/>
    <MyList :tasks="tasks"/>
    <MyFooter :finishedCount="doneTasks.length" :totalCount="tasks.length"
    @applyRemove="removeCompleteTasks" @onIsCheckedChanged="checkAll"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import MyHeader from '@/components/MyHeader.vue'; // @ is an alias to /src
import MyFooter from '@/components/MyFooter.vue';
import MyList from '@/components/MyList.vue';
import Task from '@/components/task';
import { Watch } from 'vue-property-decorator';

@Options({
  components: {
    MyHeader,
    MyFooter,
    MyList,
  },
})
export default class ToDoView extends Vue {
  // You have to assign value to task, or it will not be reactive
  tasks: Task[] = [];

  counter = 0;

  created(): void {
    const localTasks: string | null = localStorage.getItem('todoTasks');
    if (localTasks) {
      this.tasks = JSON.parse(localTasks!);
    }
  }

  get doneTasks(): Task[] {
    return this.tasks.filter((task) => task.isDone);
  }

  addTask(task: string) {
    // this.tasks.push(task);
    this.tasks.push({
      id: this.counter += 1,
      taskName: task,
      isDone: false,
    });
  }

  @Watch('tasks', { deep: true })
  onTasksChanged(newTasks: Task[], oldTasks: Task[]) {
    localStorage.setItem('todoTasks', JSON.stringify(this.tasks));
  }

  removeCompleteTasks() {
    const checkedTasks = this.tasks.filter((task) => !task.isDone);
    if (window.confirm(`Are you sure you want to delete ${checkedTasks.length}`)) {
      this.tasks = checkedTasks;
    }
  }

  checkAll(checkState: boolean): void {
    // if (checkState === false)
    for (let i = 0; i < this.tasks.length; i += 1) {
      this.tasks[i].isDone = checkState;
    }
  }
}
</script>
