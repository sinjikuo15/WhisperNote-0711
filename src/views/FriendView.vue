<template>
    <!-- navbar -->
    <NavBar></NavBar>
    <div class="flex py-3 justify-center"> 
        <div class="flex w-full lg:w-11/12 justify-center">
            <!-- Sidebar -->
            <SideBar></SideBar>
            <!-- 右邊區 -->
            <div class="justify-start  w-full sm:w-8/12 lg:w-7/12 border border-gray-200 card-wrap py-4 content-start  px-2 right-content">  
                <!-- 1 -->
                <div class="w-1/3 p-2">
                    <div class="bg-white rounded-lg border border-gray-200 shadow ">
                        <a href="#">
                            <img class="rounded-t-lg" src="http://p1-tt-ipv6.byteimg.com/large/pgc-image/840ad761ff89482b92d04ed111bdff3a?from=detail&index=2" alt="" />
                        </a>
                        <div class="py-4">
                            <a href="#">
                                <h5 class="text-xl font-bold tracking-tight text-gray-900 text-center">使用者名稱</h5>
                            </a>                                              
                        </div>
                    </div>
                </div>
                <!-- 2 -->

                <div class="w-1/3 p-2">
                    <div class="bg-white rounded-lg border border-gray-200 shadow">
                        <a href="#">
                            <img class="rounded-t-lg" src="http://p1-tt-ipv6.byteimg.com/large/pgc-image/840ad761ff89482b92d04ed111bdff3a?from=detail&index=2" alt="" />
                        </a>
                        <div class="py-4">
                            <a href="#">
                                <h5 class="text-xl font-bold tracking-tight text-gray-900 text-center">使用者名稱</h5>
                            </a>                                              
                        </div>
                    </div>
                </div>
                
                <!-- 3 -->
                <div class="w-1/3 p-2">
                    <div class="bg-white rounded-lg border border-gray-200 shadow">
                        <a href="#">
                            <img class="rounded-t-lg" src="http://p1-tt-ipv6.byteimg.com/large/pgc-image/840ad761ff89482b92d04ed111bdff3a?from=detail&index=2" alt="" />
                        </a>
                        <div class="py-4">
                            <a href="#">
                                <h5 class="text-xl font-bold tracking-tight text-gray-900 text-center">使用者名稱</h5>
                            </a>                                              
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

export default {
  components: {
        SideBar,
        NavBar
    },
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