<script setup>
import { Swiper, SwiperSlide } from "swiper/vue"
import { Navigation, Pagination, A11y } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"


const modules = [ Navigation, Pagination, A11y ]

let images = []
for (let step = 0; step < 10; step++) {
    const imageUrl = new URL(`../assets/bagr-${step}.jpg`, import.meta.url).href
    images.push(imageUrl)
}
</script>

<template>

<section id="galerie">

<div class="relative">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div v-for="(imageUrl, index) in images" class="hidden duration-700 ease-in-out">
            <!--<span class="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl">First Slide</span>-->
            <img :src="imageUrl" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Bagr">
        </div>
    </div>
    <!-- Slider indicators -->
    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1"></button>
    </div>
    <!-- Slider controls -->
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Předchozí</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Další</span>
        </span>
    </button>
</div>

<div class="p-5">
    <Swiper
        :slides-per-view="1"
        :space-between="50"
        :modules="modules"
        navigation
        :pagination="{ clickable: true }"
    >
        <SwiperSlide v-for="(imageUrl, index) in images">
            <img class="object-cover object-center w-full h-96" :src="imageUrl" :alt="`Slide ${index}`" />
        </SwiperSlide>
    </Swiper>
</div>

</section>

</template>
