<template>
	<button @click="addOne">Add 2</button>
</template>

<script>
	export default {
		methods: {
			addOne() {
				this.$store.commit('increase', {value: 2});
			}
		}
	}
</script>

<style scoped>

</style>