<template>
    <!-- navbar -->
    <NavBar></NavBar>
    <div class="flex  justify-center main-bg"> 
        <div class="flex w-full sm:py-3 justify-start">
            <!-- Sidebar -->
            <SideBar></SideBar>
            <!-- 右邊區 -->
            <div class="w-full h-[80vh] sm:w-8/12  border-gray-400 sm:rounded-lg p-10 bg-white">
                <div class="container flex justify-between">
                  
                    <h1 class="text-2xl font-semibold text-[#4E393A]">我的資料</h1>
                    <button @click="showModal = true" class="inline-flex justify-center px-4 py-2 mr-3 btn-primary sm:w-auto sm:text-sm">編輯個人資料</button>
                </div>
                <div class="container flex justify-center items-center pt-3">
                    <div class="border rounded-md border-black w-1/2 lg:w-1/3 xl:w-1/4 h-[25vh]">123</div>
                </div>
                <div class=""></div>
                    <h4 class="justify-center flex font-bold pt-3">displayName</h4>
                    <div class="text-center pt-3">
                      <h3 class="text-xl font-black text-[#DB663D] ">email</h3>
                      <h4 class="">user@mail.com</h4> 

                    </div>


                <!-- add friend modal -->
                <AddCharacterModal v-model="showModal" @confirm="confirm" @cancel="cancel"/>

                <!-- friend cards section -->
                <div class="container h-[80%] overflow-y-auto pr-3">
                    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"> 

                        <template v-for="character in characters" :key="character.character_id">
                            <div class="bg-white rounded-lg border border-gray-200 shadow overflow-hidden hover:cursor-pointer" @click="showCharacter(character)">
                                <img :src="character.character_pic" class="rounded-t-lg" alt="">
                                <div class="py-4">
                                    <h5 class="text-xl font-bold tracking-tight text-gray-900 text-center">{{ character.character_name }}</h5>                                              
                                </div>
                            </div>
                        </template>

                        <ShowCharacterModal v-model="showCharacterModal" @confirmShow="confirmShow" @cancelShow="cancelShow">
                            <template v-slot:characterId>{{ singleCharacterId }}</template>
                            <template v-slot:characterName>{{ singleCharacterName }}</template>
                            <template v-slot:characterInfo>{{ singleCharacterInfo }}</template>
                            <template v-slot:characterPic>
                                <img :src="singleCharacterPic">
                            </template>
                        </ShowCharacterModal>

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