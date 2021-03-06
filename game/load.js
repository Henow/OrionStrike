var loadState = {
	preload:function(){
		var loadingLabel = game.add.text(80,150,'Loading....', {font:'30px Courier', fill: '#FFF'});

        game.load.image('ground', 'assets/ground.png');
        game.load.image('schuss', 'assets/Schuss.png');
        game.load.spritesheet('player1Model', 'assets/player1Model.png', 50, 50, 13);
        game.load.spritesheet('player2Model', 'assets/player2Model.png', 50, 50, 8);
        game.load.spritesheet('player1Weapon', 'assets/player1Weapon.png', 32, 13, 1);
        game.load.spritesheet('player2Weapon', 'assets/player2Weapon.png', 32, 16, 1);
        game.load.spritesheet('healthBar', 'assets/Healthbar.png', 38, 14, 5);
        game.load.spritesheet('player1Bullet', 'assets/player1Bullet.png', 11, 11, 1);
        game.load.spritesheet('player2Bullet', 'assets/player2Bullet.png', 11, 11, 1);
        game.load.spritesheet('waende2', 'assets/waende2.png', 11, 11);
        game.load.image('bg1', 'assets/City.png');
        game.load.image('bg2', 'assets/Cave.png');
        game.load.image('mainmenu', 'assets/mainmenu.png');
        game.load.image('button1', 'assets/button1.png');
        game.load.image('button2', 'assets/button2.png');
        game.load.image('button3', 'assets/button3.png');
        game.load.image('button4', 'assets/button4.png');
        game.load.image('button5', 'assets/button5.png');
        game.load.image('wand', 'assets/wand.png');
        game.load.image('wand2', 'assets/wand222.png');
        game.load.image('block', 'assets/block.png');
        game.load.image('win1', 'assets/win.png');
        game.load.image('win2', 'assets/win2.png');
        game.load.image('info', 'assets/info.png');
        game.load.image('tutorial', 'assets/tutorial.png');

        //Sounds
        game.load.audio('bulletDie', 'assets/sounds/BulletDie.wav');
        game.load.audio('explosionPlayer1', 'assets/sounds/ExplosionPlayer1.wav');
        game.load.audio('explosionPlayer2', 'assets/sounds/ExplosionPlayer2.wav');
        game.load.audio('shotPlayer1', 'assets/sounds/Laser_ShootPlayer1.wav');
        game.load.audio('shotPlayer2', 'assets/sounds/Laser_shootPlayer2.wav');
        game.load.audio('startSound', 'assets/sounds/StartSound.wav');
        game.load.audio('backgroundMusic', 'assets/sounds/BackgroundMusic.wav');
	},

	create:function(){
		game.state.start('menu');
	}

};
