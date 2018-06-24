
var sprite;
var sprite2;
var player;
var player2;
var cursors;
var platforms;
var spieler;
var scoreText;
var scoreText2;
var waffe;
var weapon;
var schuss;
var firebutton;
var power;
var fireRate = 1000;
var nextFire = 0;
var projectile;
var gameround = 0;
var health1 = 4;
var health2 = 4;
var playerName1;
var playerName2;
var hitCounterP1 = 0;
var hitCounterP2 = 0;
var winner;


var playState2 = {



	create:function(){

		//hintergrund für das Spiel
		game.stage.backgroundColor = '#0072bc';
	//	game.add.tileSprite(0, 0, 1800, 1200, 'bg1');
	//	game.add.tileSprite(0, 0, 1000, 600, 'background');
		game.world.setBounds(0, 0, 1800, 1200);

		//Gruppe erstellen von Platformen
		platforms = game.add.group();

		//aktivieren die Physik der Gruppe platforms
		platforms.enableBody = true;

		//erstellen einen Boden
		var ground = platforms.create(-20, game.world.height - 200, 'ground');
		

		//den Boden Skallieren
		ground.scale.setTo(10, 2);

		//damit man nicht durch den Boden durch kann
		ground.body.immovable = true;


		this.keyboard = game.input.keyboard;
		this.player = game.add.sprite(16,16,'schuss');
		game.physics.arcade.enable(this.player);

		this.win = game.add.sprite(256,256,'schuss');
		game.physics.arcade.enable(this.win);

		//Der Spieler und seine Position
		player = game.add.sprite(32, game.world.height - 550, 'player1Model');
		//var hover = player.animations.add('hover');
		player.animations.add('hover', [0,1,2,3,4,5], 7, true);
		player.animations.add('jump', [2], 1, true);
        player.animations.add('explosion' [6,7,8,9,10,11,12], 10, false, true);
		//hover.frameRate = 5;

		//physic für den spieler einstellen.
		game.physics.enable(player);

		//allgemeine Physik
		player.body.bounce.y = 0.2;
		player.body.gravity.y = 300;
		player.body.collideWorldBounds = true;
		
		//Sprite für die Healthbar
		hb1 = game.make.sprite(7, -15, 'healthBar');
        hb1.animations.add('health1', [3], 1, true);
        hb1.animations.add('health2', [2], 1, true);
        hb1.animations.add('health3', [1], 1, true);
        hb1.animations.add('health4', [0], 1, true);
		hb1.anchor.setTo(0, 0);
		hb2 = game.make.sprite(7, -15, 'healthBar');
        hb2.animations.add('health1', [3], 1, true);
        hb2.animations.add('health2', [2], 1, true);
        hb2.animations.add('health3', [1], 1, true);
        hb2.animations.add('health4', [0], 1, true);
		hb2.anchor.setTo(0, 0);

		//Sprite für die Waffe
		sprite = game.make.sprite(25, 10, 'player1Weapon');
		
		sprite2 = game.make.sprite(22, 13, 'player2Weapon');
		
		 //den anchor in die mitte setzen
		//sprite.pivot.x = sprite.width * .25;
		//sprite.pivot.y = sprite.height * .25;
		sprite.anchor.setTo(0.5, 0.1);

		//child hinzufügen für den player, damit die waffe mit dem player verbunden ist
		player.addChild(sprite);
		
		//healthBar hinzufügen
		player.addChild(hb1);

		
		var playerName1 = prompt("Name für Spieler 1:", "");
		
		//Der Spieler und seine Position
		player2 = game.add.sprite(500, game.world.height - 450, 'player2Model');
        player2.animations.add('explosion' [2,3,4,5,6,7,8], 10, false, true);

		//physic für den spieler einstellen.
		game.physics.enable(player2);

		//allgemeine Physik
		player2.body.bounce.y = 0.2;
		player2.body.gravity.y = 300;
		player2.body.collideWorldBounds = true;

		//den anchor in die mitte setzen
		sprite.anchor.setTo(0.5, 0.5);
		
		var playerName2 = prompt("Name für Spieler 2:", "");

		schuss = game.add.group();
		schuss.enableBody = true;
		schuss.physicsBodyType = Phaser.Physics.ARCADE;
		schuss.createMultiple(50, 'player1Bullet');
		schuss.setAll('checkWorldBounds', true);
		//schuss.setAll('outOfBoundsKill', true);
		game.physics.enable(schuss);


		
		schuss2 = game.add.group();
		schuss2.enableBody = true;
		schuss2.physicsBodyType = Phaser.Physics.ARCADE;
		schuss2.createMultiple(50, 'player2Bullet');
		schuss2.setAll('checkWorldBounds', true);
		schuss2.setAll('outOfBoundsKill', true);
		game.physics.enable(schuss2);


		//einfach nur einen text 
		scoreText = game.add.text(100, 16, 'Player 1: '+playerName1, /*+' : ', /* +health1,*/ { fontSize: '32px', fill: '#000' });
		scoreText.fixedToCamera = true;
		scoreText2 = game.add.text(500, 16, 'Player 2: '+playerName2, /*+' : ', /* +health2,*/ { fontSize: '32px', fill: '#000' });
		scoreText2.fixedToCamera = true;

		//Pfeile hinzufügen um später sich bewegen zu können
		cursors = game.input.keyboard.createCursorKeys();
		
		schuss.setAll('body.gravity.y', 150);
		
		schuss2.setAll('body.gravity.y', 150);
		
		player2.addChild(sprite2);
		player2.addChild(hb2);
		
		sprite2.anchor.setTo(0.5, 0.5);
		hb2.anchor.setTo(0.5, 0.5);

		game.camera.follow(player);
	},
    

    
	update:function(){
		this.player.collideWorldBounds = true;


		//verhindern dass player und platforms collide
		var hitPlatform = game.physics.arcade.collide(player, platforms);
            
		var hitPlatform = game.physics.arcade.collide(player2, platforms);
		 
		game.physics.arcade.collide(player2, schuss, this.collisionHandler, null, this);
		 
        game.physics.arcade.collide(player, schuss2, this.collisionHandler2, null, this);
        
        game.physics.arcade.collide(schuss, platforms, this.bulletHandler, null, this);
        
        game.physics.arcade.collide(schuss2, platforms, this.bulletHandler, null, this);
        
        switch (hitCounterP1) {
            case 0:
                hb1.animations.play('health4');
                break;
            case 1:
                hb1.animations.play('health3');
                break;
            case 2:
                hb1.animations.play('health2');
                break;
            case 3:
                hb1.animations.play('health1');
                break;
            case 4:
                //Spiel beenden und Leben wieder auffüllen
                player.animations.play('explosion');
                
                this.Finish();
                hitCounterP1 = 0;
                hitCounterP2 = 0;
                
                break;
        }
        
        switch (hitCounterP2) {
            case 0:
                hb2.animations.play('health4');
                break;
            case 1:
                hb2.animations.play('health3');
                break;
            case 2:
                hb2.animations.play('health2');
                break;
            case 3:
                hb2.animations.play('health1');
                break;
            case 4:
                player2.animations.play('explosion');
                
                this.Finish();
                hitCounterP1 = 0;
                hitCounterP2 = 0;
                
                break;
        }
        if (hitCounterP1 == 0) {
            hb1.animations.play('health4');
        }
		 
		 if (gameround == 0) {

		//	this.camera.follow(player);

			 
			 //Die Rotation der Waffe einstellen
			 sprite.rotation = game.physics.arcade.angleToPointer(player);

			 //die bewegungen des spielers.
			 player.body.velocity.x = 0;
			 
			 if (cursors.left.isDown) {
				 // Move to the left
				 player.body.velocity.x = -100;
				 this.camera.follow(player);
				 // player.animations.play('left');


			 } else if (cursors.right.isDown) {
				 // Move to the right
				 player.body.velocity.x = 100;
				 this.camera.follow(player);

				 // player.animations.play('right');
				 
			 } else {
				 // Stand still
				 player.animations.play('hover');

				 // player.frame = 4;
			 }

			 // Allow the player to jump if they are touching the ground.
			 if (cursors.up.isDown && player.body.touching.down && hitPlatform) {
				 player.body.velocity.y = -200;
				 player.animations.play('jump');
				 this.camera.follow(player);
				 
			 //         weapon.angle -= 10; 
			 }
			 

			 
			 if (game.input.activePointer.isDown) {
				 this.fire();
		 }


			 
		 } else if (gameround == 1) {

		//	this.camera.follow(player2);
			 
			 sprite2.rotation = game.physics.arcade.angleToPointer(player2);
			 
			 if (cursors.left.isDown) {
				 

				 //die bewegungen des spielers.
				 player2.body.velocity.x = 0;
				 
				 // Move to the left
				 player2.body.velocity.x = -100;
				 this.camera.follow(player2);
				 // player.animations.play('left');


			 } else if (cursors.right.isDown) {
				 // Move to the right
				 player2.body.velocity.x = 100;
				 this.camera.follow(player2);

				 // player.animations.play('right');

			 } else {
				 
				 player2.body.velocity.x = 0;
				 // Stand still
				 // player.animations.stop();

				 // player.frame = 4;
			 }

			 // Allow the player to jump if they are touching the ground.
			 if (cursors.up.isDown && player.body.touching.down && hitPlatform) {
				 player2.body.velocity.y = -200;
				 this.camera.follow(player2);

				 //         weapon.angle -= 10;
			 }
			 
			 if (game.input.activePointer.isDown) {
				 this.fire();
			 }
			 
		 }


	},

	fire:function() {
		if (game.time.now > nextFire && schuss.countDead() > 0) {

			if (gameround == 0) {
				
			nextFire = game.time.now + fireRate;

			var schiessen = schuss.getFirstDead();

			schiessen.reset(player.x - 8, player.y - 8);

			game.physics.arcade.moveToPointer(schiessen, 800);
			
			player.body.velocity.x = 0;
			
			this.camera.follow(schiessen);

			if (schiessen.y < 200) {

				this.removeSchuss(schuss);
			}

			gameround = 1;


			
				
			} else if (gameround == 1) {
				
				nextFire = game.time.now + fireRate;

				var schiessen2 = schuss2.getFirstDead();

				schiessen2.reset(player2.x - 8, player2.y - 8);

				game.physics.arcade.moveToPointer(schiessen2, 800);
				
				
				player2.body.velocity.x = 0;

				this.camera.follow(schiessen2);
				
				gameround = 0;
			}
			this.update();
		}
	},

		render:function() {
			game.debug.spriteCoords(player, 32, 500);
		},

	collisionHandler:function (player, schuss) {
		//game.stage.backgroundColor = '#992d2d';
			schuss.kill();
			health2--;
		//	scoreText2.text = 'HP '+playerName2 +' : ' +health2;
			hitCounterP2++;
			this.camera.follow(player2);
	},

	collisionHandler2:function (player, schuss) {
		//game.stage.backgroundColor = '#0072bc';
		this.removeSchuss(schuss);
		health1--;
	//	scoreText.text = 'HP '+playerName1 +' : ' +health1;
		hitCounterP1++;
		this.camera.follow(player);
	},

	bulletHandler:function (schuss, platforms) {
		schuss.kill();
		if (gameround == 0) {
			this.camera.follow(player);
		} else this.camera.follow(player2);
    }, 

	Finish:function(){
		if (gameround == 0) {
			game.state.start('win');
		} else {
		game.state.start('win2');
		}
	},

	removeSchuss:function(schuss) {
		schuss.kill();
		this.camera.follow(player);
	},

	removeSchuss2:function(schuss) {
		schuss.kill();
		this.camera.follow()
	}



}