<template>
    <!-- <vue-final-modal v-model="showModal" classes="modal-container" content-class="modal-content"> -->
    <vue-final-modal v-slot="{ close }" v-bind="$attrs" classes="modal-container" content-class="modal-content">
            <button class="modal__close" @click="close">
                <XIcon class="h-8 w-5"/>
            </button>
            <span class="modal__title text-center text-xl leading-6 font-bold text-gray-900">我的好友</span>
            <div class="modal__content px-3 mt-3">

              <!-- show -->
              <div id="showSection" class="flex flex-col items-center mt-5">
                <div id="friendId" style="display:none;">
                  <slot name="friendId"></slot>
                </div>
                <div id="friendPic" class="w-36 h-36 rounded-full overflow-hidden">
                  <slot name="friendPic"></slot>
                </div>
                <div id="friendName" class="text-xl font-bold mt-5 mb-3 text-center">
                  <slot name="friendName"></slot>
                </div>
                <div id="friendEmail" class="mb-3 text-center">
                  <slot name="friendEmail"></slot>
                </div>
              </div>

            </div>
            <div class="flex justify-end mt-3">
              <div class="modal__action">
                <!-- show -->
                <div id="showModeBtn">
                  <button type="button" class="justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-700 text-base font-medium text-white hover:bg-red-800 sm:ml-3 sm:w-auto sm:text-sm" @click="confirmDelete">刪除</button>
                  <button type="button" class="justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 ml-2 sm:w-auto sm:text-sm" @click="$emit('cancelShow', close)">取消</button>
                </div>
              </div>
            </div>

            <!-- confirm delete modal -->
            <DeleteFriendModal v-model="showDeleteModal" @confirmDelete="confirmDelete" @cancelDelete="cancelDelete"/>
        </vue-final-modal>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { $vfm, VueFinalModal, ModalsContainer } from 'vue-final-modal'
import { PlusIcon } from '@heroicons/vue/solid'
import { XIcon } from '@heroicons/vue/solid'
import DeleteFriendModal from '../components/DeleteFriendModal.vue'

export default {
    inject: ['reload'],
    components: {
        VueFinalModal,
        ModalsContainer,
        PlusIcon,
        XIcon,
        DeleteFriendModal
    },
    data() {
        return {
            editor: ClassicEditor,
            editorData: '',
            editorConfig: {
                // The configuration of the editor.
            },
            showModal: false,
            showDeleteModal: false,
        }
    },
    methods: {
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
  width: 70vw;
  height: 70vh;
  margin: 1rem 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}

@media (min-width: 1024px) {
::v-deep .modal-content {
    width: 30vw;
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




</style>