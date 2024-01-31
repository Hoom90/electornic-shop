<script setup>
import hero from "@/assets/svg/loginHero.svg"
import arrowRight from "@/assets/svg/arrow-sm-right.svg"
const router = useRouter()
const container = ref()
onMounted(()=>{
  if(localStorage.getItem('token')){
    router.push('/')
  }
  setTimeout(() => {
    container.value.classList.replace('opacity-0','opacity-1')
  }, 50);
})

const redirectToForgetPass = () =>{
  router.push('/auth/forgetpass')
}

const redirectToRegister = () =>{
  container.value.classList.replace('opacity-1','opacity-0')
  setTimeout(() => {
    router.push('/auth/register')
  }, 50);
}

const redirectToHome = () =>{
  router.push('/')
}

const login = () =>{
  localStorage.setItem('token','TestishToken')
  router.push('/')
}

</script>

<template>
  <div class="bg-[#6e74c5] h-screen p-5 px-10 flex items-center justify-center">
    <div class="bg-[#4951c2] rounded-xl h-[60vh] w-full flex items-center opacity-0 transition-all" ref="container">
      <div class="w-1/2">
        <img :src="hero" alt="hero" class="max-w-[500px] mx-auto h-full">
      </div>
      <div class="bg-white w-1/2 h-full flex items-center justify-start p-10 rounded-r-xl relative">
        <div class="ml-10 w-full">
          <button class="absolute top-10 right-10" @click="redirectToHome"><img :src="arrowRight" alt="arrowRight"></button>
          <p class="font-bold text-[30px]">Login</p>
          <p class="mb-5">Welcome! TechiTech is ready to serve you any time.</p>
          <mm-input  placeholder="Username*" has-rule="true" class="w-full rounded-none border-[#4951c2]"></mm-input>
          <mm-input  placeholder="Password*" has-rule="true" class="w-full rounded-none border-[#4951c2]"></mm-input>
          <div class="flex justify-between items-center mt-5">
            <div class="flex justify-center items-center gap-1">
              <input type="checkbox">
              <span>Remember Me</span>
            </div>
            <button type="button" @click="redirectToForgetPass">Forgot Password?</button>
          </div>
          <div class="flex justify-center items-center gap-3 my-5">
            <button class="p-1 bg-[#4951c2] text-white hover:bg-[#5c63c7] transition-all w-2/3 border border-[#4951c2] h-[40px]" @click="login">Login</button>
            <button class="p-1 border border-[#4951c2] text-[#4951c2] hover:bg-[#4951c2] hover:text-white transition-all w-1/3 h-[40px]" @click="redirectToRegister">Signup</button>
          </div>
          <div class="relative">
            <div class="w-full bg-gray-300 h-[1px]"></div>
            <p class="absolute -top-2.5 left-[50%] bg-white px-3 translate-x-[-50%] text-[12px]">OR</p>
          </div>
          <div class="flex justify-center items-center my-5">
            <p class="text-[#4951c2]">Under construction. Sorry for not having this service ready yet.</p>
          </div>
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>