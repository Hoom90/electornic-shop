<script setup>
import hero from "@/assets/svg/registerHero.svg"
import arrowRight from "@/assets/svg/arrow-sm-right.svg"
const router = useRouter()
const user = UserStore()
const container = ref()
const firstNameInput = ref()
const lastNameInput = ref()
const userNameInput = ref()
const passwordInput = ref()
const newUser = reactive({
  firstName:'',
  lastName:'',
  userName:'',
  password:'',
})

onMounted(()=>{
  if(localStorage.getItem('token')){
    router.push('/')
  }
  setTimeout(()=>{
    container.value.classList.replace('opacity-0','opacity-1')
  },50)
})

const redirectToLogin = () =>{
  container.value.classList.replace('opacity-1','opacity-0')
  setTimeout(()=>{
    router.push('/auth/login')
  },50)
}

const redirectToHome = () =>{
  router.push('/')
}

const register = () =>{
  if(
      newUser.firstName.length == 0 ||
      newUser.lastName.length == 0 ||
      newUser.password.length == 0 ||
      newUser.userName.length == 0
    ){
    firstNameInput.value.validate()
    lastNameInput.value.validate()
    userNameInput.value.validate()
    passwordInput.value.validate()
    return
  }
  user.setToken('TestishToken')
  localStorage.setItem('token','TestishToken')
  localStorage.setItem('user',JSON.stringify(newUser))
  router.push('/')
}
</script>

<template>
  <div class="bg-[#6e74c5] h-screen p-5 px-10 flex items-center justify-center">
    <div class="bg-[#4951c2] rounded-xl h-[70vh] w-full flex items-center opacity-0 transition-all" ref="container">
      <div class="w-1/2">
        <img :src="hero" alt="hero" class="max-w-[500px] mx-auto h-full">
      </div>
      <div class="bg-white w-1/2 h-full flex items-center justify-start p-10 rounded-r-xl relative">
        <div class="ml-10">
          <button class="absolute top-10 right-10" @click="redirectToHome"><img :src="arrowRight" alt="arrowRight"></button>
          <form @submit.prevent="register">
            <p class="font-bold text-[30px]">Sign Up</p>
            <p class="my-3">TechiTech is insures you <strong>Best</strong> product at <strong>Lowest</strong> cost. <strong>Safety</strong> and our customer <strong>Fast delivery</strong> is our purpose.</p>
            <mm-input ref="firstNameInput" v-model="newUser.firstName" placeholder="FirstName*" has-rule="true" class="w-full rounded-none border-[#4951c2]"></mm-input>
            <mm-input ref="lastNameInput" v-model="newUser.lastName" placeholder="LastName*" has-rule="true" class="w-full rounded-none border-[#4951c2]"></mm-input>
            <mm-input ref="userNameInput" v-model="newUser.userName" placeholder="UserName*" has-rule="true" class="w-full rounded-none border-[#4951c2]"></mm-input>
            <mm-input ref="passwordInput" v-model="newUser.password" type="password" placeholder="Password*" has-rule="true" class="w-full rounded-none border-[#4951c2]"></mm-input>
            <div class="flex justify-center items-center gap-3 my-5 mt-10">
              <button type="submit" class="p-1 bg-[#4951c2] text-white hover:bg-[#5c63c7] transition-all w-1/2 border border-[#4951c2] h-[40px]">Signup</button>
              <button type="button" class="p-1 border border-[#4951c2] text-[#4951c2] hover:bg-[#4951c2] hover:text-white transition-all w-1/2 h-[40px]" @click="redirectToLogin">Login</button>
            </div>
            <div class="relative">
              <div class="w-full bg-gray-300 h-[1px]"></div>
              <p class="absolute -top-2.5 left-[50%] bg-white px-3 translate-x-[-50%] text-[12px]">OR</p>
            </div>
            <div class="flex justify-center items-center my-5">
              <p class="text-[#4951c2]">Under construction. Sorry for not having this service ready yet.</p>
            </div>
            <p></p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>