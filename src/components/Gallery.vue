<script setup>
import { ref } from "vue"
import {
    TransitionRoot, TransitionChild,
    Dialog, DialogPanel, DialogTitle,
} from "@headlessui/vue"
import imgAssetTransform from "../util/img-asset-transform.ts"


const images = imgAssetTransform(
    import.meta.glob(
        "/src/assets/gallery/*",
        { as: "url" }
    )
)

const loading = ref(true)
const empty = ref(false)
const dialogOpen = ref(false)
const dialogImage = ref({
    src: null,
    alt: null,
})

const closeDialog = () => {
    dialogOpen.value = false
    dialogImage.value = null
}
const openDialog = (image) => {
    dialogOpen.value = true
    dialogImage.value = image
}


if (images.length === 0) {
    loading.value = false
    empty.value = true
} else Promise.all(images.map(image => image.src)).then(values => {
    console.log(values)
    images.forEach((image, index) => {
        image.src = values[index]
    })
    loading.value = false
})  // load all of the assets
</script>

<template>
<section id="galerie" class="flex">
    <TransitionRoot as="template" :show="dialogOpen">
        <Dialog as="div" class="relative z10" @close="dialogOpen = false">
            <TransitionChild as="template" enter="ease-out duration-300"
                enter-from="opacity-0" enter-to="opacity-100"
                leave="ease-in duration-200" leave-from="opacity-100"
                leave-to="opacity-0">
                <div
                    class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
                </div>
            </TransitionChild>

            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <TransitionChild as="template"
                        enter="ease-out duration-300"
                        enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter-to="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leave-from="opacity-100 translate-y-0 sm:scale-100"
                        leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div class="mt3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <DialogTitle as="h3" class="inline-flex gap2 justify-center w-full text-base text-gray-900 font-semibold leading-6">
                                        <p class="my-auto">{{ dialogImage.alt ||
                                            "Image" }}</p>
                                    </DialogTitle>
                                </div>
                            </div>
                            <img :src="dialogImage.src"
                                :alt="dialogImage.alt || 'Image'" class="w-full h-full object-contain max-h-2xl" />
                            <div class="bg-gray-50 px-4 sm:px-6 py-3"
                                sm="flex flex-row-reverse">
                                <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                    @click="dialogOpen = false"
                                    ref="cancelButtonRef">Zavřít</button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>

    <div v-if="empty" class="my-20 w-full flex justify-center">
        <p class="text-2xl">Galerie je prázdná</p>
    </div>
    <div v-else class="mx-auto">
        <div v-if="loading" class="my-20 w-full flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><rect width="9" height="9" x="1.5" y="1.5" fill="#5e5c64" rx="1"><animate id="svgSpinnersBlocksScale0" attributeName="x" begin="0;svgSpinnersBlocksScale1.end+0.15s" dur="0.6s" keyTimes="0;.2;1" values="1.5;.5;1.5"/><animate attributeName="y" begin="0;svgSpinnersBlocksScale1.end+0.15s" dur="0.6s" keyTimes="0;.2;1" values="1.5;.5;1.5"/><animate attributeName="width" begin="0;svgSpinnersBlocksScale1.end+0.15s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"/><animate attributeName="height" begin="0;svgSpinnersBlocksScale1.end+0.15s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"/></rect><rect width="9" height="9" x="13.5" y="1.5" fill="#5e5c64" rx="1"><animate attributeName="x" begin="svgSpinnersBlocksScale0.begin+0.15s" dur="0.6s" keyTimes="0;.2;1" values="13.5;12.5;13.5"/><animate attributeName="y" begin="svgSpinnersBlocksScale0.begin+0.15s" dur="0.6s" keyTimes="0;.2;1" values="1.5;.5;1.5"/><animate attributeName="width" begin="svgSpinnersBlocksScale0.begin+0.15s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"/><animate attributeName="height" begin="svgSpinnersBlocksScale0.begin+0.15s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"/></rect><rect width="9" height="9" x="13.5" y="13.5" fill="#5e5c64" rx="1"><animate attributeName="x" begin="svgSpinnersBlocksScale0.begin+0.3s" dur="0.6s" keyTimes="0;.2;1" values="13.5;12.5;13.5"/><animate attributeName="y" begin="svgSpinnersBlocksScale0.begin+0.3s" dur="0.6s" keyTimes="0;.2;1" values="13.5;12.5;13.5"/><animate attributeName="width" begin="svgSpinnersBlocksScale0.begin+0.3s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"/><animate attributeName="height" begin="svgSpinnersBlocksScale0.begin+0.3s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"/></rect><rect width="9" height="9" x="1.5" y="13.5" fill="#5e5c64" rx="1"><animate id="svgSpinnersBlocksScale1" attributeName="x" begin="svgSpinnersBlocksScale0.begin+0.45s" dur="0.6s" keyTimes="0;.2;1" values="1.5;.5;1.5"/><animate attributeName="y" begin="svgSpinnersBlocksScale0.begin+0.45s" dur="0.6s" keyTimes="0;.2;1" values="13.5;12.5;13.5"/><animate attributeName="width" begin="svgSpinnersBlocksScale0.begin+0.45s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"/><animate attributeName="height" begin="svgSpinnersBlocksScale0.begin+0.45s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"/></rect></svg>
        </div>

        <div v-else>
            <div class="container">
                <ul class="image-gallery">
                    <li v-for="image in images" :key="image.id"
                        class="hover:brightness-75 transition-all ease-in-out duration-300"
                        @click="openDialog(image)">
                        <img :src="image.src" :alt="image.alt || 'Image'" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
</template>

<style scoped>
* {
    box-sizing: border-box;
}

.container {
    padding: 40px 5%;
}

.heading-text {
    margin-bottom: 2rem;
    font-size: 2rem;
}

.heading-text span {
    font-weight: 100;
}

ul {
    list-style: none;
}

/* Responsive image gallery rules begin*/

.image-gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.image-gallery>li {
    flex: 1 1 auto;
    /* or flex: auto; */
    height: 300px;
    cursor: pointer;
    position: relative;
}

.image-gallery::after {
    content: "";
    flex-grow: 999;
}

.image-gallery li img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    vertical-align: middle;
    border-radius: 5px;
}

.overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(57, 57, 57, 0.502);
    top: 0;
    left: 0;
    transform: scale(0);
    transition: all 0.2s 0.1s ease-in-out;
    color: #fff;
    border-radius: 5px;
    /* center overlay content */
    display: flex;
    align-items: center;
    justify-content: center;
}

/* hover */
.image-gallery li:hover .overlay {
    transform: scale(1);
}</style>