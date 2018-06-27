var bootState = {
	
	goFullScreen:function() {
		game.scale.pageAlignHorizontally = true;
		game.scale.pageAlignVertically = true;
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.scale.setScreenSize(true);
	},

	create:function(){
		this.goFullScreen;

		game.physics.startSystem(Phaser.Physics.ARCADE);

		game.state.start('load');
	}
    
}
