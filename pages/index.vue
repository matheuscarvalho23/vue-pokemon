<template>
    <!-- Import from global component plugin -->
    <div>
        <global-header />

        <div class="max-w-4xl m-auto mt-5">
            <input-search @search="search" />

            <h3 class="text-sm font-medium mt-11">Pokémons</h3>

            <div class="cards mt-9">
                <cards
                    v-for="(item, index) in pokemonsList"
                    :key="index"
                    :url="item.url"
                    :name="item.name"
                />
            </div>
        </div>

    </div>
</template>

<script>
import { getPokemons, getPokemon } from '@/services/api';

export default {
    name: 'home',
    data() {
        return {
            pokemonsList: [],
            pokemonData: null,
            render: true,
            nextPage: '',
            infinityLoading: false,
        }
    },
    methods: {
        async getPokemons() {
            await getPokemons(20)
                .then(response => {
                    const { results } = response.data;

                    this.nextPage = response.data.next;

                    this.pokemonsList = results;
                })
        },
        getNextUser() {
            window.onscroll = () => {
                let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
                if (bottomOfWindow) {
                    getPokemon(this.nextPage)
                        .then(response => {
                            const { results } = response.data;

                            this.nextPage = response.data.next;

                            this.pokemonsList.push(...results);
                        })
                }
            }
        },
    },
    beforeMount() {
        this.getPokemons();
    },
    mounted() {
        this.getNextUser();
    },
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
