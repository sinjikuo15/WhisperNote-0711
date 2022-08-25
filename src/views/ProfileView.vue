<template>
    <!-- navbar -->
    <NavBar></NavBar>

    <div class="flex  justify-center main-bg h-[90vh]"> 
        <div class="flex w-full justify-start sm:pt-3">
            <!-- Sidebar -->
            <SideBar></SideBar>
            <!-- 右邊區 -->
            <div class="w-full sm:my-8 sm:w-8/12 sm:rounded-lg py-5 pl-5 pr-2 sm:p-10 bg-white">

                <div class="container">
                    <h1 class="text-2xl font-semibold">個人資料</h1>
                </div>
                <div class="container flex justify-end gap-3 items-center my-5">
                    <button @click="ProfileModal = true" class="inline-flex justify-center px-4 py-2 mr-3 btn-primary sm:w-auto sm:text-sm">編輯</button>
                </div>

                <div class="container flex justify-center items-center pt-3">
                  <div class="w-36 h-36 rounded-full overflow-hidden">
                    <img :src="user_pic" alt="user pic">
                  </div>
                </div>
                <h2 class="text-xl text-center font-bold pt-3">{{displayname}}</h2>
                <div class="text-center pt-3">
                  <h4 class="font-black text-[#DB663D] ">email</h4>
                  <h4>{{email}}</h4> 
                </div>

                <ProfileModal v-model="ProfileModal" @confirmShow="confirmShow" @cancelShow="cancelShow" :displayname="displayname" :userPic="user_pic">
                </ProfileModal>

            </div>
        </div>
    </div>
   

</template>

<script>
import SideBar from '../components/SideBar.vue'
import NavBar from '../components/NavBar.vue'
import AddFriendModal from '../components/AddFriendModal.vue'
import ProfileModal from '../components/ProfileModal.vue'

export default {
    components: {
        SideBar,
        NavBar,
        AddFriendModal,
        ProfileModal
    },
    data() {
        return {
            showModal: false,
            ProfileModal: false,
            displayname: '',
            email: '',
            user_pic: '',
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
        this.axios.get('/getUser')
        .then((res) => {
          console.log(res.data.data)
          this.displayname = res.data.data[0].displayname
          this.email = res.data.data[0].email
          this.user_pic = res.data.data[0].user_pic
          // console.log(this.displayname)
        })
        .catch((err) => {
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