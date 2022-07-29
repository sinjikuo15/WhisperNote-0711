<template>
    <vue-final-modal v-slot="{ close }" v-bind="$attrs" classes="modal-container" content-class="modal-content">
        <button class="modal__close" @click="close">
            <XIcon class="h-8 w-5"/>
        </button>
        <span class="modal__title text-center text-xl leading-6 font-bold text-gray-900">我的日記</span>
        <div class="modal__content px-3 mt-3">

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
              <span class="bg-blue-400 py-1 px-2 rounded-xl text-white text-sm">
                <slot name="permissionName"></slot>
              </span>
            </div>
            <div class="" id="content">
              <slot name="content"></slot>
            </div>
          </div>

        </div>
        <!-- <div class="flex justify-end mt-3">
          <div class="modal__action"> -->
            <!-- show -->
            <!-- <div id="showModeBtn">
              <button type="button" class="mt-3 w-full justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="$emit('cancelShow', close)">取消</button>
            </div>
          </div>
        </div> -->
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
            title: '',
            permission: '',
            date: '',
            diaryId: '',
        }
    },
    methods: {
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