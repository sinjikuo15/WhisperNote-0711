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
                      " placeholder="" v-model="title" :class="{ 'border-red-600 focus:border-red-600 focus:ring focus:ring-red-600 focus:ring-opacity-20': titleError }">
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
                      " name="groupTag" id="permissionTag" v-model="permission" :class="{ 'border-red-600 focus:border-red-600 focus:ring focus:ring-red-600 focus:ring-opacity-20': permissionError }">
                        <option disabled value="">請選擇</option>
                        <template v-for="permissionOption in permissionOptions" :key="permissionOption.permission_id">
                          <option :value="permissionOption.permission_id">{{ permissionOption.per_name }}</option>
                        </template>
                      </select>
                </label>
                <!-- add permission -->
                <div class="add-permission mt-2 text-sm">
                  <p id="addPermissionBtn1" @click="addPermission" class="inline cursor-pointer"><PlusIcon class="inline w-3 mb-1"/>新增分類</p>
                  <div id="addPermissionSection1" class="hidden">
                    <input type="text" class="
                        mt-1
                        rounded-md
                        border-gray-300
                        shadow-sm
                        focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50
                    " v-model="newPermission">
                    <button @click="confirmAddPermission" class="rounded-md border border-transparent shadow-sm px-2 py-1 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 sm:ml-3 sm:w-auto sm:text-sm">確定</button>
                    <button @click="cancelAddPermission" class="rounded-md border border-gray-300 shadow-sm px-2 py-1 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-1 sm:w-auto sm:text-sm">取消</button>
                  </div>
                </div>

                <div class="my-5">
                      <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
                      <p class="text-red-600 mt-1">{{ contentErrorMsg }}</p>
                </div>
              </div>

              <!-- show -->
              <div id="showSection">
                <div id="diaryId" style="display:none;">
                  <slot name="diaryId"></slot>
                </div>
                <div id="title" class="text-xl mb-3">
                  <slot name="title"></slot>
                </div>
                <div id="date" class="mb-3 text-slate-400">
                  <slot name="date"></slot>
                </div>
                <div id="permissionId" style="display:none;">
                  <slot name="permissionId"></slot>
                </div>
                <div id="permissionName" class="mb-3">
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
                  <button type="button" class="justify-center rounded-md border border-transparent shadow-sm px-4 py-2 btn-primary text-base font-medium text-white sm:w-auto sm:text-sm" @click="editDiary">編輯</button>
                  <button type="button" class="justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-700 text-base font-medium text-white hover:bg-red-800 ml-2 sm:w-auto sm:text-sm" @click="confirmDelete">刪除</button>
                  <button type="button" class="justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 ml-2 sm:w-auto sm:text-sm" @click="$emit('cancelShow', close)">取消</button>
                </div>
                <!-- edit -->
                <div class="hidden" id="editModeBtn">
                  <button type="button" class="justify-center rounded-md border border-transparent shadow-sm px-4 py-2 btn-primary text-base font-medium text-white ml-2 sm:w-auto sm:text-sm" @click="updateDiary">儲存</button>
                  <button type="button" class="justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 ml-2 sm:w-auto sm:text-sm" @click="cancelEdit">取消編輯</button>
                </div>
              </div>
            </div>

            <!-- confirm delete modal -->
            <DeleteDiaryModal v-model="showDeleteModal" @confirmDelete="confirmDelete" @cancelDelete="cancelDelete"/>
        </vue-final-modal>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { $vfm, VueFinalModal, ModalsContainer } from 'vue-final-modal'
import { PlusIcon } from '@heroicons/vue/solid'
import { XIcon } from '@heroicons/vue/solid'
import DeleteDiaryModal from '../components/DeleteDiaryModal.vue'

export default {
    inject: ['reload'],
    components: {
        VueFinalModal,
        ModalsContainer,
        PlusIcon,
        XIcon,
        DeleteDiaryModal
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
            permissionOptions: [],
            newPermission: '',
            titleError: false,
            permissionError: false,
            contentErrorMsg: '',
            showDeleteModal: false,
        }
    },
    watch: {
      title: function () {
        if (!this.title) {
          this.titleError = true;
        } else {
          this.titleError = false;
        }
      },
      permission: function () {
        if (!this.permission) {
          this.permissionError = true;
        } else {
          this.permissionError = false;
        }
      },
      editorData: function () {
        if (!this.editorData) {
          this.contentErrorMsg = '請輸入內容';
        } else {
          this.contentErrorMsg = '';
        }
      },
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
        // console.log(this.editorData)

      },
      cancelEdit() {
        this.switchMode()
      },
      updateDiary() {
        //表單驗證
        if(!this.title){
          this.titleError = true;
        } else if(!this.permission){
          this.permissionError = true;
        } else if(!this.editorData){
          this.contentErrorMsg = '請輸入內容';
          return;
        } else {
          let permission_id = document.getElementById('permissionTag').value
          const diaryDetail = {
            diary_id: this.diaryId,
            title: this.title,
            permission_id: permission_id,
            content: this.editorData,
            date: this.date
          }
          console.log(diaryDetail)
          this.axios.post('/editDiary', {diaryDetail})
            .then((res) => {
              console.log(res.data)
              this.switchMode()
              // this.$emit('confirmShow', close); 
              this.reload()
            })
            .catch((err)=>{
              console.log(err);
            })
          
        }
      },
      // deleteDiary() {
      //   this.diaryId = document.getElementById('diaryId').innerText
      //   let diary_id = this.diaryId
      //   console.log(diary_id)
      //   this.axios.post('/deleteDiary', {diary_id})
      //     .then((res) => {
      //       console.log(res.data)
      //       alert('刪除成功')
      //     })
      //     .catch((err)=>{
      //       console.log(err);
      //     })
      //   this.$emit('confirmShow', close); 
      // },
      confirmDelete() {
        this.showDeleteModal = true
      },
      cancelDelete() {
        this.showDeleteModal = false
      },
      getPermission(){
        this.axios.get('/getPer')
          .then((res)=>{
            // console.log(res.data.data)
            localStorage.setItem('permissionOptions', JSON.stringify(res.data.data))
            this.permissionOptions = res.data.data
          })
          .catch((err)=>{
            console.log(err);
          })
      },
      switchPermissionMode(){
        const addPermissionBtn1 = document.querySelector('#addPermissionBtn1')
        const addPermissionSection1 = document.querySelector('#addPermissionSection1')
        console.log('add')
        addPermissionBtn1.classList.toggle('hidden')
        addPermissionSection1.classList.toggle('hidden')
      },
      addPermission(){
        this.switchPermissionMode()
        console.log('click')
        //先清空newPermission
        this.newPermission = ''
      },
      async confirmAddPermission(){
        const newPermission = this.newPermission
        await this.axios.post('/addPer', {newPermission})
          .then((res)=>{
            console.log('新增成功！', res.data)
            //新增成功後把newPermission塞到permission(讓選項選到newPermission的值)
            // this.permission = this.newPermission
            this.switchPermissionMode()
          })
          .catch((err)=>{
            console.log(err)
          })
        

      },
      cancelAddPermission(){
        this.switchPermissionMode()
      }
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

@media (min-width: 640px) {
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
.modal__action {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding: 1rem 0 0;
}
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