<script setup>
import Samsung_Galexy_Watch from "@/assets/image/smasung-smartwatch.avif"
import Samsung_mart_Phone from "@/assets/image/samsung-smartphone.avif"
import Apple_Mac_Book from "@/assets/image/apple-mac-laptop.avif"
import Lg_Smart_TV from "@/assets/image/lg-smart-tv.avif"
import QCY_Airpod from "@/assets/image/qcy-airpod.avif"
import Samsung_Smart_TV from "@/assets/image/samsung-smart-tv.avif"
import Apple_Smartphone from "@/assets/image/apple-smart-phone.avif"
import Sony_Smartphone from "@/assets/image/sony-smartphone.avif"
import no_image from "@/assets/image/no-image.avif"
import cart from "@/assets/svg/cart-white.svg"
import eye from "@/assets/svg/eye.svg"
import image1 from "@/assets/image/new-laptop-balancing-with-water_23-2150296463.jpg"
import image2 from "@/assets/image/new-smartphone-balancing-with-leaves_23-2150296479.jpg"
import image3 from "@/assets/image/new-smartwatch-balancing-with-cliff_23-2150296475.jpg"
import image4 from "@/assets/image/white-headphones_93675-133847.jpg"
import TopProduct from "@/assets/image/new-laptop.png"
import truck from "@/assets/svg/truck.svg"
import card from "@/assets/svg/card.svg"
import headphone from "@/assets/svg/headphone.svg"
import money from "@/assets/svg/money-bag.svg"
import star from "@/assets/svg/full-star.svg"
import heart from "@/assets/svg/heart.svg"
const state = reactive({
  slides:[
    {
      id:1,
      title: 'Sony',
      summary: 'Best Brand Ever Seen In Your Life',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nemo earum, consectetur tenetur, ab aliquam error, quod dolorem similique omnis esse dicta qui ipsam blanditiis aspernatur quas vero unde tempore!',
      image: image1,
    },
    {
      id:2,
      title: 'Samsung',
      summary: 'Say A Big Hi To Technology',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nemo earum, consectetur tenetur, ab aliquam error, quod dolorem similique omnis esse dicta qui ipsam blanditiis aspernatur quas vero unde tempore!',
      image: image2,
    },
    {
      id:3,
      title: 'Apple',
      summary: 'Best For Best',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nemo earum, consectetur tenetur, ab aliquam error, quod dolorem similique omnis esse dicta qui ipsam blanditiis aspernatur quas vero unde tempore!',
      image: image3,
    },
    {
      id:4,
      title: 'Lg',
      summary: 'Life Is Good',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nemo earum, consectetur tenetur, ab aliquam error, quod dolorem similique omnis esse dicta qui ipsam blanditiis aspernatur quas vero unde tempore!',
      image: image4,
    },
  ],
  services:[
    {
      id:1,
      title: 'Free Shipping',
      summary: 'Free Delivery For All Orders',
      image: truck,
    },
    {
      id:2,
      title: 'Secure Payment',
      summary: 'All Card Accepted',
      image: card,
    },
    {
      id:3,
      title: '24/7 Support',
      summary: 'Friendly 24/7 Support',
      image: headphone,
    },
    {
      id:4,
      title: 'Money Guarantee',
      summary: '30 Days Money Back',
      image: money,
    },
  ],
  products:[
    {
      id:1,
      title: 'Samsung Galexy Watch',
      price: '1725',
      category: 'Watch',
      score: 4,
      isSale: false,
      image: Samsung_Galexy_Watch,
    },
    {
      id:2,
      title: 'Samsung Smart Phone',
      price: '900',
      category: 'Smartphone',
      score: 4,
      isSale: false,
      image: Samsung_mart_Phone,
    },
    {
      id:3,
      title: 'Apple Mac Book',
      price: '1725',
      category: 'Laptob',
      score: 5,
      isSale: false,
      image: Apple_Mac_Book,
    },
    {
      id:4,
      title: 'Lg Smart TV',
      price: '1930',
      category: 'TV',
      score: 4,
      isSale: false,
      image: Lg_Smart_TV,
    },
    {
      id:5,
      title: 'QCY Airpod',
      price: '1725',
      category: 'Accessories',
      score: 3,
      isSale: false,
      image: QCY_Airpod,
    },
    {
      id:6,
      title: 'Samsung Smart TV',
      price: '2150',
      category: 'TV',
      score: 4,
      isSale: true,
      image: Samsung_Smart_TV,
    },
    {
      id:7,
      title: 'Apple Smartphone',
      price: '2310',
      category: 'Smartphone',
      score: 4,
      isSale: false,
      image: Apple_Smartphone,
    },
    {
      id:8,
      title: 'Sony Smartphone',
      price: '1725',
      category: 'Smartphone',
      score: 4,
      isSale: true,
      image: Sony_Smartphone,
    },
  ]
})

const addToFav = (id) =>{
  item.value.classList.replace('opacity-50','opacity-1')
}
</script>

<template>

  <section>
    <div class="bg-gray-100">
      <carouselComp :data="state.slides"></carouselComp>
    </div>
    <div class="flex-row md:flex items-center justify-around p-10">
      <div class="flex-row md:flex justify-center items-center gap-5 my-5 md:my-0" v-for="item in state.services">
        <img :src="item.image" :alt="item.image" class="mx-auto">
        <div class="text-center md:text-start">
          <p class="font-bold">{{ item.title }}</p>
          <p class="text-gray-500">{{ item.summary }}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-gray-100 p-10">
    <p class="text-center text-[25px] font-bold">Best Seller Product</p>
    <p class="text-center mb-10 text-gray-500">Check our best seller products on TechiTech website right now </p>
    <div class="flex justify-center items-center flex-wrap">
      <div v-for="item in state.products" class="min-w-[200px] lg:w-1/4">
        <div class="p-5">
          <div class="bg-white p-5 rounded">

            <div class="flex justify-between">
              <div v-if="true">
                <p class="rounded px-2 p-1 text-red-400 bg-red-100">Sale</p>
              </div>
              <button type="button" class="opacity-50 border rounded-full w-[40px] p-2 hover:border-black transition-all">
                <img :src="heart" alt="Favorite" @click="addToFav(item.id)">
              </button>
            </div>

            <div class="flex-row items-center my-5">
              <img :src="item.image" :alt="item.image" class="w-[200px] aspect-square object-contain mx-auto">
              <div class="text-start">
                <p class="text-gray-500">{{ item.category }}</p>
                <p class="font-bold text-[20px]">{{ item.title }}</p>
              </div>
              <div class="flex items-center justify-between">
                <p class="text-blue-400 font-bold">${{ item.price }}</p>
                <div class="flex justify-center items-center">
                  <img :src="star" alt="star" v-for="score in item.score">
                </div>
              </div>
            </div>

            <div>
              <button type="button" class="flex justify-center items-center gap-1 w-full bg-blue-600 rounded p-1 mb-1 text-white hover:bg-blue-700 transition-all">
                <img :src="cart" alt="cart">
                <p>Add to cart</p>
              </button>
              <button type="button" class="flex justify-center items-center gap-1 w-full border rounded p-1 text-gray-400 hover:border-gray-400">
                <img :src="eye" alt="eye">
                <p>Quick view</p>  
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="p-10 mb-20">
    <div class="p-5">
      <div class="flex-row lg:flex justify-center gap-10 bg-[#e6f1f8] rounded p-10">
        <img :src="TopProduct" alt="TopProduct" class="mx-auto aspect-square my-auto">
        <div class="mt-0">
          <p class="text-emerald-500 font-bold text-[12px]">FLASH SALE 7.7.7</p>
          <p class="font-bold text-[30px] my-5">Lenovo Yoga X</p>
          <p class="text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae eveniet necessitatibus rem! Eos ipsam a modi ipsum accusantium excepturi tempore temporibus dolorum, ut nam corporis fugiat dolorem molestias, commodi iure?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae eveniet necessitatibus rem! Eos ipsam a modi ipsum accusantium excepturi tempore temporibus dolorum, ut nam corporis fugiat dolorem molestias, commodi iure?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae eveniet necessitatibus rem! Eos ipsam a modi ipsum accusantium excepturi tempore temporibus dolorum, ut nam corporis fugiat dolorem molestias, commodi iure?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae eveniet necessitatibus rem! Eos ipsam a modi ipsum accusantium excepturi tempore temporibus dolorum, ut nam corporis fugiat dolorem molestias, commodi iure?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae eveniet necessitatibus rem! Eos ipsam a modi ipsum accusantium excepturi tempore temporibus dolorum, ut nam corporis fugiat dolorem molestias, commodi iure?
          </p>
          <div class="mt-5 flex-row md:flex justify-start items-center gap-1">
              <button type="button" class="flex justify-center items-center gap-1 bg-blue-600 rounded p-1 px-10 text-white hover:bg-blue-700 transition-all mx-auto mb-1 md:mx-0 md:mb-0">
                <img :src="cart" alt="cart">
                <p>Add to cart</p>
              </button>
              <button type="button" class="flex justify-center items-center gap-1 border rounded p-1 px-10 bg-white text-gray-400 hover:border-gray-400 mx-auto md:mx-0">
                <img :src="eye" alt="eye">
                <p>Quick view</p>  
              </button>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>