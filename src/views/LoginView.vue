<template>
    <div class="flex justify-center py-8">
        <div class="flex w-11/12 border border-gray-100 rounded-lg justify-center ">
            <div class="flex justify-center w-full sm:w-8/12 md:w-6/12  text-center py-5">
                <div class="w-11/12 md:w-10/12 lg:w-8/12">
                    <figure class=" logo-wrap justify-center logo-center py-5">
                        <img  class="logo" src="../assets/wslogo.jpeg" alt="">
                    </figure>
                    <h1 class="font-black text-2xl md:text-3xl title ">登入您的帳號</h1>
                    <div class="flex justify-center pt-2">
                        <p class="sm:text-sm">或 &nbsp;</p>                     
                        <p class="font-bold text-blue-500 sm:text-sm"> 開始您的14天試用</p>
                    </div>
                    <p class="pt-5 font-bold text-gray-700">快速登入</p>
                    <!-- 三個按鈕區 -->
                    <div class=" pb-5  flex justify-center sm:justify-between ">
                        <a class="sign-btn " href="">
                            <i class="fa-brands fa-facebook "></i> 
                        </a>                                             
                        <a class="sign-btn" href="">
                            <i class="fa-brands fa-twitter "></i>
                        </a>
                        <a class="sign-btn" href="">
                            <i class="fa-brands fa-line text-green-600"></i>
                        </a>
                    </div>
                    <!-- 分隔線 -->
                    <div class="flex justify-center">
                        <h1 class="w-11/12 sm:w-full  title-flex  ">或由信箱登入</h1>
                    </div>
                    <div class="flex justify-center">
                        <div class="w-11/12 sm:w-full">  
                            <h2 class="font-bold text-start text-gray-700 pt-4">信箱</h2>                    
                            <input class="w-full border border-gray-300 rounded-md  shadow focus:outline-blue-400 h-10" type="email" v-model="email" :class="{ 'is-invalid': emailError }">
                            <div class="invalid-feedback">
                                {{ emailErrMsg }}
                            </div>
                            <h2 class="font-bold text-start text-gray-700 pt-4" >密碼</h2>                    
                            <input class="w-full  border border-gray-300 rounded-md  shadow focus:outline-blue-400 h-10" type="password" v-model="password">
                            <div  v-if="noLoginMsg" class="alert alert-danger" role="alert">
                                <span>{{noLoginMsg}}</span>
                            </div>
                            <!-- <div class="flex sm:block md:flex justify-between py-4">
                                <div class="flex justify-center">
                                    <input type="checkbox" name="" id="">
                                    <p class="text-gray-700 font-bold"> 記住我</p>
                               </div>                               
                                <a href="">
                                    <p class="text-indigo-500 font-bold hover:underline">忘記您的密碼?</p>
                                </a>
                            </div> -->
                            <div class="pt-5">
                                <button class="w-full bg-blue-600 hover:bg-blue-700 text-gray-100 rounded-md font-bold p-2 mt-1 mb-1 " @click.prevent="postLogin">登入</button>
                            </div>                            
                        </div>                        
                    </div>             
                </div>                
            </div>
            <div class="md:w-6/12 house">                
            </div>
        </div>        
    </div>
</template>

<script>
export default {
  name: "login",
  data() {
        return {
            email: '',
            password: '',
            errors: [],
            noLoginMsg: '',
            emailError: false,
            emailErrMsg: "",
            // passwordError: false,
            // passwordErrMsg: "",
        }
    },
    watch: {
      email: function () {
        var isMail =
          /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
        if (!isMail.test(this.email)) {
          this.emailError = true;
          this.emailErrMsg = "請輸入正確Email格式";
        } else {
          this.emailError = false;
        }
      },
    //   password: function () {
    //     if (this.password.length < 8) {
    //       this.passwordError = true;
    //       this.passwordErrMsg = "密碼需至少8個字元";
    //     } else {
    //       this.passwordError = false;
    //     }
    //   },
    },
    methods: {
        async postLogin() {
            const submitForm = {
                email: this.email,
                password: this.password
            }
            // console.log(submitForm)
            await this.axios.post('/login', submitForm)
                .then((res) => {
                  console.log(res.data)
                  let status = res.data.loginSuccess
                  let vm = this
                  switch (status){
                    case 0 :
                      vm.noLoginMsg = '找不到此 user 或密碼錯誤'
                      break;
                    case 1 :
                      // this.reload()
                      vm.$store.dispatch('getLoginStatus')
                      vm.$router.push('/')
                      break;
                  }
                  
                })
                .catch((err)=>{
                  console.log(err);
                })
                }
        },
};
</script>

<style scoped>
    .logo-wrap{
        width: 100px;
    }
    .logo{
        width: 100%;
    }
    .logo-center{
        margin:auto
    }
    .house{
        background-image: url(https://img.ixintu.com/download/jpg/202010/131e4919c3a16c0f10998ae489bf4fea_800_291.jpg!con);
        background-repeat: no-repeat;
        background-position:center ;
        background-size:cover;
    }
    /* 分隔線 */
    .title-flex {
        display: flex;
        align-items: center;
        font-size: 1.2rem;
        color: gray;
        /* font-weight: bold; */
    }

    .title-flex::before,
    .title-flex::after {
        content: '';
        flex: 1;
        height: 1px;
        background: rgb(137, 135, 135);
    }

    .title-flex::before {
        margin-right: 0.8rem;
    }

    .title-flex::after {
        margin-left: 0.8rem;
    }
</style>
