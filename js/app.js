// Enemies our player must avoid
var Enemy = function () {
    this.x = 0;// Variables applied to each of our instances go here,
    this.y = 0;// we've provided one for you to get started
    this.move = move;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    this.x += this.move * dt;
    // which will ensure the game runs at the same speed for
    // all computers.
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
var enemyA = new Enemy(-101, 145);
var enemyB = new Enemy(-101, 62);
var enemyC = new Enemy(-101, 230);

// Place all enemy objects in an array called allEnemies
var allEnemies = [enemyA, enemyB, enemyC];
 // allEnemies.push(enemyA, enemyB, enemyC);
// Place the player object in a variable called player
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
