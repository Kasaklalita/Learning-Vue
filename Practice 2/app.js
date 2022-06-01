Vue.createApp({
	data() {
		return {
			paragraphText: '',
			confirmedParagraphText: ''
		};
	},
	methods: {
		buttonAlert() {
			alert('Button Click!');
		},
		onUserInput(event) {
			this.paragraphText = event.target.value;
		},
		confirmParagraphText() {
			this.confirmedParagraphText = this.paragraphText;
		}
	}
}).mount('#assignment');