<template>
    <!-- navbar -->
    <NavBar></NavBar>

    <div class="flex justify-center main-content h-[90vh]"> 
        <div class="flex w-full justify-start">
            <!-- Sidebar -->
            <SideBar></SideBar>
            <!-- 右邊區 -->
            <div class="w-full sm:my-8 sm:w-8/12 border-gray-400 sm:rounded-lg py-5 pl-5 pr-2 sm:p-10 bg-white">

    <div class="flex  justify-center main-bg"> 
        <div class="flex w-full justify-start sm:pt-3">
            <!-- Sidebar -->
            <SideBar></SideBar>
            <!-- 右邊區 -->
            <div class="w-full h-[80vh] sm:w-8/12  sm:rounded-lg p-10 bg-white">

                <div class="container">
                    <h1 class="text-2xl font-semibold">我的好友</h1>
                </div>
                <div class="container flex justify-end gap-3 items-center my-5">
                    <button @click="showModal = true" class="inline-flex justify-center px-4 py-2 mr-3 btn-primary sm:w-auto sm:text-sm">新增好友</button>
                </div>

                <!-- add friend modal -->
                <AddFriendModal v-model="showModal" @confirm="confirm" @cancel="cancel"/>

                <!-- friend cards section -->
                <div class="container h-[80%] overflow-y-auto pr-3">
                    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"> 
                        <template v-for="friend in friends" :key="friend.friend_id">
                            <div class="bg-white rounded-lg border border-gray-200 shadow overflow-hidden hover:cursor-pointer" @click="showFriend(friend)">
                                <img :src="friend.friend_pic" class="rounded-t-lg" alt="">
                                <div class="py-4">
                                    <h5 class="text-xl font-bold tracking-tight text-gray-900 text-center">{{ friend.friend_displayname }}</h5>                                              
                                </div>
                            </div>
                        </template>
                    </div>
                </div>

                <ShowFriendModal v-model="showFriendModal" @confirmShow="confirmShow" @cancelShow="cancelShow">
                    <template v-slot:friendId>{{ singleFriendId }}</template>
                    <template v-slot:friendName>{{ singleFriendName }}</template>
                    <template v-slot:friendEmail>{{ singleFriendEmail }}</template>
                    <template v-slot:friendPic>
                        <img :src="singleFriendPic">
                    </template>
                </ShowFriendModal>

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
import AddFriendModal from '../components/AddFriendModal.vue'
import ShowFriendModal from '../components/ShowFriendModal.vue'

export default {
    components: {
        SideBar,
        NavBar,
        AddFriendModal,
        ShowFriendModal
    },
    data() {
        return {
            showModal: false,
            friends: [],
            showFriendModal: false,
            singleFriendId: '',
            singleFriendName: '',
            singleFriendEmail: '',
            singleFriendPic: ''
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
        showFriend(friend){
            this.showFriendModal = true
            this.singleFriendId = friend.friend_id
            this.singleFriendName = friend.friend_displayname
            this.singleFriendEmail = friend.friend_email
            this.singleFriendPic = friend.friend_pic
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
        this.axios.get('/getFriend')
        .then((response) => {
            console.log(response.data)
            this.friends = response.data.data
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