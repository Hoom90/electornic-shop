<script setup>
import arrowUp from "@/assets/svg/arrowup.svg"
import arrowDown from "@/assets/svg/arrowdown.svg"
import search from "@/assets/svg/search.svg"
import cart from "@/assets/svg/cart.svg"
import favovite from "@/assets/svg/heart.svg"
import user from "@/assets/svg/user.svg"
import instagram from "@/assets/svg/instagram.svg"
import telegram from "@/assets/svg/telegram.svg"
import linkedin from "@/assets/svg/linkedin.svg"
import youtube from "@/assets/svg/youtube.svg"
import logo from "@/assets/svg/logo.svg"
import menu from "@/assets/svg/hamburgerMenu.svg"
import home from "@/assets/svg/home.svg"
import chat from "@/assets/svg/chat.svg"
import product from "@/assets/svg/monitor-smartphone.svg"
import about from "@/assets/svg/medal-star-circle.svg"
import exit from "@/assets/svg/exit.svg"
const route = useRoute()
const router = useRouter()
const userStore = UserStore()
const sidebar = ref()
const overLay = ref()
const state = reactive({
  logedin:false,
  isSidebarOpen:false,
})

const social = reactive({
  telegram:{
    title:'telegram',
    image:telegram
  },
  linkedin:{
    title:'linkedin',
    image:linkedin
  },
  youtube:{
    title:'youtube',
    image:youtube
  },
  instagram:{
    title:'instagram',
    image:instagram
  },
})

const sidebarLinks = reactive({
  home:{
    title:'Home',
    image:home,
    link:'/',
  },
  product:{
    title:'Product',
    image:product,
    link:'/product',
  },
  contact:{
    title:'Contact',
    image:chat,
    link:'/contact',
  },
  about:{
    title:'About',
    image:about,
    link:'/about',
  },
})

// watch(()=>userStore.getToken,()=>{
//   console.log('hi');
//   // if(localStorage.getItem('token')){
//   //   state.logedin = true
//   // }
// })

onMounted(()=>{
  if(localStorage.getItem('token')){
    state.logedin = true
  }
})

const openSidebar = () =>{
  overLay.value.classList.replace('invisible','visible')
  sidebar.value.classList.replace('translate-x-[-250px]','translate-x-0')
}

const closeSidebar = () =>{
  overLay.value.classList.replace('visible','invisible')
  sidebar.value.classList.replace('translate-x-0','translate-x-[-250px]')
}

const redirectToLogin = () =>{
  router.push('/auth/login')
}

const logout = () =>{
  localStorage.clear()
  state.logedin = false
}


</script>

<template>
  <!-- page head -->
  <div class="flex justify-between items-center mx-auto max-w-[1440px] p-5 bg-white">
    
    <div class="flex justify-center items-center gap-3">
      <a href="#" v-for="item in social">
        <img :src="item.image" :alt="item.title">
      </a>
    </div>

    <langSelectComp/>

  </div>
  <hr>
  <div class="mx-auto max-w-[1440px] text-wrap p-5">
    <div class="flex justify-between h-[50px]">

      <div class="flex justify-center items-center gap-5 h-full">
        <img :src="menu" alt="menu" class="cursor-pointer" @click="openSidebar">
        <NuxtLink to="/">
          <img :src="logo" alt="logo" class="max-w-[100px]">
        </NuxtLink>
      </div>

      <div class="flex justify-center items-center h-full">

        <div class="flex justify-center items-center rounded bg-[#eee] h-full px-5">
          <input type="text" placeholder="Search something ..." class="bg-transparent tracking-tighter outline-none">
          <selectBoxComp/>
        </div>

        <button type="button" class="bg-[#232b36] h-full px-4 rounded">
          <img :src="search" alt="magnifier">
        </button>

      </div>
      
      <div class="flex justify-center items-center gap-3 h-full">
        
        <div class="flex justify-center items-center gap-3" v-if="state.logedin">
          <button type="button" class="border rounded-full w-[50px] aspect-square flex items-center justify-center bg-white relative">
            <img :src="cart" alt="cart">
            <span v-if="state.cart" class="bg-[#f00] w-2 h-2 rounded-full absolute -top-0 -right-0"></span>
          </button>

          <button type="button" class="border rounded-full w-[50px] aspect-square flex items-center justify-center bg-white relative">
            <img :src="favovite" alt="favovite">
            <span v-if="state.favovite" class="bg-[#f00] w-2 h-2 rounded-full absolute -top-0 -right-0"></span>
          </button>

          <button type="button" class="border rounded-full w-[50px] aspect-square flex items-center justify-center bg-white relative">
            <img :src="user" alt="user">
            <span v-if="state.user" class="bg-[#f00] w-2 h-2 rounded-full absolute -top-0 -right-0"></span>
          </button>

          <button type="button" class="w-full relative" @click="">
            <div class="text-[#aaa] w-full text-start">Mohammad Mahdavi</div>
            <div class="flex justify-start items-center">
              <span class="font-bold">My Account</span>
              <span><img :src="arrowDown" alt="arrowDown"></span> 
            </div>

            <div class="absolute top-14 left-0 bg-white shadow w-full border z-10 rounded gap-5">
              <button type="button" class="hover:bg-gray-300 w-full p-3 px-5 flex gap-1 justify-start items-center" @click="logout"><img :src="exit" alt="exit">Logout</button>
            </div>
          </button>
        </div>

        <div class="flex justify-center items-center gap-3 h-full" v-else>
          <button type="button" class="border rounded h-full px-3" @click="redirectToLogin">
            signup/login
          </button>
        </div>

      </div>

    </div>
  </div>

  <!-- sidebar -->
  <div ref="overLay" class="invisible absolute top-0 left-0 bg-[#ffffff00] z-10 w-full h-full" @click="closeSidebar">
    <div ref="sidebar" class="w-[250px] h-full bg-[#6067c2] translate-x-[-250px] transition-all">
      <div class="flex justify-center items-center p-5">
        <NuxtLink to="/">
          <img :src="logo" alt="logo" class="max-w-[100px]">
        </NuxtLink>
      </div>
      <div class="w-full h-[1px] bg-white "></div>
      <NuxtLink :to="item.link" class="flex items-center gap-10 w-full hover:bg-[#6e74c5] px-5 p-1 text-white" :active-class="route.path == item.link ? 'bg-[#6e74c5] hover:bg-[#3640c5]' : ''" v-for="item in sidebarLinks">
        <img :src="item.image" :alt="item.title" class="">
        <span class="w-1/2 text-end">{{item.title}}</span>
      </NuxtLink>
    </div>
  </div>
</template>