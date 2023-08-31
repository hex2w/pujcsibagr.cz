<script setup>
import { ref } from "vue"
import Video from "./Video.vue"


const videos = [
    {
        name: "Bobcat E19 před zahájením činnosti",
        id: "kRHzfO3ltWw",
    },
    {
        name: "Bobcat E19 startování stroje",
        id: "_gTIJDxE1F0",
    },
    {
        name: "Bobcat E19 ovládací prvky 1",
        id: "J8Mij0WtDWg",
    },
    {
        name: "Bobcat E19 ovládací prvky 2",
        id: "nXLFAK0fMJw",
    },
    {
        name: "Bobcat E19 práce se strojem 1",
        id: "Ihjs3Eb3SUo",
    },
    {
        name: "Bobcat E19 práce se strojem 2 joystick",
        id: "liNt3dqgjFI",
    },
    {
        name: "Bobcat E19 práce se strojem praktická ukázka",
        id: "7lW0yts0SeU",
    },
    {
        name: "Bobcat E19 výměna lžíce 1",
        id: "A6ito5AQuT8",
    },
    {
        name: "Bobcat E19 výměna lžíce 2",
        id: "t4aTXVvjgfM",
    },
    {
        name: "Bobcat E19 výměna lžíce 3",
        id: "ao_GpbLPLAg",
    },
    {
        name: "Bobcat E19 podvozek roztahování",
        id: "yC5VUE7drDE",
    },
    {
        name: "Dumper popis",
        id: "Wdwum71yXdo",
    },
    {
        name: "Dumper ovládací prvky",
        id: "YNRrxV-v74Y",
    },
    {
        name: "Dumper nakládka štěrku",
        id: "9ulBu1Pm0Vs",
    },
    {
        name: "Dumper nakládka zeminy",
        id: "0VsRTzCCeRo",
    },
]

const currentId = ref(videos[0].id)
</script>

<template>
    <section id="instruktaz" class="flex flex-col flex-wrap min-h-screen lg:flex-row-reverse gap-8 lg:gap-16 bg-gray-800 text-white py-16 px-0 lg:px-12">

        <h2 class="text-3xl lg:text-4xl text-center w-full font-semibold tracking-wide">Instruktáž</h2>

        <div class="flex flex-col lg:flex-row gap-6 lg:mx-auto">
            <div class="w-full lg:w-1/2">
                <ul class="text-center lg:text-left flex flex-col gap-2">
                    <li v-for="{ name, id } in videos" :key="id">
                        <button @click="currentId = id"
                            :class="[
                                currentId == id ? 'bg-cyan-500 text-white' : 'bg-white text-gray-800 hover:bg-gray-100',
                                'px-4 py-2 rounded-md transition-colors duration-300'
                            ]"
                        >{{ name }}</button>
                    </li>
                </ul>
            </div>
            <div class="w-full lg:w-1/2 flex">
                <Video :id="currentId" class="lg:rounded-2xl overflow-hidden" />
            </div>
        </div>

    </section>
</template>
