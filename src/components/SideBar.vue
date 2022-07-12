<template>
  <div class=" sm:w-3/12 lg:w-2/12 sidebar py-5 bg-gray-800 text-gray-50">           
    <ul class="pt-5 text-gray-900">
      <li class="">
        <a class="flex " href="/">
          <div class="w-2/12 ">
            <i class="fa-solid fa-house md:text-base home"></i>              
          </div>     
          <p class="w-9/12 md:text-base">首頁</p>        
        </a>          
      </li>
      <li class="">
        <a class="flex" href="">
          <div class="w-2/12">
            <i class="fa-solid fa-calendar-days md:text-base "></i>             
          </div>     
          <p class="w-9/12 md:text-text-base">日記</p>        
        </a>          
      </li>
        <li class="">
          <a class="flex" href="">
            <div class="w-2/12">
              <i class="fa-solid fa-user md:text-base"></i>             
            </div>     
            <p class="w-9/12 md:text-base">角色</p>        
          </a>          
        </li>
      <li class="">
        <a class="flex" href="">
          <div class="w-2/12">
            <i class="fa-solid fa-users md:text-base friends"></i>             
          </div>     
          <p class="w-9/12 md:text-base ">朋友</p>        
        </a>          
      </li> 
      <li class="">
        <a class="flex" href="/profile">
          <div class="w-2/12">
            <i class="fa-solid fa-file md:text-base"></i>             
          </div>     
          <p class="w-9/12 md:text-base">會員資料</p>        
        </a>          
      </li> 
      <!-- <li class="">
        <a class="flex" href="/signup">
          <div class="w-2/12">
            <i class="fa-solid fa-clipboard-check md:text-base"></i>             
          </div>     
          <p class="w-9/12 md:text-base">註冊</p>        
        </a>          
      </li> 
      <li class="">
        <a class="flex" href="/login">
          <div class="w-2/12">
            <i class="fa-solid fa-arrow-right-to-bracket md:text-base login"></i>             
          </div>     
          <p class="w-9/12 md:text-base">登入</p>        
        </a>          
      </li>            -->
    </ul>      
  </div>
</template>

<style >
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
    .sidebar,
    .search-bar
         {
        display: none;
    }    
}
</style>