const app = Vue.createApp({
	data() {
		return {
			friends: [
				{id: 'manuel', name: 'Manuel Lorenz', phone: '0123456789'},
				{id: 'julie', name: 'Jolie Jones', phone: '9876543210'}
			]
		}
	}
});

app.component('friend-contact', {
	template: `
	<li>
    	<h2>{{friend.name}}</h2>
        <button @click="toggleDetails">{{detailsAreVisible ? 'Hide' : 'Show'}}</button>
        <ul v-if="detailsAreVisible">
        	<li><strong>Phone:</strong> {{friend.phone}}</li>
        	<li><strong>Email:</strong> {{friend.id}}@localhost.com</li>
        </ul>
    </li>
	`,
	data() {
		return {
			detailsAreVisible: false,
			friend: {id: 'manuel', name: 'Manuel Lorenz', phone: '0123456789'}
		};
	},
	methods: {
		toggleDetails() {
			this.detailsAreVisible = !this.detailsAreVisible;
		}
	}
});

app.mount('#app');