<script setup>
const props = defineProps(['data'])
const currentIndex = ref(0);
const slider = ref(null)
const slides = ref(null)
const slide = (index) => {
  currentIndex.value = index;
  slider.value.style.transform = `translateX(${index * - (100/props.data.length)}%)`;
};

const nextSlide = () => {
  if (currentIndex.value >= props.data.length - 1) {
    currentIndex.value = 0;
    slider.value.style.transform = `translateX(0)`;
  } else {
    slider.value.style.transform = `translateX(${(currentIndex.value + 1) * - (100/props.data.length)}%)`;
    currentIndex.value++;
  }
};

const previousSlide = () => {
  if(currentIndex.value <= 0){
    currentIndex.value = props.data.length - 1;
    slider.value.style.transform = `translateX(${(props.data.length - 1) * - (100/props.data.length)}%)`;
  }
  else{
    slider.value.style.transform = `translateX(${(currentIndex.value - 1) * - (100/props.data.length)}%)`;
    currentIndex.value--;
  }
};


onMounted(() => {
  slider.value.classList.add(`w-[${props.data.length*100}%]`)
  slides.value.forEach(item => {
    item.classList.add(`w-[${100/props.data.length}%]`)
  });
  // Automatic sliding
  setInterval(() => {
    if (currentIndex.value === props.data.length - 1) {
      currentIndex.value = 0;
    } else {
      currentIndex.value++;
    }
    slide(currentIndex.value);
  }, 5000);
});
</script>


<template>
  <div class="h-[500px] w-full relative">
    <div class="w-full relative h-full overflow-hidden rounded-md">
      <div class="absolute h-full flex flex-row-reverse transition-all ease-in-out duration-[0.5s]" ref="slider">
        <div class=" h-full flex justify-start items-center" v-for="item in props.data" :key="item.id" ref="slides">
          <div class="flex-row justify-start items-center w-1/2 pl-20 truncate">
            <p>{{ item.title }}</p>
            <p>{{ item.summary }}</p>
            <p>{{ item.description }}</p>
          </div>
          <div class="flex justify-center items-center h-full w-1/2">
            <img class="h-full object-contain" :src="item.image" alt="Image">
          </div>
        </div>
      </div>
    </div>
    <div class="absolute bottom-2 left-[50%] translate-x-[-50%] flex justify-center items-center m-0 p-0">
      <div class="dot" v-for="(dot,index) in props.data" :key="index" @click="slide(index)" :class="{ active: currentIndex === index }"></div>
    </div>
    <div class="w-[98%] flex justify-between items-center gap-10 absolute top-[50%] left-[1%] translate-y-[-50%]">
      <button @click="previousSlide" class="border bg-white w-[50px] aspect-square rounded-full">back</button>
      <button @click="nextSlide" class="border bg-white w-[50px] aspect-square rounded-full">next</button>
    </div>
  </div>
</template>


<style>
.dot {
  width: 5px;
  height: 5px;
  margin-left: 5px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background-color .5s ease-in-out;
}

.dot.active {
  background-color: #49b779;
}
</style>