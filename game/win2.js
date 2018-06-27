var winState2 = {
	create:function(){
		game.world.setBounds(0, 0, 800, 600);
		game.add.tileSprite(0, 0, 800, 600, 'win2');
		var winLabel = game.add.text(80,80,'Player 2'+/* this.playerName1+*/ ' Won!',{font:'50px Arial', fill:'#FFFFFF'});
		var startLabel = game.add.text(80, 400,'Press "Enter" to restart the game', {font:'25px Arial', fill:'#FFFFFF'});

		var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
		enterKey.onDown.addOnce(this.restart,this);

	},

	restart:function(){
		game.state.start('boot');

	}


}
