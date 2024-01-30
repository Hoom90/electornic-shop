<script setup>
import arrowUp from "@/assets/svg/arrowup.svg"
import arrowDown from "@/assets/svg/arrowdown.svg"
const selectBox = reactive({
  data:[
    {
      id:1,
      title:'All Categories',
    },
    {
      id:2,
      title:'Sony',
    },
  ],
  value:'All Categories',
  arrow: arrowDown,
  isOpen: false,
})

const changeSelectBox = (id) => {
  selectBox.value = selectBox.data.find(item => item.id == id).title
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
  <button type="button" class="flex justify-center items-center cursor-pointer font-bold outline-none relative" @blur="closeSelectBox" @click="openSelectBox">
    <span>{{ selectBox.value }}</span>
    <img :src="selectBox.arrow" :alt="selectBox.arrow">
    <ul v-if="selectBox.isOpen" class="absolute top-9 w-max border bg-white rounded-b p-1 px-3 z-10">
      <li class="flex justify-start items-center gap-2" @click="changeSelectBox(item.id)"
        v-for="(item, index) in selectBox.data" :key="index">
        <img :src="item.thumbnail" :alt="item.short"><span>{{ item.title }}</span>
      </li>
    </ul>
  </button>
</template>

<style>

</style>