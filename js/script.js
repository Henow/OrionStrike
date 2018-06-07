
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {

    game.load.image('sky', 'assets/hintergrund.png');
    game.load.image('figur', 'assets/Figurtest.png');
    game.load.image('weapon', 'assets/weapon.png');
    game.load.image('ground', 'assets/ground.png');
    game.load.image('schuss', 'assets/Schuss.png');
    game.load.spritesheet('dude', 'assets/dude.png', 32, 48);

}

var player;
var platforms;
var cursors;
var score = 0;
var scoreText;

function create() {
    //um die Physicsystem von Phaser ARCADE zu benutzen.
    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    //hintergrund für das Spiel
    game.add.sprite(0, 0, 'sky');
    
    //Gruppe erstellen von plattformen
    platforms = game.add.group();
    
    //wir aktivieren hier die Physik für die Gruppe von platformen
    platforms.enableBody = true;
    
    //erstellen einen Boden
    var ground = platforms.create(-20, game.world.height - 64, 'ground');
    
    //Den boden Skallieren
    ground.scale.setTo(5, 2);
    
    //Damit man nicht durch den boden kann
    ground.body.immovable = true;
    
    //der Spieler und die Settings
    player = game.add.sprite(32, game.world.height -150, 'figur');
    
   // waffe = game.add.sprite(player.x + 30, game.world.height player.y + 15, 'assets/weapon.png');
    
    //die Physik für den Spieler aktivieren
    game.physics.arcade.enable(player);
    
        //  Player physics properties. Give the little guy a slight bounce.
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;
    
    cursors = game.input.keyboard.createCursorKeys();
    
    //der Schuss, der vom Objekt kommt.
    schuss = add.sprite(0, 0, 'schuss');
    schuss.exist = false;
    physics.arcade.enable(schuss);
    
    //Schrift, wer dran ist 
    scoreText = game.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });
    
}

function update() {
    
    var hitPlatform = game.physics.arcade.collide(player, platforms);
    
     //  Reset the players velocity (movement)
    player.body.velocity.x = 0;
    
        if (cursors.left.isDown) {
        //  Move to the left
        player.body.velocity.x = -150;
    //    player.animations.play('left');
            
    }
    else if (cursors.right.isDown) {
        //  Move to the right
        player.body.velocity.x = 150;

    //    player.animations.play('right');
    }
    else {
        //  Stand still
    //    player.animations.stop();

    //    player.frame = 4;
    }
    
    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown && player.body.touching.down && hitPlatform) {
        player.body.velocity.y = -200;
    }


    

    

}

