<template>
    <div>
        <input
            class="w-full h-11 rounded-3xl border-2 border-gray-50 pl-9"
            type="text"
            v-model="term"
            placeholder="Pesquise por nome ou código"
            @change="search"
        >
    </div>
</template>

<script>
export default {
    name: 'input-search',
    data() {
        return {
            term: ''
        }
    },
    methods: {
        search() {
            this.$emit('search', this.term);
        }
    }
}
</script>