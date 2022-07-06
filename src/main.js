import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import CKEditor from '@ckeditor/ckeditor5-vue'
import { vfmPlugin } from 'vue-final-modal'
import './assets/tailwind.css'

createApp(App).use(router).use(VueAxios, axios).use(CKEditor).use(vfmPlugin).mount('#app')