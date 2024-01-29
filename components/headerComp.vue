<script setup>
import arrowUp from "@/assets/svg/arrowup.svg"
import arrowDown from "@/assets/svg/arrowdown.svg"
import magnifier from "@/assets/svg/magnifier.svg"
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

const state = reactive({
  logedin:false,
})

</script>

<template>
  <div class="flex justify-between items-center mx-auto max-w-[1440px] p-5 bg-white">
    
    <div class="flex justify-center items-center gap-3">
      <a href="#">
        <img :src="telegram" alt="telegram">
      </a>
      <a href="#">
        <img :src="linkedin" alt="linkedin">
      </a>
      <a href="#">
        <img :src="youtube" alt="youtube">
      </a>
      <a href="#">
        <img :src="instagram" alt="instagram">
      </a>
    </div>

    <langSelectComp/> 

  </div>
  <hr>
  <div class="mx-auto max-w-[1440px] text-wrap p-5">
    <div class="flex justify-between h-[50px]">

      <div class="flex justify-center items-center gap-5 h-full">

        <button type="button" class="grid gap-1">
          <img :src="menu" alt="menu">
          <!-- <div class="bg-[#6b72c6] w-5 h-[2px] rounded"></div>
          <div class="bg-[#6b72c6] w-4 h-[2px] rounded"></div>
          <div class="bg-[#6b72c6] w-5 h-[2px] rounded"></div> -->
        </button>

        <NuxtLink to="/">
          <img :src="logo" alt="logo" class="max-w-[100px]">
        </NuxtLink>

      </div>

      <div class="flex justify-center items-center h-full">

        <div class="flex justify-center items-center rounded bg-[#eee] h-full px-5">
          <div class="">
            <input type="text" placeholder="Search something ..." class="bg-transparent tracking-tighter outline-none">
          </div>
          <select class="bg-transparent cursor-pointer font-bold">
            <option value="All">All Categories</option>
          </select>
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

          <button type="button" class="w-full" @click="state.logedin = !state.logedin">
            <div class="text-[#aaa] w-full text-start">Mohammad Mahdavi</div>
            <div class="flex justify-start items-center">
              <span class="font-bold">My Account</span>
              <span><img :src="arrowDown" alt="arrowDown"></span> 
            </div>
          </button>
        </div>

        <div class="flex justify-center items-center gap-3 h-full" v-else>
          <button type="button" class="border rounded h-full px-3" @click="state.logedin = !state.logedin">
            signup/login
          </button>
        </div>

      </div>

    </div>
  </div>
</template>
<style scoped>
</style>
