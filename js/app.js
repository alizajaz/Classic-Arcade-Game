// Enemies our player must avoid
var Enemy = function (x, y, move) {
    this.x = x; // Variables applied to each of our instances go here,
    this.y = y; // we've provided one for you to get started
    this.resetenemy = -101;
    this.canvaswidth = 505;
    this.move = Math.floor(Math.random() * (600 - 100)) + 100;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter

    if (this.x < this.canvaswidth) {
      this.x += this.move * dt;

    //new position = old position + speed * elapsed time
    // which will ensure the game runs at the same speed for
    // all computers.

}
 else {
  this.x = this.resetenemy;

}
//};


    // Check for collision between player and enemies
    //https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
    if (player.x < this.x + 80 &&
        player.x + 37 > this.x &&
        player.y < this.y + 50 &&
        60 + player.y > this.y) {
        player.x = 202;
        player.y = 406;
    }
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function () {
  this.x = 202;
  this.y = 406;
  this.sprite = 'images/char-pink-girl.png';
};


Player.prototype.update = function (dt) {
};


Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function (playerarrowkeys) {


  if (playerarrowkeys ==='left' && this.x>0){
          this.x -= 101;
      } else if (playerarrowkeys === 'right' && this.x< 359) {
          this.x += 101;
        //  console.log(playerarrowkeys);
      } else if (playerarrowkeys === 'up' && this.y > 0) {
          this.y -= 83;
      } else if (playerarrowkeys=== 'down' && this.y < 405) {
          this.y += 83;
        }

      }

//Now instantiate your objects.the process of creating objects from a class is called instantiation
//It means allocating memory for a new  object and returning a reference to that memory.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player();
var enemyA = new Enemy(10, 45, 125);
var enemyB = new Enemy(37, 220, 225);
var enemyC = new Enemy(99, 130, 335);
var allEnemies = [enemyA, enemyB, enemyC];

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
