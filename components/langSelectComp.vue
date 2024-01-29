<script setup>
import en from "@/assets/svg/en.svg"
import fa from "@/assets/svg/fa.svg"
import arrowUp from "@/assets/svg/arrowup.svg"
import arrowDown from "@/assets/svg/arrowdown.svg"
const selectBox = reactive({
  data: [
    {
      id: 1,
      title: 'English (US)',
      short: 'en',
      thumbnail: en,
    },
    {
      id: 2,
      title: 'فارسی (IR)',
      short: 'fa',
      thumbnail: fa,
    },
  ],
  value: 'English (US)',
  lang: 'en',
  image: en,
  arrow: arrowDown,
  isOpen: false,
})

const changeSelectBox = (id) => {
  if (id == 1) {
    selectBox.lang = 'en'
    selectBox.image = en
    selectBox.value = 'English (US)'
  }
  if (id == 2) {
    selectBox.lang = 'fa'
    selectBox.image = fa
    selectBox.value = 'فارسی (IR)'
  }
}

const openSelectBox = () => {
  if (selectBox.isOpen) {
    closeSelectBox()
  }
  else {
    selectBox.arrow = arrowUp
    selectBox.isOpen = !selectBox.isOpen
  }
}

const closeSelectBox = () => {
  selectBox.arrow = arrowDown
  selectBox.isOpen = false
}
</script>

<template>
  <button type="button" class="flex gap-1 justify-center items-center relative" @blur="closeSelectBox" @click="openSelectBox">
    <img :src="selectBox.image" :alt="selectBox.lang">
    <span>{{ selectBox.value }}</span>
    <img :src="selectBox.arrow" :alt="selectBox.arrow">

    <ul v-if="selectBox.isOpen" class="absolute top-8 w-max border bg-white rounded-b p-1 px-3">
      <li class="flex justify-start items-center gap-2" @click="changeSelectBox(item.id)"
        v-for="(item, index) in selectBox.data" :key="index">
        <img :src="item.thumbnail" :alt="item.short"><span>{{ item.title }}</span>
      </li>
    </ul>
  </button>
</template>