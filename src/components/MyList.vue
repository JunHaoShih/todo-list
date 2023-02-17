<template>
  <MyItem v-for="task in tasks" :key="task" :task="task"
  @sendBackId="removeTask"></MyItem>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import MyItem from './MyItem.vue';
import Task from './task';

@Options({
  props: {
    tasks: Array,
  },
  components: {
    MyItem,
  },
})
export default class MyList extends Vue {
  tasks!: Task[];

  removeTask(id: number) {
    this.tasks.forEach((task: Task, index: number, tasks: Task[]) => {
      if (task.id === id) tasks.splice(index, 1);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
