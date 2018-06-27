var button;

var menuState = {


    

    
	create:function(){

		var button;


		game.add.tileSprite(0, 0, 800, 600, 'mainmenu');
		game.world.setBounds(0, 0, 800, 600);
	//	var nameLabel = game.add.text(80,80,'Orion Strike',{font: '50px Arial', fill:'#FFFFFF'});
	//	var startLabel = game.add.text(230,game.world.height-60,'Press the "W" key to start', {font: '35px arial', fill:'#000000'});
	//	startLabel.setShadow(1, 1, 'rgba(0, 0, 0, 0.8)', 1);


		var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);

        this.startMusic = this.add.audio('startSound', 1, false, true);

		wkey.onDown.addOnce(this.start,this);

		button1 = game.add.button(game.world.centerX - 80, 530, 'button1', this.actionOnClick, this, 2, 1, 0);



	},
	

	start:function(){
	  this.startMusic.play();
		game.state.start('level1');
	},

	start2:function(){
		this.startMusic.play();
		  game.state.start('level2');
	  },

	  start3:function(){
		  game.state.start('menu2');
	  },


	actionOnClick:function() {
		button1.kill();
		button2 = game.add.button(game.world.centerX - 320, 526, 'button2', this.actionOnClick2, this, 2, 1, 0);
		button3 = game.add.button(game.world.centerX - 100, 530, 'button3', this.actionOnClick3, this, 2, 1, 0);
		button4 = game.add.button(game.world.centerX + 120, 525, 'button4', this. actionOnClick4, this, 2, 1, 0);
		
	},

	actionOnClick2:function() {
		this.start();
	},

	actionOnClick3:function() {
		this.start2();
	},

	actionOnClick4:function() {
	//	game.add.tileSprite(79, 60, 641, 480, 'info');
		button5 = game.add.button(79, 60, 'info', this. actionOnClick5, this, 2, 1, 0);
	},

	actionOnClick5:function() {
			button5.kill();
		}


}
