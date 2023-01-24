<script setup>
import bagr3Url from "../assets/bagr-3.jpg"
import bobcatLogoUrl from "../assets/bobcat-logo.jpg"
</script>

<template>

<section id="domu" class="min-h-screen pt-20 lg:pt-0">

<Transition
    enter-from-class="translate-x-[150%] opacity-0"
    leave-to-class="translate-x-[150%] opacity-0"
    enter-active-class="transition duration-500"
    leave-active-class="transition duration-500"
    appear
>

<div class="flex flex-col lg:flex-row lg:gap-6 min-h-screen">
    <div class="lg:w-1/2 lg:my-auto">
        <h2 class="text-3xl md:text-4xl font-semibold p-5 lg:pl-12">Bolí tě ruce a záda?</h2>
        <div class="inline-flex gap-4">
            <h2 class="text-3xl md:text-4xl p-5 lg:pl-12 text-right lg:text-left text-cyan-700 font-semibold">BAGRUJ S KOČKOU!</h2>
            <img :src="bobcatLogoUrl" alt="Bobcat Logo" class="my-auto h-20" />
        </div>
        <p class="text-lg md:text-xl p-5 lg:pl-12">
            BOBCAT&nbsp;E19 – (2t). Ve své kategorii nejsilnější minirypadlo s verzí Long Arm. Stroj je ideální na veškeré zemní a výkopové práce.
        </p>
        <a target="_blank" href="/specifikace.pdf" class="flex text-cyan-500 underline hover:no-underline px-5 lg:pl-12">
            <span class="transition-all hover:scale-110">Specifikace stroje</span>
        </a>
    </div>
    <img class="lg:w-1/2 md:my-10 md:mx-12 lg:my-auto lg:rounded-lg object-cover object-left" :src="bagr3Url" alt="Bagr">
</div>

</Transition>

<div>
    <svg class="bg-gray-800 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240"><path d="M0,192L120,181.3C240,171,480,149,720,154.7C960,160,1200,192,1320,208L1440,224L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>

    <div class="bg-gray-800 text-white pt-24 lg:pt-34">

    <div class="mx-auto max-w-7xl px-6 lg:px-8">  
        <h2 class="text-lg font-semibold leading-8 text-cyan-400 sm:text-center">BOBCAT&nbsp;E19</h2>

        <div class="mt-20 max-w-lg sm:mx-auto md:max-w-none">
            <div class="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
                <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                    <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500 text-white sm:shrink-0">
                        <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                        </svg>
                    </div>
                    <p class="mt-2 sm:min-w-0 sm:flex-1 text-lg leading-8">
                        Stroj je citlivý a nabízí tudíž možnost jemného lazení detailů.
                    </p>
                </div>
                <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                    <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500 text-white sm:shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                        </svg>
                    </div>
                    <p class="my-auto sm:min-w-0 sm:flex-1 text-lg leading-8">
                        Díky roztahovatelnému pásovému podvozku je bagr dostatečně stabilní. Při zasunutí pásů však dokáže projet prostorem o šířce 1m.
                    </p>
                </div>
                <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                    <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500 text-white sm:shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
                        </svg>
                    </div>
                    <p class="my-auto sm:min-w-0 sm:flex-1 text-lg leading-8">
                        Příslušenství je volitelné – okopová lžíce 25cm, 50cm se zuby a hydraulicky naklápěná svahová lžíce 100cm.
                    </p>
                </div>
                <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                    <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500 text-white sm:shrink-0">
                        <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C1.34315 6 0 7.34315 0 9V16C0 17.6569 1.34315 19 3 19H21C22.6569 19 24 17.6569 24 16V9C24 7.34315 22.6569 6 21 6H3ZM9 8H7V13C7 13.5523 6.55228 14 6 14C5.44772 14 5 13.5523 5 13V8H3C2.44772 8 2 8.44772 2 9V16C2 16.5523 2.44772 17 3 17H21C21.5523 17 22 16.5523 22 16V9C22 8.44772 21.5523 8 21 8H19V11C19 11.5523 18.5523 12 18 12C17.4477 12 17 11.5523 17 11V8H15V13C15 13.5523 14.5523 14 14 14C13.4477 14 13 13.5523 13 13V8H11V11C11 11.5523 10.5523 12 10 12C9.44771 12 9 11.5523 9 11V8Z" fill="currentColor" /></svg>
                    </div>
                    <p class="my-auto sm:min-w-0 sm:flex-1 text-lg leading-8">
                        Long Arm - prodloužené rameno hydraulické ruky pro delší dosah až 2565cm.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="sm:text-center pt-20 px-5">
        <p class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Nízká spotřeba a spolehlivost zánovního stroje s nadstandardní výbavou.</p>
    </div>

    <div class="mx-auto max-w-7xl px-6 lg:px-8">  
        <div class="mt-20 max-w-lg sm:mx-auto md:max-w-none">
            <div class="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
                <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                    <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500 text-white sm:shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 fill-white" viewBox="0 0 512 512"><title>Speedometer</title><path d="M326.1 231.9l-47.5 75.5a31 31 0 01-7 7 30.11 30.11 0 01-35-49l75.5-47.5a10.23 10.23 0 0111.7 0 10.06 10.06 0 012.3 14z"/><path d="M256 64C132.3 64 32 164.2 32 287.9a223.18 223.18 0 0056.3 148.5c1.1 1.2 2.1 2.4 3.2 3.5a25.19 25.19 0 0037.1-.1 173.13 173.13 0 01254.8 0 25.19 25.19 0 0037.1.1l3.2-3.5A223.18 223.18 0 00480 287.9C480 164.2 379.7 64 256 64z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 128v32M416 288h-32M128 288H96M165.49 197.49l-22.63-22.63M346.51 197.49l22.63-22.63"/></svg>
                    </div>
                    <p class="mt-2 sm:min-w-0 sm:flex-1 text-lg leading-8">
                        Další výhodou je volitelná rychlost pojezdu želva, zajíc.
                    </p>
                </div>
                <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                    <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500 text-white sm:shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                        </svg>
                    </div>
                    <p class="my-auto sm:min-w-0 sm:flex-1 text-lg leading-8">
                        Dobré osvětlení umožňuje provádět činnosti i za snížených světelných podmínek.
                    </p>
                </div>
                <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                    <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500 text-white sm:shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 fill-white" viewBox="0 0 512 512"><title>Thermometer</title><path d="M307.72 302.27a8 8 0 01-3.72-6.75V80a48 48 0 00-48-48h0a48 48 0 00-48 48v215.52a8 8 0 01-3.71 6.74 97.51 97.51 0 00-44.19 86.07A96 96 0 00352 384a97.49 97.49 0 00-44.28-81.73zM256 112v272" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/><circle cx="256" cy="384" r="48"/></svg>
                    </div>
                    <p class="my-auto sm:min-w-0 sm:flex-1 text-lg leading-8">
                        Pracovní podmínky zpříjemní možnost topení v kabině.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="sm:text-center pt-10 px-5">
        <p class="mx-auto mt-6 max-w-2xl text-xl leading-8 text-slate-200">Nezkušené uchazeče zaškolíme.</p>
    </div>

    </div>

    <svg class="bg-gray-800 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240"><path d="M0,192L120,181.3C240,171,480,149,720,154.7C960,160,1200,192,1320,208L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
</div>

</section>

</template>
