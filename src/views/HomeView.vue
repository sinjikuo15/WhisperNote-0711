<template>
  <!-- navbar -->
  <NavBar></NavBar>
  <div class="flex py-3 justify-center"> 
    <div class="flex w-full lg:w-11/12 justify-center">
    <!-- sidebar -->
    <SideBar></SideBar>
    <!-- 右邊日記的部分 -->    
    <div class="w-full sm:w-8/12 lg:w-7/12 border border-gray-200 relative right-content">
      <Calendar></Calendar>

      <!-- 新增日記按鈕 -->
      <div class="absolute bottom-5 right-5 inline-block w-10 h-10 bg-blue-600 rounded-full hover:bg-blue-700 hover:cursor-pointer" @click="showModal = true">
          <PlusIcon class="h-6 w-6 text-[#fff] mt-2 ml-2"/>
      </div>
    </div>
  </div>
</div>
  

<!-- modal -->
<AddNewDiaryModal v-model="showModal" @confirm="confirm" @cancel="cancel"/>

</template>

<script> 
import { PlusIcon } from '@heroicons/vue/solid'
import SideBar from '../components/SideBar.vue'
import NavBar from '../components/NavBar.vue'
import AddNewDiaryModal from '../components/AddNewDiaryModal.vue'
import Calendar from '@/components/Calendar.vue'


export default {
    name: 'app',
    components: {
    PlusIcon,
    SideBar,
    NavBar,
    AddNewDiaryModal,
    Calendar
},
    data() {
        return {
            showModal: false,
        };
    },
    methods: {
      confirm() {
        // some code...
        this.showModal = false
      },
      cancel(close) {
        // some code...
        close()
      }
    },
    mounted(){
      // if(this.$store.state.loginStatus === 0) {
      //   this.$router.push('/login')
      // }

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
.logo-wrap{
  width: 50px;
        
    }
.logo{
  width: 100%;
  }
/* svg位子微調 */
.home{
  position: relative;
  right:2px;
}
.friends{
  position: relative;
  right:4px;
}
.login{
  position: relative;
  right:4px;
}
/* 日記區 */
.right-content{
  height: 80vh;
  /* overflow-y: scroll; */
}
.user-wrap{
  width:50px;
  border-radius: 50px;
}
.user{
  width:100%; 

}
.vc-day {
  padding: 0 5px 3px 5px;
  border-right: 1px solid rgb(215, 215, 215);
  height: 80px;
  text-align: left; 
  background-color: white;
}
.vc-weekday{
  background-color: #eff8ff;
}


@media screen and (max-width:640px) {
    .sidebar,.search-bar{
        display: none;
    }
    
}

</style>