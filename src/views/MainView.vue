<template>
<div class="flex justify-center items-center content">
    <div class="flex w-full lg:w-11/12 justify-center">
        <!-- sidebar -->
        <!-- <SideBar></SideBar> -->
        <div class="w-10/12 sm:w-7/12 md:w-6/12 lg:w-4/12  border-2 border-blue-200 rounded-md p-8">
            <div class="flex items-center ">
                <figure class="logo-wrap ">
                    <img class="logo" src="../assets/wslogo.jpeg" alt="">
                </figure>
                <h1 class="text-lg lg:text-xl font-black sidebar-title">WhisperNote</h1>
                
            </div>
            <h3 class="text-lg font-bold text-blue-500 pt-1">沒有使用者帳號嗎?</h3>
            <div class="pt-5">                
                <div class="pb-4 ">
                    <div class="flex justify-center bg-slate-100 rounded text-center py-3 items-center">
                        <figure class="svg-wrap">
                            <img class="logo" src="https://img.icons8.com/color/48/000000/google-logo.png"/>
                        </figure>
                        <h4 class="font-bold">使用Google繼續</h4>
                    </div> 
                </div>
                <div class="pb-5">
                    <div class="flex justify-center bg-slate-100 rounded text-center py-3 items-center">
                        <figure class="svg-wrap">
                            <img src="https://img.icons8.com/color/48/000000/facebook-new.png"/>
                        </figure>
                        <h4 class="font-bold">使用Facebook繼續</h4>                  
                    </div>   
                </div>
                <h5 class="text-slate-400 text-xs text-center">繼續代表您同意WhisperNote「服務條款」 與「隱私權政策」</h5>                 
                 


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