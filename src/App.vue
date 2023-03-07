<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/todo">Todo list</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <div class="font-bold text-white bg-neutral-800">{{ currentRouteName }}</div>
  <router-view/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class App extends Vue {
  get currentRouteName(): string {
    return this.$route.name?.toString() || '';
  }
}
</script>

<style>
@import "assets/main.css";

</style>
