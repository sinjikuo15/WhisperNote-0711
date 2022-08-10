<template>
  <div class="sm:w-1/4 lg:w-1/4 sidebar py-5 bg-gray-800 text-gray-50">           
    <ul class="pt-5 text-gray-900">
      <li class="">
        <router-link to="/" class="flex" >
          <div class="w-2/12 ">
            <i class="fa-solid fa-house md:text-base home"></i>              
          </div>     
          <p class="w-9/12 md:text-base">首頁</p>        
        </router-link>          
      </li>
      <li class="">
        <router-link to="/all-diary" class="flex" >
          <div class="w-2/12">
            <i class="fa-solid fa-calendar-days md:text-base "></i>             
          </div>     
          <p class="w-9/12 md:text-text-base">日記</p>        
        </router-link>          
      </li>
        <li class="">
          <router-link to="/character" class="flex" >
            <div class="w-2/12">
              <i class="fa-solid fa-user md:text-base"></i>             
            </div>     
            <p class="w-9/12 md:text-base">角色</p>        
          </router-link>          
        </li>
      <li class="">
        <router-link to="/friend" class="flex" >
          <div class="w-2/12">
            <i class="fa-solid fa-users md:text-base friends"></i>             
          </div>     
          <p class="w-9/12 md:text-base ">朋友</p>        
        </router-link>          
      </li> 
    </ul>      
  </div>

  <!-- <div class="w-full lg:w-1/5 lg:px-6 text-xl text-gray-800 leading-normal">
            <p class="text-base font-bold py-2 lg:pb-6 text-gray-700">Menu</p>
            <div class="block lg:hidden sticky inset-0">
               <button id="menu-toggle" class="flex w-full justify-end px-3 py-3 bg-white lg:bg-transparent border rounded border-gray-600 hover:border-purple-500 appearance-none focus:outline-none">
                  <svg class="fill-current h-3 float-right" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                     <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
               </button>
            </div>
            <div class="w-full sticky inset-0 hidden h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent z-20" style="top:5em;" id="menu-content">
               <ul class="list-reset">
                  <li class="py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent">
                     <router-link to="/" class="block pl-4 align-middle text-gray-700 no-underline hover:text-purple-500 border-l-4 border-transparent lg:border-purple-500 lg:hover:border-purple-500">
                     <span class="pb-1 md:pb-0 text-sm text-gray-900 font-bold">Home</span>
                     </router-link>
                  </li>
                  <li class="py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent">
                     <router-link to="/all-diary" class="block pl-4 align-middle text-gray-700 no-underline hover:text-purple-500 border-l-4 border-transparent lg:hover:border-gray-400">
                     <span class="pb-1 md:pb-0 text-sm">My Diary</span>
                     </router-link>
                  </li>
                  <li class="py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent">
                     <router-link to="/character" class="block pl-4 align-middle text-gray-700 no-underline hover:text-purple-500 border-l-4 border-transparent lg:hover:border-gray-400">
                     <span class="pb-1 md:pb-0 text-sm">Characters</span>
                     </router-link>
                  </li>
                  <li class="py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent">
                     <router-link to="/friend" class="block pl-4 align-middle text-gray-700 no-underline hover:text-purple-500 border-l-4 border-transparent lg:hover:border-gray-400">
                     <span class="pb-1 md:pb-0 text-sm">Friends</span>
                     </router-link>
                  </li>
                  <li class="py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent">
                     <router-link to="/profile" class="block pl-4 align-middle text-gray-700 no-underline hover:text-purple-500 border-l-4 border-transparent lg:hover:border-gray-400">
                     <span class="pb-1 md:pb-0 text-sm">Profile</span>
                     </router-link>
                  </li>
               </ul>
            </div>
         </div> -->
</template>

<style scoped>
    .sidebar{
    height: 100vh;

    }
    .sidebar-title{
    font-family: 'Prompt', sans-serif;
    }
    .sidebar ul li a{
    font-weight: 600;
    padding: 10px 15px 10px 15px;
    font-size: 1rem;
    color:rgb(250, 250, 250);
    margin-left: 12px;
    margin-right: 12px;
    border-radius: 10px;
    }
    .sidebar ul li a:hover{
    color: white;
    background-color: rgb(17, 24, 39);
    
    }
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
    @media screen and (max-width:640px) {

    .sidebar,
    .search-bar
         {
        display: none;
    }    
} 
</style>