var loadState = {
	preload:function(){
		var loadingLabel = game.add.text(80,150,'Loading....', {font:'30px Courier', fill: '#FFF'});


        game.load.image('figur', 'assets/figurtest.png');
        game.load.image('ground', 'assets/ground.png');
        game.load.image('waffe', 'assets/weapon.png');
        game.load.image('schuss', 'assets/Schuss.png');
        game.load.image('background', 'assets/hintergrund.png');
        game.load.spritesheet('player1Model', 'assets/player1Model.png', 50, 50, 13);
        game.load.spritesheet('player2Model', 'assets/player2Model.png', 50, 50, 8);
        game.load.spritesheet('player1Weapon', 'assets/player1Weapon.png', 32, 13, 1);
        game.load.spritesheet('player2Weapon', 'assets/player2Weapon.png', 32, 16, 1);
        game.load.spritesheet('healthBar', 'assets/Healthbar.png', 38, 14, 5);
        game.load.spritesheet('player1Bullet', 'assets/player1Bullet.png', 11, 11, 1);
        game.load.spritesheet('player2Bullet', 'assets/player2Bullet.png', 11, 11, 1);
        game.load.image('bg1', 'assets/bg1.png');
        game.load.image('abc', 'assets/abc.png');
	},

	create:function(){
		game.state.start('menu');
	}

};
