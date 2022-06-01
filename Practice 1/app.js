const app = Vue.createApp({
	data() {
		return {
			myName: 'Veniamin',
			myAge: 18,
			imageUrl: 'https://www.goha.ru/s/A:D5/eH/ZZq71EBvSZ.jpg'
		}
	},
	methods: {
		myAgeInFiveYears(myAge){
			return myAge + 5;
		},
		favouriteNumber(){
			return Math.random();
		}
	}
});

app.mount('#assignment');