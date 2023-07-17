<script setup>
import Nav from "./components/Nav.vue"
import Landing from "./components/Landing.vue"
import Pricing from "./components/Pricing.vue"
import Contact from "./components/Contact.vue"
import Gallery from "./components/Gallery.vue"
import Video from "./components/Video.vue"
import Footer from "./components/Footer.vue"
</script>

<template>

<Nav />
<div class="z-10 lg:text-lg">
    <Landing />
    <Pricing />
    <Contact />
    <Gallery />
    <Video />
</div>
<Footer />

</template>
