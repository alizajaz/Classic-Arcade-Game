# Classic Arcade Game Clone Project

## Table of Contents

- [Instructions](#instructions)
- [Contributing](#contributing)

## Instructions

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

Your **README.md** file should be updated with instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

# Getting Started!

  - If you like to start from scratch, you can build your own project or you can simply download the starter code through following link:
  - https://github.com/udacity/frontend-nanodegree-arcade-game
  
  # Link for my project
  https://alizajaz.github.io/Classic-Arcade-Game/


# Prerequisites
  - ATOM https://atom.io/
  - VS code https://code.visualstudio.com/
  - Install Git to clone with repo

Additional Resources Sites:

> 1.https://www.w3schools.com/
> 2.https://developer.mozilla.org/en-US/
> 3.https://stackoverflow.com/
> 4.https://www.google.com/




### How the Game Work
You will have a player and Enemy. The goal of the player is to reach the water, without colliding into any one of the enemies.

 The following are some goals that you have to achieve in order to make this project interactive:

| Strategies | Description. |
| ------ | ------ |
| Player(Move)| The player should be able move left,right, up ,down |
| Enemy speed| For bug speed, you can use 3 argument when you create a new Enemy or set move to a random value inside the constructor.| 
| collide | Once a the player collides with an enemy, the game is reset and the player moves back to the starting square|
|Winner | Once the player reaches the water (i.e., the top of the game board), the game is won |






### Development

Object oriented programming is new learning experience. I got little confident after finishing memorygame. But asusual when you get stuck , you will have second thought. But i was determined to finish this project.

The following are some steps that i apply for this project.  Hope it might help you.

```sh
1. "Where should i start!!!" Its okay to have that thought.
2.My initial thought was, i want to see player or enemies pop up. Also,I can see the enemy variable. Should I create enemy and player at
once? 
3. Start focusing one of the game entities at the time. afterthat ,try commenting out any code in engine.js that refers to player at first. you will be able to see screen. (now i am in process of creating Enemy class and I realized they are just moving in one direction.)
4. ERROR :Enemies not define. This actually hunt me at the beginning. All you have to do was make empty array allEnemies= []; You want to uncomment //updateEntities(dt);
5. My initial thought was setting the value inside array of player and enemies which looks like this  this.xaxis=[0,10,20,30,40,50];
6. Then,i set the  value of x and y for the position of player and change my  this.sprite = 'images/char-pink-girl.png'; with update 
and render. I see  error (Uncaught TypeError: Failed to execute 'drawImage' on 'CanvasRenderingContext2D': The provided value is not of type '(CSSImageValue or HTMLImageElement or SVGImageElement or HTMLVideoElement or HTMLCanvasElement or ImageBitmap or OffscreenCanvas)' I keep getting this error and unable to see my player). To fix this, Resources.load([ 'images/char-pink-girl.png']); I tried to put different image , therefore I have to modify in Resources.load.
7.  I got stuck with why row*83? what does this mean? This means  un-faded, un-transperarent part is 83 px tall.
8. Now, i have create enemy class. you can see update the enemy position,collision and rendering and pushing object inside all enemies.
9. In my head i had so many question, is there any specific formula to increase the speed of bug ? Or do i need to put value in dt?
for bug speed you can use 3 argument when you create a new Enemy or set move to a random value inside the constructor. please make sure to comment updateEntities.
10.for collision , i take help from this site. 
https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
```

For Outcome

```sh
If any confusion, "Console.log" helps you understand overall picture of your code.

```




### Contribute

Want to contribute? Great!

 Contributions are welcome!

Step 1.
```sh
 Fork the repository
```

Step 2.
```sh
Make your change
```

Step 3.
```sh
Commit your change to your forked repository.
```
Step 4.
```sh
Provide a detailed commit description.
```
Step 5.
```sh
Create a pull request


