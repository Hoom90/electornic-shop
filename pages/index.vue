<script setup>
import image1 from "@/assets/image/new-laptop-balancing-with-water_23-2150296463.jpg"
import image2 from "@/assets/image/new-smartphone-balancing-with-leaves_23-2150296479.jpg"
import image3 from "@/assets/image/new-smartwatch-balancing-with-cliff_23-2150296475.jpg"
import image4 from "@/assets/image/white-headphones_93675-133847.jpg"
const state = reactive({
  slides:[
    {
      id:0,
      title: 'Sony',
      summary: 'Best Brand Ever Seen In Your Life',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nemo earum, consectetur tenetur, ab aliquam error, quod dolorem similique omnis esse dicta qui ipsam blanditiis aspernatur quas vero unde tempore!',
      image: image1,
    },
    {
      id:1,
      title: 'Samsung',
      summary: 'Say A Big Hi To Technology',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nemo earum, consectetur tenetur, ab aliquam error, quod dolorem similique omnis esse dicta qui ipsam blanditiis aspernatur quas vero unde tempore!',
      image: image2,
    },
    {
      id:2,
      title: 'Apple',
      summary: 'Best For Best',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nemo earum, consectetur tenetur, ab aliquam error, quod dolorem similique omnis esse dicta qui ipsam blanditiis aspernatur quas vero unde tempore!',
      image: image3,
    },
    {
      id:3,
      title: 'Lg',
      summary: 'Life Is Good',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nemo earum, consectetur tenetur, ab aliquam error, quod dolorem similique omnis esse dicta qui ipsam blanditiis aspernatur quas vero unde tempore!',
      image: image4,
    },
    {
      id:4,
      title: 'Lg',
      summary: 'Life Is Good',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nemo earum, consectetur tenetur, ab aliquam error, quod dolorem similique omnis esse dicta qui ipsam blanditiis aspernatur quas vero unde tempore!',
      image: image4,
    },
  ],
})
const currentIndex = ref(0);
const slider = ref(null)
const slide = (index) => {
  currentIndex.value = index;
  slider.value.style.transform = `translateX(${index * -20}%)`;
};

const nextSlide = () => {
  if (currentIndex.value >= state.slides.length - 1) {
    currentIndex.value = 0;
    slider.value.style.transform = `translateX(0)`;
  } else {
    let index = currentIndex.value
    currentIndex.value++;
    slider.value.style.transform = `translateX(${(index + 1) * -20}%)`;
  }
};

const previousSlide = () => {
  if(currentIndex.value <= 0){
    currentIndex.value = state.slides.length-1;
    slider.value.style.transform = `translateX(${(state.slides.length-1) * -20}%)`;
  }
  else{
    let index = currentIndex.value
    currentIndex.value--;
    slider.value.style.transform = `translateX(${(index-1) * -20}%)`;
  }
};
onMounted(() => {
  // Automatic sliding
  setInterval(() => {
    if (currentIndex.value === state.slides.length - 1) {
      currentIndex.value = 0;
    } else {
      currentIndex.value++;
    }
    slide(currentIndex.value);
  }, 5000);
});
</script>

<template>
  <section class="bg-gray-300">

    <div class="flex justify-center items-center">
      <!--  slider -->
      <div class="h-[500px] w-full relative">
        <div class="w-full relative h-full overflow-hidden rounded-md">
          <div class="absolute h-full flex flex-row-reverse transition-all ease-in-out duration-[0.5s] w-[500%]" ref="slider">

            <div class=" h-full flex justify-start items-center" :class="`w-1/${state.slides.length}`" v-for="item in state.slides" :key="item.id">
              <div class="flex-row justify-start items-center w-1/2 pl-20">
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
        <div class="dots-container">
          <div class="dot" v-for="(dot, index) in state.slides" :key="index" @click="slide(index)"
            :class="{ active: currentIndex === index }"></div>
        </div>
        <div class="w-[98%] flex justify-between items-center gap-10 absolute top-[50%] left-[1%] translate-y-[-50%]">
          <button @click="previousSlide" class="border bg-white w-[50px] aspect-square rounded-full">back</button>
          <button @click="nextSlide" class="border bg-white w-[50px] aspect-square rounded-full">next</button>
        </div>
      </div>

    </div>

  </section>
  <section>Best Seller Product</section>
  <section>Top Product</section>
</template>

<style scoped>
.dots-container {
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
}

.dot {
  width: 5px;
  height: 5px;
  margin-left: 5px;
  /* تغییر در مارجین */
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background-color .5s ease-in-out;
}

.dot.active {
  background-color: #49b779;
}

/* .slider {
  position: absolute;
  width: 400%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  transition: transform .5s ease-in-out;
} */

/* .slider img {
  width: 25%;
  height: 100%;
  object-fit: cover;
} */</style>