<template>
 <div class="flex py-5">
    <!-- sidebar -->
    <SideBar></SideBar>
    <!-- 右邊日記的部分 -->
    <div class="w-full sm:w-8/12 border border-gray-300 diary">
      <!-- <div class="flex"> -->
      
    <form class="flex items-center pl-1">   
        <label for="simple-search" class="sr-only">Search</label>
        <div class="relative w-10/12">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" id="simple-search" class=" border-gray-300 text-blue-900 text-sm input-focus rounded-md block w-full pl-10 p-2.5  " placeholder="Search" required="">
        </div>
        <div class="flex w-3/12  justify-center">
          <a href="flex items-center">
            <i class="fa-regular fa-bell block text-xl p-3  text-gray-500 hover:text-red-400"></i>
          </a>
          <figure class="user-wrap p-1 pr-1">
            <img class="user" src="https://i.pinimg.com/736x/fa/1f/25/fa1f2501f67e22f7c44478af0f7ae8aa.jpg" alt="">
          </figure>
        </div>    
    </form>

      <!-- </div> -->
      <div class="text-center flex justify-around  py-8 bg-gray-200  ">
        <h2 class="text-start text-2xl"> ＜ </h2>
        <h1 class="font-bold text-xl">6月 2022</h1>
        <h2 class="font-bold text-2xl"> ＞</h2>
        
      </div>
      <div class="grid grid-flow-col text-center bg-gray-100 text-gray-400 border-t border-b border-gray-300 font-bold">
        <h3 class="w1/7">週日</h3>
        <h3 class="w1/7">週一</h3>
        <h3 class="w1/7">週二</h3>
        <h3 class="w1/7">週三</h3>
        <h3 class="w1/7">週四</h3>
        <h3 class="w1/7">週五</h3>
        <h3 class="w1/7">週六</h3>
      </div>
      <div class="grid grid-flow-col   ">
        <div class="w1/7 vc-day vc-weekday">1</div>
        <div class="w1/7 vc-day">2</div>
        <div class="w1/7 vc-day">3</div>
        <div class="w1/7 vc-day">4</div>
        <div class="w1/7 vc-day">5</div>
        <div class="w1/7 vc-day ">6</div>
        <div class="w1/7 vc-day vc-weekday">7</div>
      </div>
    </div>
  </div>

<!-- modal -->
  <div class="fixed bottom-10 right-10 inline-block w-10 h-10 bg-blue-600 rounded-full" @click="showModal = true">
      <PlusIcon class="h-6 w-6 text-[#fff] mt-2 ml-2"/>
  </div>
  <vue-final-modal v-model="showModal" classes="modal-container" content-class="modal-content">
    <button class="modal__close" @click="showModal = false">
      <XIcon class="h-8 w-5"/>
    </button>
    <span class="modal__title text-center text-xl leading-6 font-bold text-gray-900">新增日記</span>
    <div class="modal__content">
      <label class="block mt-3">
        <span class="text-gray-700">標題</span>
        <input type="text" class="
            mt-1
            block
            w-full
            rounded-md
            border-gray-300
            shadow-sm
            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
          " placeholder="" v-model="diaryTitle">
      </label>
      <label class="block mt-3">
        <span class="text-gray-700">日期</span>
        <input type="date" class="
            mt-1
            block
            w-full
            rounded-md
            border-gray-300
            shadow-sm
            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
          " v-model="date">
      </label>

      <label class="block mt-3">
        <span class="text-gray-700">標籤</span>
        <select class="
            block
            w-full
            mt-1
            rounded-md
            border-gray-300
            shadow-sm
            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
          " name="groupTag" id="groupTag" v-model="groupTag">
          <option value="">請選擇</option>
          <option value="工作">工作</option>
          <option value="大學">大學</option>
        </select>
      </label>
      <div class="my-5">
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
      </div>
    </div>
    <div class="flex justify-end mt-3">
      <div class="modal__action">
        <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm" @click.prevent="addNewDiary">confirm</button>
        <button type="button"  class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="showModal = false">cancel</button>
      </div>
    </div>
    
  </vue-final-modal>

</template>

<script> 
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { $vfm, VueFinalModal, ModalsContainer } from 'vue-final-modal'
import { PlusIcon } from '@heroicons/vue/solid'
import { XIcon } from '@heroicons/vue/solid'
import SideBar from '../components/SideBar.vue'

export default {
  components: {
        SideBar
    },
    name: 'app',
    components: {
    VueFinalModal,
    ModalsContainer,
    PlusIcon,
    XIcon,
    SideBar
},
    data() {
        return {
            editor: ClassicEditor,
            editorData: '',
            editorConfig: {
                // The configuration of the editor.
            },
            showModal: false,
            diaryTitle: '',
            groupTag: '', //要再抓出該使用者的permission，迴圈顯示option
            date: '',
            inputDate: ''
        };
    },
    methods: {
      addNewDiary(){
        const diaryDetail = {
          title: this.diaryTitle,
          permission: this.groupTag,
          content: this.editorData,
          date: this.date
        }
        console.log(diaryDetail)
        this.axios.post('/add-diary', diaryDetail)
          .then((res) => {
            console.log(res.data)
          })
          .catch((err)=>{
            console.log(err);
          })
      }
    },
    mounted(){
      let now = new Date();
      let year = now.getFullYear();
      let month = now.getMonth()+1;
      if (month<10) month="0"+month
      let date = now.getDate();
      if (date<10) date="0"+date
      this.date = year+"-"+month+"-"+date
    }
}

</script>

<style scoped>
.sidebar{
height: 80vh;

}
.sidebar-title{
  font-family: 'Prompt', sans-serif;
}
.sidebar ul li a{
  font-weight: 600;
  padding: 10px 15px 10px 15px;
  font-size: 1rem;
  color:rgb(250, 250, 250);
  margin-left: 12px;
  margin-right: 12px;
  border-radius: 10px;
}
.sidebar ul li a:hover{
  color: white;
  background-color: rgb(17, 24, 39);
  
}
.logo-wrap{
  width: 50px;
        
    }
.logo{
  width: 100%;
  }
/* svg位子微調 */
.home{
  position: relative;
  right:2px;
}
.friends{
  position: relative;
  right:4px;
}
.login{
  position: relative;
  right:4px;
}
/* 日記區 */
.user-wrap{
  width:50px;
  border-radius: 50px;
}
.user{
  width:100%; 

}
.vc-day {
  padding: 0 5px 3px 5px;
  border-right: 1px solid rgb(215, 215, 215);
  height: 80px;
  text-align: left; 
  background-color: white;
}
.vc-weekday{
  background-color: #eff8ff;
}


@media screen and (max-width:640px) {
    .sidebar {
        display: none;
    }
}
::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 70vw;
  height: 70vh;
  margin: 1rem 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}
/* .modal__title {
  margin: 0 1.5rem 1rem 0;
  font-size: 1.5rem;
  font-weight: 700;
} */
.modal__content {
  flex-grow: 1;
  overflow-y: auto;
  text-align: left;
}
/* .modal__action {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding: 1rem 0 0;
} */
.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 1rem;
}
</style>