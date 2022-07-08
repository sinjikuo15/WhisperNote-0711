<template>
 <div class="flex justify-center">
    <!-- sidebar -->
    <div class=" sm:w-3/12 lg:w-2/12  sidebar bg-pink-100 py-8 ">
      <h1 class="text-center text-2xl font-bold">WhisperNote</h1>
      <ul class="py-5 ">
        <li><a href=""><i class="fa-solid fa-house"></i>Home</a></li>
        <li><a href=""><i class="fa-solid fa-calendar-days"></i>Calender</a></li>
        <li><a href=""><i class="fa-solid fa-user"></i>Characters</a></li>
        <li><a href=""><i class="fa-solid fa-users"></i>Friend</a></li>
        <li><a href=""><i class="fa-solid fa-file"></i>Profile</a></li>
      </ul>
      <div class="user border-t-2 border-red-500 sm:w-3/12 lg:w-2/12 p-2 flex ">
        <figure class="admin-wrap ml-1 mr-2">
          <img class="admin" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4pJ34f4qX_Q4eueupI3eMzlB6dBT5DKTsQw&usqp=CAU" alt="">
        </figure>
        <div class="flex-wrap">
          <h1 class="font-bold block">username</h1> 
          <p>view profile</p>  
        </div>
           
      </div>
    </div>
    <!-- 右邊日記的部分 -->
    <div class="w-full sm:w-6/12 border border-gray-400">
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
      <div class="grid grid-flow-col h-full z-10 overflow-hidden ">
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
  <button class="add-note-btn" @click="showModal = true">
    <PlusIcon class="h-8 w-5"/>
  </button>
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

export default {
    name: 'app',
    components: {
      VueFinalModal,
      ModalsContainer,
      PlusIcon,
      XIcon,
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
height: 100vh;
border-radius: 10px 0px 0px 10px;
}
.vc-day {
  padding: 0 5px 3px 5px;
  border-right: 1px solid rgb(175, 175, 175);
  height: 80px;
  text-align: left; 
  background-color: white;
}
.vc-weekday{
  background-color: #eff8ff;
}
.sidebar ul li a{
  display: block;
  padding: 12px;
  font-size: 1.2rem;
}
.sidebar ul li a:hover{
  color: antiquewhite;
  background-color: pink;
}
.user{  
  position: absolute;
  bottom: 0vh;
  display: inline-block;
  align-items:center
    
}
.admin-wrap{
  width: 75px;
}
.admin{
  width: 100%;
  border-radius: 50%;

}
@media screen and (max-width:650px) {
    .sidebar {
        display: none;
    }
}
/* .add-note-btn{
  position: fixed;
} */
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