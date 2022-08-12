<template>
<div class="flex justify-center items-center content main-bg">
    <div class="flex w-full lg:w-11/12 justify-center">
        <!-- sidebar -->
        <!-- <SideBar></SideBar> -->
        <div class="w-10/12 sm:w-7/12 md:w-6/12 lg:w-4/12  border border-gray-200 rounded-md p-8">
            <div class="flex items-center justify-center">
                <figure class="logo-wrap ">
                    <img class="logo" src="../assets/navbar_logo.png" alt="">
                </figure>
                <h1 class="text-lg lg:text-xl font-black text-white sidebar-title">WhisperNote</h1>
                
            </div>
            <!-- <h3 class="text-lg font-bold text-orange-400 pt-1 text-center">沒有使用者帳號嗎?</h3> -->
            <div class="pt-5">                
                <div class="pb-4 ">
                    <router-link to="/login" class="flex justify-center bg-[#b2af73] hover:bg-[#8b8957] rounded text-center py-3 items-center">
                        <h5 class="font-bold text-xl text-white">
                            登入
                        </h5>                        
                    </router-link> 
                </div>
                <div class="pb-5">
                    <router-link to="/signup" class="flex justify-center bg-[#b2af73] hover:bg-[#8b8957] rounded text-center py-3 items-center">
                        <h5 class="font-bold text-xl text-white">
                            註冊
                        </h5>
                    </router-link>   
                </div>
                <h5 class="text-gray-200 text-xs text-center">繼續代表您同意WhisperNote「服務條款」 與「隱私權政策」</h5>                 
                 


            </div>
        </div>        
    </div>
</div>


</template>

<script>
import SideBar from '../components/SideBar.vue'
import NavBar from '../components/NavBar.vue'
import AddFriendModal from '../components/AddFriendModal.vue'

export default {
    components: {
        SideBar,
        NavBar,
        AddFriendModal
    },
    
 }

</script >


<style>
.content{
    width: 100vw;
    height: 100vh;    
}
.logo-wrap{
  width: 50px;
        
    }
.logo{
  width: 100%;
  }
.svg-wrap{
    width: 25px;
}

@media screen and (max-width:640px) {
    .sidebar,.search-bar{
        display: none;
    }
    
}
</style>