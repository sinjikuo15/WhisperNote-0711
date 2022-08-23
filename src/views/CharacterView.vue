<template>
    <!-- navbar -->
    <NavBar></NavBar>

    <div class="flex  justify-center main-content h-[90vh]"> 
        <div class="flex w-full justify-start">

    <div class="flex  justify-center main-bg"> 
        <div class="flex w-full sm:py-3 justify-start">

            <!-- Sidebar -->
            <SideBar></SideBar>
            <!-- 右邊區 -->
            <div class="w-full sm:my-8 sm:w-8/12  border-gray-400 sm:rounded-lg py-5 pl-5 pr-2 sm:p-10 bg-white">
                <div class="container">
                    <h1 class="text-2xl font-semibold">角色</h1>
                </div>
                <div class="container flex justify-end gap-3 items-center my-5">
                    <button @click="showModal = true" class="inline-flex justify-center px-4 py-2 mr-3 btn-primary sm:w-auto sm:text-sm">新增角色</button>
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
  </div>
  </div>


</template>

<script>
import SideBar from '../components/SideBar.vue'
import NavBar from '../components/NavBar.vue'
import AddCharacterModal from '../components/AddCharacterModal.vue'
import ShowCharacterModal from '../components/ShowCharacterModal.vue'

export default {
    components: {
        SideBar,
        NavBar,
        AddCharacterModal,
        ShowCharacterModal
    },
    data() {
        return {
            showModal: false,
            characters: [],
            showCharacterModal: false,
            singleCharacterId: '',
            singleCharacterName: '',
            singleCharacterInfo: '',
            singleCharacterPic: ''
        }
    },
    methods: {
        confirm() {
        // some code...
        this.showModal = false
        },
        cancel(close) {
            // some code...
            close()
        },
        showCharacter(character){
            this.showCharacterModal = true
            this.singleCharacterId = character.character_id
            this.singleCharacterName = character.character_name
            this.singleCharacterInfo = character.character_info
            this.singleCharacterPic = character.character_pic
        },
        confirmShow() {
        this.showFriendModal = false
        },
        cancelShow(close) {
            // some code...
            close()
        },
    },
    mounted() {
        // if(this.$store.state.loginStatus === 0) {
        //     this.$router.push('/login')
        // }
        this.axios.get('/getCharacter')
        .then((response) => {
            console.log('getCharacter', response.data)
            this.characters = response.data.data
          })
          .catch((err)=>{
            console.log(err);
          })
    }
 }

</script >

<style scoped>

.right-content{
  height: 80vh;
  overflow-y: scroll;
}
.card-wrap{
    display: flex;
    flex-wrap: wrap;
}

.user-wrap{
    width:150px
}
.user{
    width: 100%;
}
</style>