var allEnemies =[];

var Enemy = function(x, y, move) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
    this.x = x;// setting initial properties of object
    this.y = y;
    this.move = move;
     // this.totalstep = 505;// 505 is canvas width
     // this.eachstep = 101;// 505/5,505 divided by column  here 505 is canvas.width and 5 is column number
     // this.reset = -101;
     this.minyaxis =0;
     this.maxyaxis=60;
     this.yaxis=[0,10,20,30,40,50,60];
     this.enemylocation=[30,40,50];
     this.minxaxis=0;
     this.maxxaxis=50;
     this.xaxis=[0,10,20,30,40,50];
     this.resetxaxis=-10;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
     this.sprite = 'images/enemy-bug.png';
    };
//  var allenemy = new Enemy();
//
// allEnemies.push(allenemy);



// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
// You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.x < this.maxxaxis){//since bug is moving to x-axis direction, the maxxaxis is 50
        this.x += move * dt;
    }
    else{
this.x= this.resetxaxis;
    }
};


// var allEnemies =[];
// // Enemies our player must avoid
// var Enemy = function Enemy (x, y, move) {
//   // Variables applied to each of our instances go here,
//   // we've provided one for you to get started
//     this.x = x;// setting initial properties of object
//     this.y = y;
//     this.move = move;
//      this.totalstep = 505;// 505 is canvas width
//      this.eachstep = 101;// 505/5,505 divided by column  here 505 is canvas.width and 5 is column number
//      this.reset = -101;
//     // The image/sprite for our enemies, this uses
//     // a helper we've provided to easily load images
//     // this.sprite = 'images/enemy-bug.png';
//     };
//  var allenemy = new Enemy();

// allEnemies.push (allenemy);



// // Update the enemy's position, required method for game
// // Parameter: dt, a time delta between ticks
// Enemy.prototype.update = function(dt) {
// // You should multiply any movement by the dt parameter
//     // which will ensure the game runs at the same speed for
//     // all computers.


//     if(this.x < this.totalstep){
//         this.x += move * dt;


//     }
//     else{
//   x= this.reset;
//     }

// };

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
// class player{
//   construction (x, y, move) {
//     this.x = x;
//     this.y = y;

//   }
// }

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



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
window.logGame = function(){
  console.log(enemy)
}



// var minrowVal = 0;
// var maxrowVal = 50;
// var mincolVal = 0;
// var maxcolVal = 40;
// var minsteps = 1;
// var maxsteps = 6;
//
// var row = [0,10,20,30,40,50];//assigning value of array in x-axis
// var column = [0,10,20,30,40]; // assigning value in y axis
//  var steps = [1,2,3,4,5,6];//total player step
//
//  var bugstep = [3,4,5];//if collision reset
// var winnerstep = [6];//if reach you are winner
//  var initialplayerstep=[1];//player start from step 1 and move forward

//  canvas.width = 505;
//  canvas.height = 606;














