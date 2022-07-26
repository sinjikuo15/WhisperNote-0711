<template>
    <!-- <vue-final-modal v-model="showModal" classes="modal-container" content-class="modal-content"> -->
    <vue-final-modal v-slot="{ close }" v-bind="$attrs" classes="modal-container" content-class="modal-content">
            <button class="modal__close" @click="close">
                <XIcon class="h-8 w-5"/>
            </button>
            <span class="modal__title text-center text-xl leading-6 font-bold text-gray-900">我的日記</span>
            <div class="modal__content px-3 mt-3">

              <!-- edit -->
              <div class="hidden" id="editSection">
                <label class="block mt-3">
                      <span class="text-gray-700">標題</span>
                      <input type="text" class="
                          mt-1
                          block
                          w-full
                          rounded-md
                          border-gray-300
                          shadow-sm
                          focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50
                      " placeholder="" v-model="title">
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
                          focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50
                      " v-model="date">
                </label>
                <label class="block mt-3" @click="getPermission">
                      <span class="text-gray-700">分類</span>
                      <select class="
                          block
                          w-full
                          mt-1
                          rounded-md
                          border-gray-300
                          shadow-sm
                          focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50
                      " name="groupTag" id="groupTag" v-model="permission">
                        <option disabled value="">請選擇</option>
                        <template v-for="permissionOption in permissionOptions" :key="permissionOption.permission_id">
                          <option :value="permissionOption.permission_id">{{ permissionOption.per_name }}</option>
                        </template>
                      </select>
                </label>
                <div class="my-5">
                      <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
                </div>
              </div>

              <!-- show -->
              <div id="showSection">
                <div id="diaryId" style="display:none;">
                  <slot name="diaryId"></slot>
                </div>
                <div id="title">
                  <slot name="title"></slot>
                </div>
                <div id="date">
                  <slot name="date"></slot>
                </div>
                <div id="permissionId" style="display:none;">
                  <slot name="permissionId"></slot>
                </div>
                <div id="permissionName">
                  <slot name="permissionName"></slot>
                </div>
                <div class="" id="content">
                  <slot name="content"></slot>
                </div>
              </div>

            </div>
            <div class="flex justify-end mt-3">
              <div class="modal__action">
                <!-- show -->
                <div id="showModeBtn">
                  <button type="button" class="w-full justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 sm:ml-3 sm:w-auto sm:text-sm" @click="editDiary">編輯</button>
                  <button type="button" class="mt-3 w-full justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="$emit('cancelShow', close)">取消</button>
                </div>
                <!-- edit -->
                <div class="hidden" id="editModeBtn">
                  <button type="button" class="w-full justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 sm:ml-3 sm:w-auto sm:text-sm" @click="updateDiary">儲存</button>
                  <button type="button" class="mt-3 w-full justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="cancelEdit">取消編輯</button>
                </div>
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
            title: '',
            permission: '', //要再抓出該使用者的permission，迴圈顯示option
            date: '',
            diaryId: '',
            permissionOptions: []
        }
    },
    methods: {
      switchMode() {
        const showModeBtn = document.querySelector('#showModeBtn')
        const editModeBtn = document.querySelector('#editModeBtn')
        const showSection = document.querySelector('#showSection')
        const editSection = document.querySelector('#editSection')

        showModeBtn.classList.toggle('hidden')
        editModeBtn.classList.toggle('hidden')
        showSection.classList.toggle('hidden')
        editSection.classList.toggle('hidden')
      },
      editDiary() {
        this.switchMode()
        this.diaryId = document.getElementById('diaryId').innerText
        this.title = document.getElementById('title').innerText
        this.permission = document.getElementById('permissionId').innerText
        this.date = document.getElementById('date').innerText
        this.editorData = document.getElementById('content').innerHTML
        console.log(this.editorData)

      },
      cancelEdit() {
        this.switchMode()
      },
      updateDiary() {
        // this.$emit('confirmShow', close); 
        const diaryDetail = {
          diary_id: this.diaryId,
          title: this.title,
          permission: this.permission,
          content: this.editorData,
          date: this.date
        }
        console.log(diaryDetail)
        // this.axios.post('/addDiary', diaryDetail)
        //   .then((res) => {
        //     console.log(res.data)
        //   })
        //   .catch((err)=>{
        //     console.log(err);
        //   })
      },
      getPermission(){
        this.axios.get('getPer.json')
          .then((res)=>{
            console.log(res.data)
            this.permissionOptions = res.data
          })
          .catch((err)=>{
            console.log(err);
          })
      },
    },
    mounted() {
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth()+1;
        if (month<10) month="0"+month
        let date = now.getDate();
        if (date<10) date="0"+date
        this.date = year+"-"+month+"-"+date

        this.getPermission()
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
  width: 90vw;
  height: 80vh;
  margin: 1rem 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}

@media (min-width: 1024px) {
::v-deep .modal-content {
    width: 50vw;
    height: 70vh;
  }
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

/* 覆蓋tailwind預設樣式來顯示ckeditor結果 */
/* .content > blockquote,
.content > dl, 
.content > dd, 
.content > h1, 
.content > h2, 
.content > h3, 
.content > h4, 
.content > h5, 
.content > h6, 
.content > hr, 
.content > figure,
.content > p, .content > pre {
  margin: revert !important;
}

.content > ol, 
.content > ul {
  list-style: revert !important;
  margin: revert !important;
  padding: revert !important;
}

.content > table {
  border-collapse: revert !important;
}

.content > h1, 
.content > h2, 
.content > h3, 
.content > h4, 
.content > h5, 
.content > h6 {
  font-size: revert !important;
  font-weight: revert !important;
} */



</style>