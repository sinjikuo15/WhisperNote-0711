<template>
    <!-- <vue-final-modal v-model="showModal" classes="modal-container" content-class="modal-content"> -->
    <vue-final-modal v-slot="{ close }" v-bind="$attrs" classes="modal-container" content-class="delete-modal-content">
            <button class="modal__close" @click="close">
                <XIcon class="h-8 w-5"/>
            </button>
            <span class="modal__title text-center text-xl leading-6 font-bold text-gray-900">刪除角色</span>
            <div class="modal__content px-3 mt-3">
              <p class="mt-5">確定要刪除該角色？</p>
            </div>
            <div class="flex justify-end mt-3">
              <div class="modal__action">
                  <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-700 text-base font-medium text-white hover:bg-red-800 sm:ml-3 sm:w-auto sm:text-sm" @click="deleteCharacter">確認</button>
                  <button type="button" class="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 ml-3 sm:w-auto sm:text-sm" @click="$emit('cancelDelete', close)">取消</button>
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

        }
    },
    methods: {
      deleteCharacter() {
        let character_id = document.getElementById('characterId').innerText
        this.axios.post('/deleteCharacter', {character_id})
          .then((res) => {

            console.log(res)
            alert('刪除成功')
            this.$emit('cancelDelete');
            this.reload()
          })
          .catch((err)=>{
            console.log(err);
          })
        
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
::v-deep .delete-modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 55vw;
  height: 40vh;
  margin: 1rem 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}

@media (min-width: 640px) {
::v-deep .delete-modal-content {
    width: 30vw;
    height: 30vh;
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
</style>