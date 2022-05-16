<template>
    <div>
        <global-header />

        <div class="bg-white rounded-md w-full max-w-lg mt-16 pb-4 m-auto">
            <img v-if="pokemon.sprites" :src="pokemon.sprites.front_default" class="m-auto pt-4">

            <p class="font-bold text-md text-center mt-8">{{ pokemon.name }}</p>

            <p v-if="pokemon.sprites" class="mt-3 text-gray-400 text-xs text-center">{{ pokemon.abilities.at(-1).ability.name }}</p>
        </div>

        <div class="bg-white rounded-md w-full max-w-lg mt-6 pb-4 pt-2 m-auto">
            <h2 class="font-bold text-center border-b-2 border-gray-100">Habilidades</h2>

            <div
                v-for="(item, index) in pokemon.abilities" :key="index"
                class="flex flex-col"
            >
                <span class="border-b-2 border-gray-100 p-3 text-sm text-gray-600">
                    {{ item.ability.name }}
                </span>
            </div>
        </div>

        <div class="w-full font-bold text-blue-600 text-center mt-8">
            <router-link to="/">
                Voltar
            </router-link>
        </div>

    </div>

</template>

<script>
import { searchPokemon } from '@/services/api';

export default {
    data() {
        return {
            pokemon: {}
        }
    },
    mounted() {
        const { id } = this.$route.params;
        this.getPokemon(id)
    },
    methods: {
        async getPokemon(id) {
            await searchPokemon(id)
                .then(response => {
                    this.pokemon = response.data;
                });
        }
    }
}
</script>

<style>
body {
    background: #E5E5E5;
}
</style>