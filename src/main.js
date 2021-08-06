import Vue, { createApp } from 'vue';

import store from './store/store';
import App from './App.vue';

export default new Vue();
const app = createApp(App);

app.use(store);

app.mount('#app');
