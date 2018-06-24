var menuState = {
    

    
	create:function(){
        game.add.tileSprite(0, 0, 800, 600, 'abc');
		var nameLabel = game.add.text(80,80,'Orion Strike',{font: '50px Arial', fill:'#FFFFFF'});
		var startLabel = game.add.text(80,game.world.height-80,'Press the "W" key to start', {font: '25px Arial', fill:'#FFFFFF'});

		var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);

        this.startMusic = this.add.audio("startSound", 1, true, true);

		wkey.onDown.addOnce(this.start,this);

	},

	start:function(){
	    this.startSound.play("",0,1,false);
		game.state.start('level1');
	}
}
