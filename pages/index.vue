<template>
    <!-- Import from global component plugin -->
    <div>
        <global-header />

        <div class="max-w-4xl m-auto mt-5">
            <input-search @search="search" />

            <h3 class="text-sm font-medium mt-11">Pokémons</h3>

            <div class="cards mt-9">
                <cards v-for="(item, index) in 5" :key="index" />
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'home',
    methods: {
        search(term) {
            console.log(term);
        }
    }
}
</script>

<style>
body {
    background: #E5E5E5;
}

.cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 2fr));
}
</style>
