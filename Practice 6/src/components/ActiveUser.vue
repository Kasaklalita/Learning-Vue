<template>
	<h2>Name: {{name}}</h2>
	<h3>Age: {{age}}</h3>
</template>

<script>
	export default {
		props: {
			name: {
				type: String,
				required: true
			},
			age: {
				type: Number,
				required: true
			}
		}
	}
</script>

<style scoped>

</style>