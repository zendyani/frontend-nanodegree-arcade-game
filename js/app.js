// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    // initial location of Enemy
    this.x = 0;
    this.y = 50;

    // initial speed
    this.speed = 5;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x > 500) {
        // init x to start over
        this.x = 0;
    }

    this.x += this.speed * dt;
    
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {
    // this = Object.create(Enemy.prototype);
    this.sprite = 'images/char-boy.png';

    this.initX = 200;
    this.initY = 400;

    this.x = this.initX;
    this.y = this.initY;

    this.maxLeft = 20;
    this.maxRight = 380;
    this.maxTop = 0;
    this.maxDow = 400;

    this.step = 90;

}

Player.prototype.update = function() {
   
    if (this.x < this.maxLeft) {
        // 
        this.x = this.maxLeft;
    }

    if (this.y > this.maxDow) {
        // 
        this.y = this.maxDow;
    }

    if (this.y < this.maxTop) {
        // player win the game (did it to the river)
        this.x = this.initX;
        this.y = this.initY;    
    }

    if (this.x > this.maxRight) {
        // 
        this.x = this.maxRight;
    }        
}

Player.prototype.handleInput = function(key) {
    switch (key) {
        case 'left':
            this.x -= this.step; 
        break;
        case 'up':
            this.y -= this.step; 
        break;
        case 'right':
            this.x += this.step; 
        break;
        case 'down':
            this.y += this.step; 
        break;
    }
    this.update();
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = new Array;

var enemy1 = new Enemy;
enemy1.y = 50;
enemy1.speed = 50;

var enemy2 = new Enemy;
enemy2.y = 150;
enemy2.speed = 80;

var enemy3 = new Enemy;
enemy3.y = 250;
enemy3.speed = 70;

allEnemies.push(enemy1);
allEnemies.push(enemy2);
allEnemies.push(enemy3);

var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
