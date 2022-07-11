<template>
    <div class="flex justify-center py-8">
        <div class="flex w-11/12 border border-gray-100 rounded-lg justify-center ">
            <div class="flex justify-center  w-full sm:w-8/12  md:w-6/12 text-center py-5">
                <div class="w-11/12 md:w-10/12 lg:w-8/12">
                    <figure class=" logo-wrap justify-center logo-center py-5">
                        <img  class="logo" src="../assets/wslogo.jpeg" alt="">
                    </figure>
                    <h1 class="font-black text-2xl md:text-3xl title ">註冊您的帳號</h1>
                    <div class="flex justify-center pt-2">
                        <p class="sm:text-sm">或 &nbsp;</p>                     
                        <p class="font-bold text-indigo-500 sm:text-sm"> 開始您的14天試用</p>
                    </div>
                    
                    
                    <div class="flex justify-center">
                        <div class="w-11/12 sm:w-full">  
                            <h2 class="font-bold text-start text-gray-700 pt-4">姓名</h2>                    
                            <input class="w-full border border-gray-300 rounded-md  shadow focus:outline-blue-400 h-10" type="text" v-model="displayName" :class="{ 'is-invalid': displayNameError }">
                            <!-- 錯誤訊息的樣式要再調整 -->
                            <div class="invalid-feedback">
                                {{ displayNameErrMsg }}
                            </div>
                            <h2 class="font-bold text-start text-gray-700 pt-4">信箱</h2>                    
                            <input class="w-full border border-gray-300 rounded-md  shadow focus:outline-blue-400 h-10" type="email" v-model="email" :class="{ 'is-invalid': emailError }">
                            <div class="invalid-feedback">
                                {{ emailErrMsg }}
                            </div>
                            <h2 class="font-bold text-start text-gray-700 pt-4">密碼</h2>                    
                            <input class="w-full  border border-gray-300 rounded-md shadow focus:outline-blue-400 h-10" type="password" minlength="8" maxlength="20" v-model="password" :class="{ 'is-invalid': passwordError }">
                            <div class="invalid-feedback">
                                {{ passwordErrMsg }}
                            </div>
                            <div class="flex sm:block md:flex justify-center  py-4">
                                <div class="flex justify-center ">
                                    <p class="text-gray-700 text-xs text-start"> 點擊註冊代表您同意<b class="text-indigo-500">WhisperNote</b>之會員與客戶隱私權條款</p>
                                </div>                             
                                
                            </div>
                             <!-- 樣式要再改為tailwind寫法 -->
                            <div v-if="userExistMsg" class="alert alert-danger" role="alert">
                                <span>{{userExistMsg}}</span>
                            </div>
                            <div v-if="userCreateSuccessMsg" class="alert alert-success" role="alert">
                                <span>{{userCreateSuccessMsg}}</span>
                            </div>  
                            <button class="w-full bg-indigo-500 hover:bg-indigo-400 text-gray-100 rounded-md font-bold p-2 mt-1 mb-1" @click.prevent="postSignup">註冊</button>
                        </div>                        
                    </div>                
                </div>                
            </div>
            <div class="md:w-6/12 house">
                <h1>test</h1>
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
        border-radius: 0px 5px 5px 0px;

    }
    /* .title{
        font-family: 'Prompt', sans-serif;

    } */
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
        font-size: 1rem;
        color: gray;
        /* font-weight: bold; */
    }

    .title-flex::before,
    .title-flex::after {
        content: '';
        flex: 1;
        height: 0.5px;
        background: rgb(206, 206, 206);
    }

    .title-flex::before {
        margin-right: 0.6rem;
    }

    .title-flex::after {
        margin-left: 0.6rem;
    }
</style>
