Vue.createApp({
	data() {
		return {
			sum: 0
		};
	},
	watch: {
		result(value) {
			const that = this;
			if (value > 37) {
				console.log('Too much!');
			} else {
				console.log('Not enough!');
				setTimeout(function() {
					that.sum = 0;
				}, 2000);
			}
		}
	},
	computed: {
		result() {
			return this.sum;
		}
	},
	methods: {
		add(number) {
			console.log('[eq');
			this.sum += number;
		}
	}
}).mount('#assignment');