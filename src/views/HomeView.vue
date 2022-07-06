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

  

  <button class="add-note-btn" @click="showModal = true">
    <PlusIcon class="h-8 w-5"/>
  </button>
  <vue-final-modal v-model="showModal" classes="modal-container" content-class="modal-content">
    <button class="modal__close" @click="showModal = false">
      X
    </button>
    <span class="modal__title">新增日記</span>
    <div class="modal__content">
      <p>2022/7/4</p>
      <p>標題</p>
      <input type="text" placeholder="請輸入標題" v-model="dairyTitle">
      <p>標籤</p>
      <select name="groupTag" id="groupTag" v-model="groupTag">
        <option value="">請選擇</option>
        <option value="工作">工作</option>
        <option value="大學">大學</option>
      </select>
      <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
      <!-- <button @click="showHtml">show content HTML</button> -->
    </div>
    <div class="modal__action">
      <button @click="addNewDairy">confirm</button>
      <button @click="showModal = false">cancel</button>
    </div>
  </vue-final-modal>
      

</template>

<script> 
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { $vfm, VueFinalModal, ModalsContainer } from 'vue-final-modal'
import { PlusIcon } from '@heroicons/vue/solid'

export default {
    name: 'app',
    components: {
      VueFinalModal,
      ModalsContainer,
      PlusIcon 
    },
    data() {
        return {
            editor: ClassicEditor,
            editorData: '<p>Content of the editor.</p>',
            editorConfig: {
                // The configuration of the editor.
            },
            showModal: false,
            dairyTitle: '',
            groupTag: '',
        };
    },
    methods: {
      addNewDairy(){
        const dairyDetail = {
          title: this.dairyTitle,
          permission: this.groupTag,
          content: this.editorData
        }
        this.axios.post('/add-dairy', dairyDetail)
          .then((res) => {
            console.log(res.data)
          })
          .catch((err)=>{
            console.log(err);
          })
      }
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
.modal__title {
  margin: 0 1.5rem 1rem 0;
  font-size: 1.5rem;
  font-weight: 700;
}
.modal__content {
  flex-grow: 1;
  overflow-y: auto;
  text-align: left;
}
.modal__action {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding: 1rem 0 0;
}
.modal__close {
  position: absolute;
  top: 1rem;
  right: 1rem;
}
</style>