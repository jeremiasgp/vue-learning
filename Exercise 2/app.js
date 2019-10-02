new Vue({
	el: '#exercise',
	data: {
			value: ''
	},
	methods: {
		myAlert: function() {
			alert('My Alert');
		},
		updateValue: function(event) {
			this.value = event.target.value;
		}
	}
});