<script setup>
import { Swiper, SwiperSlide } from "swiper/vue"
import { Navigation, Pagination, A11y, Autoplay } from "swiper"
import "swiper/css"
import "swiper/css/navigation"


const modules = [ Navigation, Pagination, A11y, Autoplay ]

let images = []
for (let step = 0; step < 8; step++) {
    const imageUrl = new URL(`../assets/vid/vid-${step}.mp4`, import.meta.url).href
    images.push(imageUrl)
}
</script>

<template>

<section id="instruktaz" class="py-24 lg:py-34 bg-gray-800 text-white">

<h2 class="pl-6 pb-10 text-3xl lg:text-4xl font-semibold tracking-wide">Instruktážní videa</h2>

<div class="p-5 flex">
    <Swiper
        :slides-per-view="1"
        :space-between="50"
        :modules="modules"
        navigation
        class="mx-auto max-w-7xl max-h-[80vh] flex bg-slate-100 rounded-lg"
    >
        <SwiperSlide 
            v-for="(imageUrl, index) in images"
            class="mx-auto my-auto flex"
        >
            <video
                controls
                :key="index"
                :src="imageUrl"
                :alt="`Slide ${index}`"
                class="mx-auto my-auto"
            />
        </SwiperSlide>
    </Swiper>
</div>

</section>

</template>
