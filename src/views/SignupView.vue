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
                    
                    <h2 class="w-11/12 ">Name</h2>                    
                    <input class="w-11/12  border-2 border-gray-400 rounded-md" type="text" v-model="displayName" :class="{ 'is-invalid': displayNameError }">
                    <!-- 錯誤訊息的樣式要再調整 -->
                    <div class="invalid-feedback">
                        {{ displayNameErrMsg }}
                    </div>

                    <h2 class="w-11/12 ">Email address</h2>                    
                    <input class="w-11/12  border-2 border-gray-400 rounded-md" type="email" v-model="email" :class="{ 'is-invalid': emailError }">
                    <div class="invalid-feedback">
                        {{ emailErrMsg }}
                    </div>
                    
                    <h2 class="w-11/12 ">Password</h2>                    
                    <input class="w-11/12  border-2 border-gray-400 rounded-md" type="password" minlength="8" maxlength="20" v-model="password" :class="{ 'is-invalid': passwordError }">
                    <div class="invalid-feedback">
                        {{ passwordErrMsg }}
                    </div>

                    <!-- 樣式要再改為tailwind寫法 -->
                    <div v-if="userExistMsg" class="alert alert-danger" role="alert">
                        <span>{{userExistMsg}}</span>
                    </div>
                    <div v-if="userCreateSuccessMsg" class="alert alert-success" role="alert">
                        <span>{{userCreateSuccessMsg}}</span>
                    </div>  
                    <button class="w-11/12 bg-purple-600 text-gray-100" @click.prevent="postSignup">Sign up</button>
                
                </div>                
            </div>
            <div class="sm:w-6/12 house">
                
            </div>
        </div>        
    </div>
</template>

<script>
export default {
  name: "signup",
  data() {
        return {
            displayName: '',
            email: '',
            password: '',
            userExistMsg: '',
            userCreateSuccessMsg: '',
            displayNameError: false,
            displayNameErrMsg: '',
            emailError: false,
            emailErrMsg: "",
            passwordError: false,
            passwordErrMsg: "",
        }
    },
    watch: {
      displayName: function(){
        if(this.displayName.length==0) {
          this.displayNameError = true;
          this.displayNameErrMsg = "請輸入姓名"
        }
      },
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
      password: function () {
        if (this.password.length < 8) {
          this.passwordError = true;
          this.passwordErrMsg = "密碼需至少8個字元";
        } else {
          this.passwordError = false;
        }
      },
    },
  
    methods: {
        postSignup() {
            // console.log(this.axios)
            const submitForm = {
                displayName: this.displayName,
                email: this.email,
                password: this.password
            }
            this.axios.post('/signup', submitForm)
            .then((res) => {
              console.log(res.data)
              let status = res.data.status
              switch (status){
                case 0 :
                  this.userCreateSuccessMsg = ''
                  this.userExistMsg = '此帳號已存在！請登入或使用其他 Email'
                  break;
                case 1 :
                  this.userExistMsg = ''
                  this.userCreateSuccessMsg = '註冊成功！'
                //   let navigate = this.$router
                //   setTimeout(function(){
                //       navigate.push('/login');
                //   },1500)
                  break;
              }
            })
            .catch((err)=>{
              console.log(err);
            })
        },
    }
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
