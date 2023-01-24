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

<div class="p-5">
    <Swiper
        :slides-per-view="1"
        :space-between="50"
        :modules="modules"
        navigation
        :pagination="{ clickable: true }"
    >
        <SwiperSlide v-for="(imageUrl, index) in images">
            <img class="object-cover object-center w-full max-h-[70vh]" :src="imageUrl" :alt="`Slide ${index}`" />
        </SwiperSlide>
    </Swiper>
</div>

</section>

</template>
