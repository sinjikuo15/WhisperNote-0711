<template>
    <div class="flex justify-center py-8">
        <div class="flex w-11/12 border border-gray-100 rounded-lg justify-center ">
            <div class="flex justify-center  w-full sm:w-8/12  md:w-6/12 text-center py-5">
                <div class="w-11/12 md:w-10/12 lg:w-8/12">
                    <figure class=" logo-wrap justify-center logo-center py-5">
                        <router-link to="/">
                            <img  class="logo" src="../assets/wslogo.jpeg" alt="">
                        </router-link>
                    </figure>
                    <h1 class="font-black text-2xl md:text-3xl title ">註冊您的帳號</h1>
                    <div class="flex justify-center pt-2 pb-2">
                        <p class="sm:text-sm">或 &nbsp;</p>                     
                        <p class="font-bold text-blue-600 sm:text-sm"> 開始您的14天試用</p>
                    </div>                    
                    
                    <div class="flex justify-center">
                        <div class="w-11/12 sm:w-full"> 
                            <div class="relative z-0 w-full pt-3 pb-4 group">
                                <input type="text" name="floating_displayName" class="member-input peer" placeholder=" " v-model="displayName" :class="{ 'is-invalid': displayNameError }"/>
                                <label for="floating_displayName" class="member-label">姓名
                                    <span class="text-red-600">{{ displayNameErrMsg }}</span>
                                </label>
                                                              
                            </div>                                           
                            
                            <div class="relative z-0 w-full pt-3 pb-4 group">
                                <input type="email" name="floating_email" class="member-input peer" placeholder=" " required v-model="email" :class="{ 'is-invalid': emailError }" />
                                <label for="floating_email" class="member-label">信箱
                                    <span class="text-red-600">{{ emailErrMsg }}</span>
                                </label>                                
                            </div>

                            <div class="relative z-0 w-full pt-3 pb-5 group">
                                <input type="password" name="floating_password" id="floating_password" class="member-input peer" placeholder=" " required minlength="8" maxlength="20" v-model="password" :class="{ 'is-invalid': passwordError }"/>
                                <label for="floating_password" class="member-label">密碼 
                                    <span class="text-red-600">{{ passwordErrMsg }}</span>
                                </label>                                                           
                            </div>                            
                            
                            <div class="flex sm:block md:flex justify-center  py-4">
                                <div class="flex justify-center ">
                                    <p class="text-gray-700 text-xs text-start"> 點擊註冊代表您同意<b class="text-blue-600">WhisperNote</b>之會員與客戶隱私權條款</p>
                                </div>                          
                               
                            </div>
                            <!-- 註冊失敗顯示內容 -->
                            <div  v-if="userExistMsg" id="alert-1" class="flex p-4 mb-4 bg-red-100 rounded-lg " role="alert">
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-red-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">Info</span>
                                <div class="ml-3 text-sm font-medium text-red-700">
                                    <span class="text-red-700">{{userExistMsg}}</span> 
                                </div>
                                <!-- <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 " data-dismiss-target="#alert-1" aria-label="Close">
                                    <span class="sr-only">Close</span>
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button> -->
                            </div>
                            <!-- 登入成功顯示內容 -->
                            <!-- <div v-if="userCreateSuccessMsg" id="alert-2" class="flex p-4 mb-4 bg-green-100 rounded-lg" role="alert">
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-green-700 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">Info</span>
                                <div class="ml-3 text-sm font-medium text-green-700">
                                   <span class="text-green-700">{{userCreateSuccessMsg}}</span>
                                </div>
                                <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-green-100 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 " data-dismiss-target="#alert-2" aria-label="Close">
                                    <span class="sr-only">Close</span>
                                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                            </div>                              -->
                             <!-- 樣式要再改為tailwind寫法 -->

                            <!-- <div v-if="userExistMsg" class="alert alert-danger" role="alert">
                                <span>{{userExistMsg}}</span>
                            </div> -->
                            <!-- <div v-if="userCreateSuccessMsg" class="alert alert-success" role="alert">
                                <span>{{userCreateSuccessMsg}}</span>
                            </div>   -->
                            <button class="w-full btn-primary font-bold p-2 mt-1 mb-1" @click.prevent="postSignup">註冊</button>
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
      displayName: 
        function(){
        if(this.displayName.length==0) {
          this.displayNameError = true;
          this.displayNameErrMsg = "請輸入姓名"
        }else{
          this.displayNameError = false;
          this.displayNameErrMsg = ""

        }
      },
      deep:true,

      email: function () {
        var isMail =
          /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
        if (!isMail.test(this.email)) {
          this.emailError = true;
          this.emailErrMsg = "請輸入正確Email格式";
        } else {
          this.emailError = false;          
          this.emailErrMsg = "";
        }
      },
      password: function () {
        if (this.password.length < 8) {
          this.passwordError = true;
          this.passwordErrMsg = "密碼需至少8個字元";
        } else {
          this.passwordError = false;
          this.passwordErrMsg = null;
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
                  this.email = ''
                  this.password = ''
                  break;
                case 1 :
                  this.userExistMsg = ''
                  this.userCreateSuccessMsg = '註冊成功！'
                  this.$router.push('/login');
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
