<script setup>
import Nav from "./blocks/Nav.vue"
import Landing from "./blocks/Landing.vue"
import Pricing from "./blocks/Pricing.vue"
import Contact from "./blocks/Contact.vue"
import Gallery from "./blocks/Gallery.vue"
import Training from "./blocks/Training.vue"
import Footer from "./blocks/Footer.vue"
</script>

<template>

<Nav />
<div class="z-10 lg:text-lg">
    <Landing />
    <Pricing />
    <Training />
    <Contact />
    <Gallery />
</div>
<Footer />

</template>
