new Vue({
	el: '#app',
	data: {
		playerLife: 0,
		monsterLife: 0,
		strength: 4
	},
	methods: {
		startGame: function() {
			this.playerLife = 100,
			this.monsterLife = 100
		},
		randomD6: function(who) {
			const rand = Math.ceil(Math.random() * 6);
			console.log(who + ': ' + rand);
			return rand;
		},
		attack: function() {
			// Player first
			this.monsterLife = this.monsterLife - ( this.randomD6('player') + this.strength);
			this.playerLife = this.playerLife - ( this.randomD6('monster') + this.strength);
		},
		specialAttack: function() {
			this.monsterLife = this.monsterLife - ( this.randomD6('player') + this.randomD6('player') + this.strength);
			this.playerLife = this.playerLife - ( this.randomD6('monster') + this.randomD6('monster'));
		},
		heal: function() {
			this.playerLife = this.playerLife + this.randomD6('player') + this.randomD6('player');
			this.playerLife = this.playerLife - ( this.randomD6('monster') + this.randomD6('monster'));
		},
		giveUp: function() {
			var c = confirm('Eres tan cobarde como para rendirte?????');
			if (c) { this.startGame() }
		}
	},
	computed: {
		monsterLifeBar: function() {
			return { width: this.monsterLife + '%'};
		},
		playerLifeBar: function() {
			return { width: this.playerLife + '%'};
		}
	},
	watch: {
		playerLife: function() {
			if (this.playerLife <= 0) {
				alert('Has perdido!!!');
				this.startGame();
			}
		},
		monsterLife: function() {
			if (this.monsterLife <= 0) {
				alert('Has derrotado al monstruo!!!');
				this.startGame();
			}
		}
	}
});