<template>
  <div id="todo-container" class="container mx-auto max-w-5xl">
    <MyHeader @applyInput="addTask"/>
    <MyList :tasks="tasks"/>
    <MyFooter :finishedCount="doneTasks.length" :totalCount="tasks.length"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import MyHeader from '@/components/MyHeader.vue'; // @ is an alias to /src
import MyFooter from '@/components/MyFooter.vue';
import MyList from '@/components/MyList.vue';
import Task from '@/components/task';

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
}
</script>
