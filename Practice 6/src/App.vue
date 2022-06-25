<template>
	<active-user
		:name="user.name"
		:age="user.age"
	></active-user>
	<user-data
		@submit-user="submitUser"
	></user-data>
</template>

<script>
	export default {
		data() {
			return {
				user: {
					name: 'Veniamin',
					age: 18
				}
			};
		},
		methods: {
			submitUser(name, age) {
				this.user = {
					name: name,
					age: +age
				}
			}
		}
	}
</script>

<style scoped>

</style>