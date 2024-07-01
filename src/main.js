import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './data/i18n'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


createApp(App).use(router).use(i18n).mount('#app')
