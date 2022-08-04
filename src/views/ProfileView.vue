<template>
  <NavBar></NavBar>
  <div class="flex justify-center py-3">
    <div class="flex w-full lg:w-11/12 justify-center">
      <SideBar></SideBar>
      <!-- 右邊區 -->
    <div class="flex w-full sm:w-8/12  sm:border lg:w-7/12  border-gray-200 justify-center py-5 right-content"> 
      <div class="flex w-11/12 border sm:border-none rounded-md justify-center ">
        <div class="w-11/12 pt-3">
          <h1 class="block text- font-black text-gray-700">Website</h1>
          <div class="mt-1 flex rounded-md shadow-sm w-full md:w-9/12">
            <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm tracking-wider">
            http://
            </span>
            <input type="text" class="input-focus w-full  block rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="www.example.com">
          </div>
        
          <div class="pt-5">
            <label for="about" class="block text- font-black text-gray-700"> About </label>
              <div class="mt-1">
                <textarea id="about" name="about" rows="3" class="shadow-sm input-focus mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="you@example.com"></textarea>
              </div>
              <p class="mt-2 text-sm text-gray-500">個人資料的簡要說明， 網址是超連結。</p>
          </div>  
          
          <div class="py-5">
            <label class="block text- font-black text-gray-700"> Photo </label>
              <div class="mt-1 flex items-center">
                <span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                  <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                  <button type="button" class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 text-gray-700 font-black hover:bg-gray-50 ">Change</button>
              </div>
            </div>
            <div class="pb-5">
              <label class="block text- font-black text-gray-700"> Cover photo </label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-700 ">
                      <span class="font-black">Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" class="sr-only">
                    </label>
                    <p class="pl-1 font-medium">or drag and drop</p>
                  </div>
                  <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
            <div class=" py-2 text-right ">
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white btn-primary">Save</button>
            </div>            
          </div>
      </div>  
    </div>
    </div>
        
  </div>
   
 

</template>

<script >
import SideBar from '../components/SideBar.vue'
import NavBar from '../components/NavBar.vue'


export default{
  components: {
      SideBar,
      NavBar
  },
  // mounted() {
  //   if(this.$store.state.loginStatus === 0) {
  //     this.$router.push('/login')
  //   }
  // }
}

</script >
<style scoped>
.right-content{
  height: 80vh;
  overflow-y: scroll;
}

@media screen and (max-width:640px) {
    .sidebar,
    .search-bar
         {
        display: none;
    } 
    
}
</style>