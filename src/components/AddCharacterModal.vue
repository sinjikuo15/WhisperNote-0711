<template>
    <!-- <vue-final-modal v-model="showModal" classes="modal-container" content-class="modal-content"> -->
    <vue-final-modal v-slot="{ close }" v-bind="$attrs" classes="modal-container" content-class="modal-content">
            <button class="modal__close" @click="close">
                <XIcon class="h-8 w-5"/>
            </button>
            <span class="modal__title text-center text-xl leading-6 font-bold text-gray-900">新增角色</span>
            <div class="modal__content px-3 mt-3">
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
            <div class="flex justify-end mt-3">
              <div class="modal__action">
                  <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 sm:ml-3 sm:w-auto sm:text-sm" @click="addCharacter">確認</button>
                  <button type="button"  class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="$emit('cancel', close)">取消</button>
              </div>
            </div>
        </vue-final-modal>
</template>

<script>
import { $vfm, VueFinalModal, ModalsContainer } from 'vue-final-modal'
import { PlusIcon } from '@heroicons/vue/solid'
import { XIcon } from '@heroicons/vue/solid'

export default {
    inject: ['reload'],
    components: {
        VueFinalModal,
        ModalsContainer,
        PlusIcon,
        XIcon,
    },
    data() {
        return {
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
      addCharacter(){
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
        this.axios.post('/addCharacter', characterContent)
          .then((res) => {
            console.log(res.data)
            alert('新增成功！')
            this.reload()
          })
          .catch((err)=>{
            console.log(err);
          })
        // this.$emit('confirm', close);
        
      },
    },
    
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
    height: 60vh;
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
</style>