<template>
    <div class="flex justify-center pt-3 pl-1 pr-1 ">
    <form class="flex items-center justify-between w-full sm:w-11/12 lg:w-8/12"> 
      <div class="pr-5">
        <router-link to="/" class="flex items-center" href="/">
          <figure class="logo-wrap ">
            <img class="logo" src="../assets/wslogo.jpeg" alt="">          
          </figure>
          <h1 class="text-base lg:text-xl font-black sidebar-title">WhisperNote</h1>
        </router-link>
      </div>  
        <label for="simple-search" class="sr-only">Search</label>
        <div class="flex relative w-4/12 search-bar ">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none ">
            <svg class="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
          </div>  
          <input type="text" id="simple-search" class=" border-gray-300  text-sm input-focus rounded-md block w-full pl-10 p-2.5  " placeholder="Search" >
        </div>
        
        <!-- 使用者登出登入註冊 -->
        <div class="flex w-8/12 sm:w-6/12 lg:w-4/12 justify-end">
          <div class="sm:hidden">
              <button class="navbar-burger flex items-center rounded border-2 border-blue-300 text-blue-600 hover:border-blue-600 p-2" type="button">
                <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
        </div>
          <div class="flex  w-3/12 justify-center" >
            <router-link to="/signup" class="flex items-center  text-blue-600 hover:text-blue-700" href="/signup">
              <i class="fa-solid fa-clipboard-check block text-xl pr-1"></i>
              <p class="w-9/12 md:text-base">註冊</p>        
            </router-link>     
          </div>
           
          <div class="flex w-3/12 justify-center" >
            <router-link to="/login" class="flex items-center  text-blue-600 hover:text-blue-700" href="/login">
              <i class="fa-solid fa-arrow-right-to-bracket block text-sm login pr-1"></i>  
              <p class="w-9/12 md:text-base">登入</p>      
            </router-link>     
          </div>
          
          <!-- 登入時顯示 -->
          <!-- <a class="flex  w-3/12 justify-center" href="/signup">
            <div class="flex items-center  text-blue-600 hover:text-blue-700">
              <i class="fa-regular fa-bell text-xl p-3  text-gray-500 hover:text-red-400"></i>      
            </div>     
          </a> 
          <a class="flex w-3/12 justify-center" href="/login">
            <div class="flex items-center  text-blue-600 hover:text-blue-700">
             <figure class="user-wrap w-3/12 justify-center">
              <img class="user" src="https://i.pinimg.com/736x/fa/1f/25/fa1f2501f67e22f7c44478af0f7ae8aa.jpg" alt="">
            </figure>       
            </div>     
          </a>          -->

          <!-- 漢堡內容 -->
          <div class="navbar-menu relative z-50 hidden">
            <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
            <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-4/6  py-5 px-5 bg-white border-r overflow-y-auto">
              <div class="flex items-center mb-5 justify-between">
                <a class="flex items-center" href="/">
                  <figure class="logo-wrap ">
                    <img class="logo" src="../assets/wslogo.jpeg" alt="">          
                  </figure>
                  <h1 class="text-  font-black sidebar-title">WhisperNote</h1>
                </a>
                <!-- <button class="navbar-close">
                  <svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button> -->
              </div>
              <div>
                <ul>
                  <li class="mb-1">
                    <router-link to="/" class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" >首頁</router-link>
                  </li>
                  <li class="mb-1">
                    <router-link to="/all-diary" class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" >日記</router-link>
                  </li>
                  <li class="mb-1">
                    <router-link to="/" class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" >角色</router-link>
                  </li>
                  <li class="mb-1">
                    <router-link to="/friend" class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" >朋友</router-link>
                  </li>
                  <li class="mb-1">
                    <router-link to="/profile" class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" >會員資料</router-link>
                  </li>
                </ul>
              </div>
              <div class="mt-auto">
                <div class="pt-6">
                  <router-link to="/signup" class="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl" >註冊</router-link>
                  <router-link to="/login" class="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl" >登入</router-link>
                </div>
                <p class="my-4 text-xs text-center text-gray-500">
                  <span>Copyright © 2022</span>
                </p>
              </div>
            </nav>
          </div>
      </div>    
    </form>
  </div>

</template>

<script>
// Burger menus
document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (let i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function(e) {
              e.stopPropagation()
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function(e) {
              e.stopPropagation()
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});
</script>


<style scoped>
.logo-wrap{
    width: 50px;
            
        }
    .logo{
    width: 100%;
    }
.user-wrap{
  width:50px;
  border-radius: 50px;
}
.user{
  width:100%; 

}
@media screen and (max-width:640px) {
    .sidebar,
    .search-bar
         {
        display: none;
    }    
}

</style>