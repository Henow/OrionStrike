var winState2 = {
	create:function(){
		var winLabel = game.add.text(80,80,'Player 2'+/* this.playerName1+*/ 'WON!',{font:'50px Arial', fill:'#FFF'});
		var startLabel = game.add.text(80, 400,'Press "w" to restart the game', {font:'25px Arial', fill:'#FFF'});

		var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
		wkey.onDown.addOnce(this.restart,this);

	},

	restart:function(){
		game.state.start('menu');

	}


}
