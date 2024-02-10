<template>
  <div class="hidden w-screen h-screen absolute top-0 left-0 justify-center items-center" ref="container" @click="closeModal">
    <div class="w-[300px] rounded bg-[#de4141f9] text-white text-center relative p-5">
      <button class="absolute top-2 right-2" @click="closeModal"><img :src="close20x20" alt="close20x20"></button>
      <p class="text-[30px]">Ooops!</p>
      <p>Something went wrong.</p>

      <div
        class="w-[100px] h-[100px] m-10 mx-auto rounded-full transition-all border-4 flex justify-center items-center ">
        <img :src="close" alt="close">
      </div>

      <button type="button" class="bg-red-700 p-2 px-8 rounded hover:bg-red-800 transition-all w-full"
        @click="closeModal">Dismiss</button>
    </div>
  </div>
</template>

<script setup>
import close from "@/assets/svg/close.svg"
import close20x20 from "@/assets/svg/close20x20.svg"
const container = ref()
const props = defineProps(['modelValue'])
const emits = defineEmits(['update:modelValue'])

watch(()=>props.modelValue,()=>{
  if(props.modelValue){
    container.value.classList.replace('hidden','flex')
  }
})

const closeModal = () =>{
  container.value.classList.replace('flex','hidden')
  emits('update:modelValue', false)
}
</script>

<style></style>