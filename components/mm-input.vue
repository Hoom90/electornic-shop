<script setup>
const props = defineProps(['placeholder','class','modelValue','hasRule','errorText','type'])
const emits = defineEmits(['update:modelValue'])

const text = ref(props.modelValue)
const type = ref(props.type)
const error = ref()
const container = ref()
const placeholder = ref()
const input = ref()

onMounted(()=>{
  if(props.modelValue){
    placeholder.value.classList.replace('translate-y-0','translate-y-[-24px]')
  }
})

const validate = () =>{
  if(props.hasRule){
    if(!text.value){
      error.value.classList.replace('opacity-0','opacity-1')
      container.value.classList.replace('border-gray-300','border-red-500')
      container.value.classList.replace('mb-0','mb-10')
      placeholder.value.classList.replace('text-gray-300','text-red-500')
      placeholder.value.classList.replace('translate-y-[-24px]','translate-y-0')
    }
    else{
      error.value.classList.replace('opacity-1','opacity-0')
      container.value.classList.replace('border-red-500','border-gray-300')
      container.value.classList.replace('mb-10','mb-0')
      placeholder.value.classList.replace('text-red-500','text-gray-300')
      placeholder.value.classList.replace('translate-y-0','translate-y-[-24px]')
    }
  }
}

defineExpose({
  validate
})

</script>
<template>
  <div ref="container" class="border border-gray-300 rounded relative flex justify-start items-center p-3 mt-3 bg-white font-sans cursor-text my-auto mb-0 transition-all" @click="input.focus()" :class="props.class">
    <input ref="input" :type="type ?? 'text'" :id="props.placeholder" class="w-full outline-none bg-transparent" @input="emits('update:modelValue', text)" v-model="text" @blur="validate">
    <label ref="placeholder" :for="props.placeholder" id="label" @click="input.focus()" class="absolute bg-white px-1 text-gray-300 transition-all ease-in-out translate-y-0 cursor-text">{{props.placeholder}}</label>
    <label ref="error" v-if="props.hasRule" class="absolute text-red-500 -bottom-6 opacity-0 transition-all ease-in-out text-sm">{{ props.errorText ?? 'Incorrect Value!' }}</label>
  </div>
</template>

<style scoped>
input:focus + #label{
  transform: translate(0, -24px);
}
</style>