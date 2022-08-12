<template>
  <NavBar></NavBar>
  <div class="flex justify-start main-bg">
    <div class="flex w-full justify-start sm:pt-3">
      <SideBar></SideBar>
      <div class="w-full h-[80vh] sm:w-8/12 sm:rounded-lg p-10 bg-white">
        <div class="container">
            <h1 class="text-2xl font-semibold">我的日記</h1>
        </div>
        <div class="container flex justify-end gap-3 items-center my-5">
            <!-- <div class="h-10 w-10 hover:bg-slate-200 hover:rounded flex justify-center items-center">
                <AdjustmentsIcon class="h-8 w-5 text-slate-500"/>
            </div> -->
            <button @click="showModal = true" class="inline-flex justify-center px-4 py-2 mr-3 btn-primary sm:w-auto sm:text-sm">新增日記</button>
        </div>

        <!-- addNewDiaryModal -->
        <AddNewDiaryModal v-model="showModal" @confirm="confirm" @cancel="cancel"/>
    
        <!-- diary section -->
        <div class="container h-[80%] overflow-y-auto pr-3">
            <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <template v-for="diary in diaries" :key="diary.diary_id">
                    <div class="border border-slate-100 rounded shadow-md p-3 hover:cursor-pointer overflow-hidden" @click="showDiary(diary)">
                        <h3 class="text-xl font-bold truncate">{{ diary.title }}</h3>
                        <p style="display:none;">{{diary.diary_id}}</p>
                        <p class="text-sm text-slate-400 mt-2">{{ diary.date.slice(0,10) }}</p>
                        <p v-html="diary.content" class="mt-2 truncate"></p>
                        <div class="mt-3">
                            <span style="display:none;">{{ diary.permission_id }}</span>
                            <span class="bg-blue-400 py-1 px-2 rounded-xl text-white text-sm">{{ diary.per_name }}</span>
                        </div>
                    </div> 
                </template>
            </div>
        </div>

        <!-- 單篇日記modal -->
        <ShowDiaryModal v-model="showDiaryModal" @confirmShow="confirmShow" @cancelShow="cancelShow">
            <template v-slot:title>{{ singleDiaryTitle }}</template>
            <template v-slot:date>{{ singleDiaryDate.slice(0,10) }}</template>
            <template v-slot:content>
                <div v-html="singleDiaryContent"></div>
            </template>
            <template v-slot:permissionId>{{ singleDiaryPermissionId }}</template>
            <template v-slot:permissionName>{{ singleDiaryPermissionName }}</template>
            <template v-slot:diaryId>{{ singleDiaryId }}</template>
        </ShowDiaryModal> 

      </div>
    </div>
    
    
  </div>
        


</template>

<script>
import SideBar from '../components/SideBar.vue'
import AddNewDiaryModal from '../components/AddNewDiaryModal.vue'
import ShowDiaryModal from '../components/ShowDiaryModal.vue'
import { AdjustmentsIcon } from '@heroicons/vue/outline'
import NavBar from '../components/NavBar.vue'


export default {
    inject: ['reload'],
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
            singleDiaryPermissionId: '',
            singleDiaryPermissionName: '',
            singleDiaryId: ''
        }
    },
    methods: {
      addNewDiary(){
        const diaryDetail = {
          title: this.title,
          permission: this.permission,
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
        this.reload()
      },
      showDiary(diary){
        this.showDiaryModal = true
        // console.log(diary)
        this.singleDiaryTitle = diary.title
        this.singleDiaryDate = diary.date
        this.singleDiaryContent = diary.content
        this.singleDiaryPermissionId = diary.permission_id
        this.singleDiaryPermissionName = diary.per_name
        this.singleDiaryId = diary.diary_id
        // console.log(this.singleDiaryId)
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

      // if(this.$store.state.loginStatus === 0) {
      //   this.$router.push('/login')
      // }
      this.axios.get('/getDiary')
      .then((response) => {
          console.log(response.data.data)
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
