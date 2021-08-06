import { createApp } from 'vue';
import mitt from 'mitt';
import store from './store/store';
import App from './App.vue';

const bus = mitt();
const app = createApp(App);

app.use(store);

app.mount('#app');

export default bus;
