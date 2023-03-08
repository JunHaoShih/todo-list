import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

createApp(App)
  .use(createPinia())
  // .use(store)
  .use(router)
  .mount('#app');
