<template>
    <div class="flex justify-center">
        <div class="flex w-11/12 md:w-10/12 rounded-md border-2 border-blue-200  justify-center ">
            <div class="flex justify-center w-full sm:w-6/12 bg-gray-200 text-center py-5">
                <div class="w-full sm:w-10/12">
                    <figure class=" logo-wrap justify-center logo-center">
                        <img  class="logo" src="../assets/wslogo.jpeg" alt="">
                    </figure>
                    <h1 class="font-bold text-2xl sm:text-xl">Sign in to your account</h1>
                    <p class="text-purple-500 sm:text-sm">Or start your 14-day free trial</p>
                    <p class="pt-5 font-bold ">Sign in with</p>
                    <!-- 三個按鈕區 -->
                    <div class="py-1 pb-5 flex justify-around">
                        <a class="sign-btn" href="">
                            <i class="fa-brands fa-facebook "></i> 
                        </a>                                             
                        <a class="sign-btn" href="">
                            <i class="fa-brands fa-twitter "></i>
                        </a>
                        <a class="sign-btn" href="">
                            <i class="fa-brands fa-github "></i>
                        </a>
                    </div>
                    <!-- 分隔線 -->
                    <div class="flex justify-center">
                        <h1 class="w-11/12  title-flex py-2">Or continue with</h1>
                    </div>
                    
                    <h2 class="w-11/12 ">Email address</h2>                    
                    <input class="w-11/12  border-2 border-gray-400 rounded-md" type="email" v-model="email" :class="{ 'is-invalid': emailError }">
                    <div class="invalid-feedback">
                        {{ emailErrMsg }}
                    </div>

                    <h2 class="w-11/12 ">Password</h2>                    
                    <input class="w-11/12  border-2 border-gray-400 rounded-md" type="password" v-model="password">
                    <!-- <div class="invalid-feedback">
                        {{ passwordErrMsg }}
                    </div> -->

                    <div  v-if="noLoginMsg" class="alert alert-danger" role="alert">
                        <span>{{noLoginMsg}}</span>
                    </div>

                    <button class="w-11/12 bg-purple-600 text-gray-100" @click.prevent="postLogin">Sign in</button>
                
                </div>                
            </div>
            <div class="sm:w-6/12 house">
                
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

<style>
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
