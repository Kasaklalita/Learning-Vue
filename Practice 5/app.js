const app = Vue.createApp({
	data() {
		return {
			userInput: '',
			tasks: [],
			isVisible: true
		};
	},
	methods: {
		addTask() {
			this.tasks.push(this.userInput);
		},
		changeVisibility() {
			this.isVisible = !this.isVisible;
		}
	},
	computed: {
		buttonCaption() {
			return this.isVisible ? 'Hide list' : 'Show list';
		}
	}
});

app.mount('#assignment');