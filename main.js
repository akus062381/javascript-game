
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");



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

class enemy {
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

let e1 = new enemy() 
let e2 = new enemy()
setInterval (loop, 33);


function collisionEnemyOne(e1, player) {
    if((e1.x + e1.width) >= player.x &&
        e1.x <= (player.x + player.width) &&
        (e1.y + e1.height) >= player.y &&
        e1.y <= (player.y + player.height))  
        console.log("you lose the game")
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
    const context = canvas.getContext("2d");
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
    e2.moveX();
    e2.draw();
    
}
    collisionEnemyOne ();
    collisionEnemyTwo ();
    collisionTarget ();



