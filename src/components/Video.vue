<script setup>
const { id } = defineProps({
    id: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="relative flex w-full">
        <iframe
            class="w-full aspect-[9/16]"
            :src="`https://www.youtube.com/embed/${id}`"
            title="YouTube video player" frameborder="0"
            allow="web-share"
            allowfullscreen></iframe>
    </div>
</template>
