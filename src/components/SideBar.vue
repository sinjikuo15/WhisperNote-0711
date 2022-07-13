<template>
<div class=" sm:w-4/12 lg:w-3/12 xl:w-2/12 sidebar h-screen py-8  bg-gray-800 text-gray-50 ">
      <div class="bg-gray-900  py-4">
        <div class="flex mr-3 ml-3 ">
        <figure class="logo-wrap w-2/12 ">
          <img class="logo" src="../assets/wslogo.jpeg" alt="">          
        </figure>
        <h1 class="w-9/12 text-2xl md:text-2xl font-black sidebar-title pl-1 pt-1 md:pt-2 xl:pt-1 logo-a">WhisperNote</h1>
      </div>
      </div>
      
      <ul class="pt-5 text-gray-900">
        <li class="">
          <router-link class="flex " to="/">
            <div class="w-2/12 ">
              <i class="fa-solid fa-house md:text-xl home"></i>              
            </div>     
            <p class="w-9/12 md:text-xl">首頁</p>        
          </router-link>          
        </li>
        <li class="">
          <router-link class="flex" to="/all-diary">
            <div class="w-2/12">
              <i class="fa-solid fa-calendar-days md:text-xl "></i>             
            </div>     
            <p class="w-9/12 md:text-xl">日記</p>        
          </router-link>          
        </li>
        <li class="">
          <a class="flex" href="">
            <div class="w-2/12">
              <i class="fa-solid fa-user md:text-xl"></i>             
            </div>     
            <p class="w-9/12 md:text-xl">角色</p>        
          </a>          
        </li>
        <li class="">
          <a class="flex" href="">
            <div class="w-2/12">
              <i class="fa-solid fa-users md:text-xl friends"></i>             
            </div>     
            <p class="w-9/12 md:text-xl ">朋友</p>        
          </a>          
        </li> 
        <li class="">
          <router-link class="flex" to="/profile">
            <div class="w-2/12">
              <i class="fa-solid fa-file md:text-xl"></i>             
            </div>     
            <p class="w-9/12 md:text-xl">會員資料</p>        
          </router-link>          
        </li> 
        <li class="">
          <router-link class="flex" to="/signup">
            <div class="w-2/12">
              <i class="fa-solid fa-clipboard-check md:text-xl"></i>             
            </div>     
            <p class="w-9/12 md:text-xl">註冊</p>        
          </router-link>          
        </li> 
        <li class="">
          <router-link class="flex" to="/login">
            <div class="w-2/12">
              <i class="fa-solid fa-arrow-right-to-bracket md:text-xl login"></i>             
            </div>     
            <p class="w-9/12 md:text-xl">登入</p>        
          </router-link>          
        </li>             
       
      </ul>      
    </div>
</template>

<style>
    .sidebar{
    height: 80vh;

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
    .sidebar {
        display: none;
    }
}
</style>