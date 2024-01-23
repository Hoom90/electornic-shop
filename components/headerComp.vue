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
</script>

<template>
  <div class="bg-white">
    <div class="flex-row justify-center items-center">
      <div class="flex justify-between items-center mx-auto max-w-[1440px] p-5">
        <div class="flex justify-center items-center gap-3">
          <img :src="telegram" alt="telegram">
          <img :src="linkedin" alt="linkedin">
          <img :src="youtube" alt="youtube">
          <img :src="instagram" alt="instagram">
        </div>
        <div>
          <select>
            <option value="en">
              <img :src="cart" alt="cart"><span>English</span>
            </option>
          </select>
        </div>
      </div>
      <hr>
      <div class="flex justify-between py-5 mx-auto max-w-[1440px] text-wrap p-5">
        
        <div class="flex justify-center items-center gap-5">
          <button type="button" class="grid gap-1">
            <div class="bg-[#6b72c6] w-5 h-[2px] rounded"></div>
            <div class="bg-[#6b72c6] w-4 h-[2px] rounded"></div>
            <div class="bg-[#6b72c6] w-5 h-[2px] rounded"></div>
          </button>
          <NuxtLink to="/">
            <img :src="logo" alt="logo" class="max-w-[100px]">
          </NuxtLink>
        </div>

        <div class="flex justify-center items-center">
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
        
        <div class="flex justify-center items-center gap-3 py-3">
          <button type="button" class="border rounded-full h-full aspect-square flex items-center justify-center bg-white relative">
            <img :src="cart" alt="cart">
            <span class="bg-[#f00] w-4 h-4 rounded-full absolute -top-1 -right-1"></span>
          </button>
          <button type="button" class="border rounded-full h-full aspect-square flex items-center justify-center bg-white relative">
            <img :src="favovite" alt="favovite">
            <span class="bg-[#f00] w-4 h-4 rounded-full absolute -top-1 -right-1"></span>
          </button>
          <button type="button" class="border rounded-full h-full aspect-square flex items-center justify-center bg-white relative">
            <img :src="user" alt="user">
            <span class="bg-[#f00] w-4 h-4 rounded-full absolute -top-1 -right-1"></span>
          </button>
          <button type="button" class="w-full">
            <div class="text-[#aaa] w-full">Mohammad Mahdavi</div>
            <div class="flex justify-start items-center">
              <span class="font-bold">My Account</span>
              <span><img :src="arrowDown" alt="arrowDown"></span> 
            </div>
          </button>
          <button type="button" class="hidden">
            signup/login
          </button>
        </div>
        
      </div>
    </div>
  </div>
</template>
