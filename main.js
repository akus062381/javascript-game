
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// class Game {

let player = {
    x: 210 + Math.floor(Math.random() * 160),
    y: 250,
    draw: function() { context.fillRect(this.x, this.y, 40, 40); }
}

let target = {
    x: 190 + Math.floor(Math.random() * 181),
    y: 60 + Math.floor(Math.random() * 100),
    draw: function() { 
        context.fillRect(this.x, this.y, 20, 20); 
    } 
}

class Enemy {
    constructor() {
        this.x = 190 + Math.floor(Math.random() * 181),
        this.y = 60 + Math.floor(Math.random() * 60),
        this.width = 25,
        this.height = 25
        }
        draw() { 
            context.fillRect(this.x, this.y, 25, 25); 
         } 
        moveY() {
            this.y+=1.5
            if(this.y > 270) {
                this.y = 50
                this.x = 190 + Math.floor(Math.random() * 181)
            }
            
        }
        moveX() {
            this.x+=1.5
            if(this.x > 400){
                this.x = 200
                this.y = 100 + Math.floor(Math.random() * 100)
            }    }
    }

let e1 = new Enemy() 
let e2 = new Enemy()
setInterval (loop, 33);

// **colliding()** returns true if two passed bodies are colliding.
// The approach is to test for five situations.  If any are true,
// the bodies are definitely not colliding.  If none of them
// are true, the bodies are colliding.
// 1. b1 is the same body as b2.
// 2. Right of `b1` is to the left of the left of `b2`.
// 3. Bottom of `b1` is above the top of `b2`.
// 4. Left of `b1` is to the right of the right of `b2`.
// 5. Top of `b1` is below the bottom of `b2`.
function colliding (b1, b2) {
    return !(
      b1 === b2 ||
          b1.center.x + b1.size.x / 2 < b2.center.x - b2.size.x / 2 ||
          b1.center.y + b1.size.y / 2 < b2.center.y - b2.size.y / 2 ||
          b1.center.x - b1.size.x / 2 > b2.center.x + b2.size.x / 2 ||
          b1.center.y - b1.size.y / 2 > b2.center.y + b2.size.y / 2
    )
  }


function collisionEnemyOne(e1, player) {
    if ( 
        // e1.x + e1.width / 2 < player.x - player.width / 2 ||
        e1.y + e1.height > player.y + player.height) {
        // e1.x - e1.width / 2 > player.x + player.width / 2 ||
        // e1.y - e1.height / 2 > player.y + player.height / 2)) {
            console.log("you lose the game")
        }
    }

function collisionEnemyTwo(e2, player) {
    if((e2.x + e2.width) >= player.x &&
        e2.x <= (player.x + player.width) &&
        (e2.y + e2.height) >= player.y &&
        e2.y <= (player.y + player.height)) 
            console.log("you lose the game")
    }

function collisionTarget(target, player) {  
    if((target.x + target.width) >= player.x &&
        target.x <= (player.x + player.width) &&
        (target.y + target.height) >= player.y &&
        target.y <= (player.y + player.height)) 
            console.log("you win the game")
}

function loop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    if(Keyboarder.isDown(37))
        player.x-=10;
    if(Keyboarder.isDown(39))
        player.x+=10;
    if(Keyboarder.isDown(38))
        player.y-=10;
    if(Keyboarder.isDown(40))
        player.y+=10;
    if(player.x > 380)
        player.x = 380;
    if(player.x < 190)
        player.x = 190;
    if(player.y < 60)
        player.y = 60
    if(player.y > 250)
        player.y = 250
    context.fillStyle = "yellow"
    context.fillRect(180, 50, 250, 250);
    context.fillRect(260, 90, 15, 15)
    context.fillStyle = "red"
    target.draw();
    context.fillStyle = "black"
    player.draw();
    context.fillStyle = "blue"
    e1.moveY();
    e1.draw();
    collisionEnemyOne (e1, player);
    // e2.moveX();
    // e2.draw();
    
}
    
    // collisionEnemyTwo (e2, player);
    collisionTarget (target, player);



