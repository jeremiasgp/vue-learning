new Vue({
	el: '#app',
	data: {
		title: 'New Application'
	},
	methods: {
		changeTitle: function(event) {
			this.title = event.target.value;
		}
	}
});