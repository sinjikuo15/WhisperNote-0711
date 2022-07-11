<template>
    <div class="container">
        <h1>日記總覽</h1>
    </div>
    <div class="container flex justify-end">
        <div>filter</div>
        <div>新增日記</div>
    </div>


    <!-- diary section -->
    <div class="container">
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <div v-for="diary in diaries" :key="diary.id" class="border border-gray-400">
                <h3>{{ diary.title }}</h3>
                <p>{{ diary.date }}</p>
                <div>
                    <span>{{ diary.permission }}</span>
                </div>
            </div>
        </div>
    </div>
    


</template>

<script>

export default {
    data() {
        return {
            diaries: []
        }
    },
    mounted() {
        this.axios.get('/getDiary')
        .then((response) => {
            console.log(response)
            this.diaries = response.data.data
          })
          .catch((err)=>{
            console.log(err);
          })
    }


}

</script>

