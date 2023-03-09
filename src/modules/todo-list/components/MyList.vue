<template>
  <div class="h-auto max-h-[70%] overflow-y-auto">
    <MyItem v-for="task in todoListStore.tasks" :key="task" :task="task"></MyItem>
  </div>
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
