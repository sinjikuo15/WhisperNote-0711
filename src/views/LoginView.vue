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
                        <p class="font-bold text-blue-600 sm:text-sm"> 開始您的14天試用</p>
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
                    <div class="flex justify-center pb-3">
                        <h1 class="w-11/12 sm:w-full  title-flex  ">或由信箱登入</h1>
                    </div>
                    <div class="flex justify-center">
                        <div class="w-11/12 sm:w-full">
                            <div class="relative z-0 w-full pt-3 pb-5 group">
                                <input type="email" name="floating_email" class="member-input peer" placeholder=" " required v-model="email" :class="{ 'is-invalid': emailError }" />
                                <label for="floating_email" class="member-label">信箱</label>
                                <div class="invalid-feedback pt-0.5 p text-red-600">
                                    {{ emailErrMsg }}
                                </div>
                            </div>
                            <div class="relative z-0 w-full pt-3 pb-5 group">
                                <input type="password" name="floating_password" id="floating_password" class="member-input peer" placeholder=" " required v-model="password"/>
                                <label for="floating_password" class="member-label">密碼</label>
                                <div  v-if="noLoginMsg" class="alert alert-danger pt-0.5" role="alert">
                                <span class="text-red-600">{{noLoginMsg}}</span>
                                </div>
                            </div>
                            
                            <div class="pt-5">
                                <button class="w-full btn-primary   font-bold p-2 mt-1 mb-1 " @click.prevent="postLogin">登入</button>
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
                  let status = res.data.status
                  let vm = this
                  switch (status){
                    case 0 :
                      vm.noLoginMsg = '找不到此 user 或密碼錯誤'
                      break;
                    case 1 :
                      // this.reload()
                    //   vm.$store.dispatch('getLoginStatus')
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
        width: 75px;
    }
    .logo{
        width: 100%;
    }
    .logo-center{
        margin:auto
    }
    .house{
        background-image: url(https://img01.sc115.com/uploads3/sc/jpgs/1912/hpic1808_sc115.com.jpg);
        background-repeat: no-repeat;
        background-position:center ;
        background-size:cover;
    }
    .sign-btn{
        width: 30%;       
    }
    .sign-btn :hover{
        transform: scale(1.3);
        transition: 0.5s;               
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
