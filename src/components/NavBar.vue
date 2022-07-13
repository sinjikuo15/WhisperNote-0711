<template>
    <div class="flex justify-center pt-3 pl-1 pr-1 ">
    <form class="flex items-center justify-between w-full sm:w-11/12 lg:w-8/12"> 
      <div class="pr-5">
        <a class="flex items-center" href="/">
        <figure class="logo-wrap ">
          <img class="logo" src="../assets/wslogo.jpeg" alt="">          
        </figure>
        <h1 class="text-base lg:text-xl font-black sidebar-title">WhisperNote</h1>
        </a>
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
          <div class="flex  w-3/12 justify-center" >
            <a class="flex items-center  text-blue-600 hover:text-blue-700" href="/signup">
              <i class="fa-solid fa-clipboard-check block text-xl pr-1"></i>
              <p class="w-9/12 md:text-base">註冊</p>        
            </a>     
          </div> 
          <div class="flex w-3/12 justify-center" >
            <a class="flex items-center  text-blue-600 hover:text-blue-700" href="/login">
              <i class="fa-solid fa-arrow-right-to-bracket block text-sm login"></i>  
              <p class="w-9/12 md:text-base">登入</p>      
            </a>     
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
      </div>    
    </form>
  </div>

</template>

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