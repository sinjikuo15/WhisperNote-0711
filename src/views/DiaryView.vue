<template>
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
            showModal: true,
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