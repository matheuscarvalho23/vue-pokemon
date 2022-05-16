<template>
    <div
        class="bg-white w-40 h-48 rounded-lg flex flex-col items-center mb-8 cursor-pointer"
        v-if="pokemonData"
        @click="redirectToInfo(pokemonData.id)"
    >
        <img v-if="pokemonData.sprites" :src="pokemonData.sprites.front_default" alt="">

        <h2 class="font-bold mt-2.5 text-sm">{{ name }}</h2>

        <h3 class="mt-3 font-medium text-xs">Cod: {{ pokemonData.id }}</h3>

        <span v-if="pokemonData.sprites" class="mt-3 text-gray-400 text-sm">{{ pokemonData.abilities.at(-1).ability.name }}</span>
    </div>
</template>

<script>
import { getPokemon } from '@/services/api';

export default {
    name: 'cards',
    data() {
        return {
            pokemonData: null,
        }
    },
    props: {
        url: {
            type: String
        },
        name: {
            type: String
        },
        testData: {
            type: Object
        }
    },
    mounted() {
        this.getPokemon();
    },
    methods: {
        async getPokemon() {
            await getPokemon(this.url)
                .then(response => {
                    const { data } = response
                    this.pokemonData = data;
                })
        },
        redirectToInfo(id) {
            this.$router.push('pokemon/' + id);
        },
    },
}
</script>
