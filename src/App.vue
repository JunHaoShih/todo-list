<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/todo">Todo list</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <div class="font-bold text-white bg-neutral-800">Hello World</div>
  <router-view/>
</template>

<style>
@import "assets/main.css";

</style>
