<template>
    <!-- <vue-final-modal v-model="showModal" classes="modal-container" content-class="modal-content"> -->
    <vue-final-modal v-slot="{ close }" v-bind="$attrs" classes="modal-container" content-class="modal-content">
            <button class="modal__close" @click="close">
                <XIcon class="h-8 w-5"/>
            </button>
            <span class="modal__title text-center text-xl leading-6 font-bold text-gray-900">我的角色</span>
            <div class="modal__content px-3 mt-3">

              <!-- edit -->
              <div class="hidden" id="editSection">
                <label class="block mt-3">
                  <span class="text-gray-700">角色名稱</span>
                  <input type="text" class="
                      mt-1
                      block
                      w-full
                      rounded-md
                      border-gray-300
                      shadow-sm
                      focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  " placeholder="" v-model="characterName" :class="{ 'border-red-600 focus:border-red-600 focus:ring focus:ring-red-600 focus:ring-opacity-20': characterNameError }">
                </label>
                <p class="text-red-600 mt-1">{{ characterNameErrMsg }}</p>
                <label class="block mt-3">
                    <span class="text-gray-700">角色敘述</span>
                    <textarea class="
                        mt-1
                        block
                        w-full
                        rounded-md
                        border-gray-300
                        shadow-sm
                        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                    " placeholder="" v-model="characterInfo" :class="{ 'border-red-600 focus:border-red-600 focus:ring focus:ring-red-600 focus:ring-opacity-20': characterInfoError }">
                    </textarea>
                    
                </label>
                <p class="text-red-600 mt-1">{{ characterInfoErrMsg }}</p>
                <label class="block mt-3">
                    <span class="text-gray-700">角色圖片</span>
                    <input type="text" class="
                        mt-1
                        block
                        w-full
                        rounded-md
                        border-gray-300
                        shadow-sm
                        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                    " placeholder="請輸入圖片連結" v-model="characterPic">
                </label>
              </div>

              <!-- show -->
              <div id="showSection" class="flex flex-col items-center mt-5">
                <div id="characterId" style="display:none;">
                  <slot name="characterId"></slot>
                </div>
                <div id="characterPic" class="w-36 h-36 rounded-full overflow-hidden">
                  <slot name="characterPic"></slot>
                </div>
                <div id="characterName" class="text-xl font-bold mt-5 mb-3 text-center">
                  <slot name="characterName"></slot>
                </div>
                <div id="characterInfo" class="mb-3 text-center">
                  <slot name="characterInfo"></slot>
                </div>
              </div>

            </div>
            <div class="flex justify-end mt-3">
              <div class="modal__action">
                <!-- show -->
                <div id="showModeBtn">
                  <button type="button" class="w-full justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 sm:ml-3 sm:w-auto sm:text-sm" @click="editCharacter">編輯</button>
                  <button type="button" class="w-full justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 sm:ml-3 sm:w-auto sm:text-sm" @click="confirmDelete">刪除</button>
                  <button type="button" class="mt-3 w-full justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="$emit('cancelShow', close)">取消</button>
                </div>
                <!-- edit -->
                <div class="hidden" id="editModeBtn">
                  <button type="button" class="w-full justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 sm:ml-3 sm:w-auto sm:text-sm" @click="updateCharacter">儲存</button>
                  <button type="button" class="mt-3 w-full justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="cancelEdit">取消編輯</button>
                </div>
              </div>
            </div>

            <!-- confirm delete modal -->
            <DeleteCharacterModal v-model="showDeleteModal" @confirmDelete="confirmDelete" @cancelDelete="cancelDelete"/>
        </vue-final-modal>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { $vfm, VueFinalModal, ModalsContainer } from 'vue-final-modal'
import { PlusIcon } from '@heroicons/vue/solid'
import { XIcon } from '@heroicons/vue/solid'
import DeleteCharacterModal from '../components/DeleteCharacterModal.vue'

export default {
    inject: ['reload'],
    components: {
        VueFinalModal,
        ModalsContainer,
        PlusIcon,
        XIcon,
        DeleteCharacterModal
    },
    data() {
        return {
            showModal: false,
            showDeleteModal: false,
            characterId: '',
            characterName: '',
            characterInfo: '',
            characterPic: '',
            characterNameError: false,
            characterNameErrMsg: "",
            characterInfoError: false,
            characterInfoErrMsg: "",
        }
    },
    watch: {
      characterName: function () {
        if(!this.characterName){
          this.characterNameError = true;
          this.characterNameErrMsg = "請輸入名稱";
          return;
        } else {
          this.characterNameError = false;
          this.characterNameErrMsg = "";
        }
      },
      characterInfo: function () {
        if(!this.characterInfo){
          this.characterInfoError = true;
          this.characterInfoErrMsg = "請輸入敘述";
          return;
        } else {
          this.characterInfoError = false;
          this.characterInfoErrMsg = "";
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
      editCharacter() {
        this.switchMode()
        this.characterId = document.getElementById('characterId').innerText
        this.characterName = document.getElementById('characterName').innerText
        this.characterInfo = document.getElementById('characterInfo').innerText
        this.characterPic = document.getElementById('characterPic').firstElementChild.src
        // console.log(this.characterPic)
      },
      cancelEdit() {
        this.switchMode()
      },
      updateCharacter() {
        //表單驗證
        if(!this.characterName) {
          this.characterNameError = true;
          this.characterNameErrMsg = "請輸入名稱";
        } 
        if(!this.characterInfo){
          this.characterInfoError = true;
          this.characterInfoErrMsg = "請輸入敘述";
          return
        }
        const characterContent = {
          name: this.characterName,
          pic: this.characterPic,
          info: this.characterInfo
        }
        console.log('characterContent', characterContent)
        this.axios.post('/editCharacter', characterContent)
          .then((res) => {
            console.log(res.data)
            alert('新增成功！')
            this.reload()
          })
          .catch((err)=>{
            console.log(err);
          })
      },
      confirmDelete() {
        this.showDeleteModal = true
      },
      cancelDelete() {
        this.showDeleteModal = false
      },
    },
    mounted() {
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
    width: 40vw;
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