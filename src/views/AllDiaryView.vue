<template>
  <NavBar></NavBar>
  <div class="flex py-3 justify-center">
    <div class="flex w-full lg:w-11/12 justify-center">
      <SideBar></SideBar>
    <div class="w-full sm:w-8/12 lg:w-7/12 border border-gray-200">
      <div class="container">
          <h1 class="text-2xl ">我的日記</h1>
      </div>
      <div class="container flex justify-end gap-4 items-center my-5">
          <div class="h-10 w-10 hover:bg-slate-200 hover:rounded flex justify-center items-center">
              <AdjustmentsIcon class="h-8 w-5 text-slate-500"/>
          </div>
          <button @click="showModal = true" class="inline-flex justify-center px-4 py-2 btn-primary sm:w-auto sm:text-sm">新增日記</button>
      </div>

        <!-- addNewDiaryModal -->
        <AddNewDiaryModal v-model="showModal" @confirm="confirm" @cancel="cancel"/>
    
        <!-- diary section -->
        <div class="container">
            <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                <template v-for="diary in diaries" :key="diary.diary_id">
                    <div class="border border-slate-100 rounded shadow-md p-3 hover:cursor-pointer" @click="showDiary(diary)">
                        <h3 class="text-xl font-bold">{{ diary.title }}</h3>
                        <p class="text-sm text-slate-400 mt-2">{{ diary.date }}</p>
                        <p v-html="diary.content" class="mt-2"></p>
                        <div class="mt-3">
                            <span class="bg-blue-400 py-1 px-2 rounded-xl text-white text-sm">{{ diary.permission }}</span>
                        </div>
                    </div>  
                </template>
            </div>
        </div>
     </div>
  </div>
    
    <!-- 單篇日記modal -->
    <ShowDiaryModal v-model="showDiaryModal" @confirmShow="confirmShow" @cancelShow="cancelShow">
        <template v-slot:title>{{ singleDiaryTitle }}</template>
        <template v-slot:date>{{ singleDiaryDate }}</template>
        <template v-slot:content>
            <p v-html="singleDiaryContent"></p>
        </template>
        <template v-slot:permission>{{ singleDiaryPermission }}</template>
    </ShowDiaryModal>
    </div>
        


</template>

<script>
import SideBar from '../components/SideBar.vue'
import AddNewDiaryModal from '../components/AddNewDiaryModal.vue'
import ShowDiaryModal from '../components/ShowDiaryModal.vue'
import { AdjustmentsIcon } from '@heroicons/vue/outline'
import NavBar from '../components/NavBar.vue'


export default {
    components: {
        SideBar,
        AddNewDiaryModal,
        ShowDiaryModal,
        AdjustmentsIcon,
        NavBar
    },
    data() {
        return {
            diaries: [],
            showModal: false,
            showDiaryModal: false,
            title: '',
            permission: '', //要再抓出該使用者的permission，迴圈顯示option
            date: '',
            singleDiaryTitle: '',
            singleDiaryDate: '',
            singleDiaryContent: '',
            singleDiaryPermission: '',
        }
    },
    methods: {
      addNewDiary(){
        const diaryDetail = {
          title: this.title,
          permission: this.permission,
        //   content: this.editorData,
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
      },
      showDiary(diary){
        this.showDiaryModal = true
        console.log(diary)
        this.singleDiaryTitle = diary.title
        this.singleDiaryDate = diary.date
        this.singleDiaryContent = diary.content
        this.singleDiaryPermission = diary.permission
      },
      confirm() {
        // some code...
        this.showModal = false
      },
      cancel(close) {
        // some code...
        close()
      },
      confirmShow() {
        this.showDiaryModal = false
      },
      cancelShow(close) {
        // some code...
        close()
      },
    },
    mounted() {
        this.axios.get('/getDiary')
        .then((response) => {
            console.log(response)
            this.diaries = response.data.data
          })
          .catch((err)=>{
            console.log(err);
          })
    }


}

</script>

<style scoped>
</style>
