<script setup>
import { Swiper, SwiperSlide } from "swiper/vue"
import { Navigation, Pagination, A11y, Autoplay } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/autoplay"


const modules = [ Navigation, Pagination, A11y, Autoplay ]

let images = []
for (let step = 0; step < 10; step++) {
    const imageUrl = new URL(`../assets/bagr-${step}.jpg`, import.meta.url).href
    images.push(imageUrl)
}
</script>

<template>

<section id="galerie" class="py-24 lg:py-34">

<div class="p-5 flex">
    <Swiper
        :slides-per-view="1"
        :space-between="50"
        :modules="modules"
        navigation
        :pagination="{ clickable: true }"
        :autoplay="{ delay: 5000 }"
        class="mx-auto max-w-7xl max-h-[80vh] flex bg-slate-100 rounded-lg"
    >
        <SwiperSlide 
            v-for="(imageUrl, index) in images"
            class="mx-auto my-auto flex"
        >
            <img
                :src="imageUrl"
                :alt="`Slide ${index}`"
                class="mx-auto my-auto"
            />
        </SwiperSlide>
    </Swiper>
</div>

</section>

</template>
