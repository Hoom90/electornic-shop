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
</script>

<template>
  <section class="bg-gray-300">
    <carouselComp :data="state.slides"></carouselComp>
    <div class="flex justify-center items-center">
      
    </div>

  </section>
  <section>Best Seller Product</section>
  <section>Top Product</section>
</template>

<style scoped>
</style>