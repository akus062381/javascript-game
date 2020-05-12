
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let player = {
    x: 210,
    y: 250,
    draw: function() { context.fillRect(this.x, this.y, 50, 50); }
}

let target = {
    x: 190 + Math.floor(Math.random() * 181),
    y: 60 + Math.floor(Math.random() * 180),
    draw: function() { 
        context.fillRect(this.x, this.y, 50, 50); 
    } 
}

setInterval(loop, 33);
get();

function loop() {
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    if(Keyboarder.isDown(37))
        player.x-=20;
    if(Keyboarder.isDown(39))
        player.x+=20;
    if(Keyboarder.isDown(38))
        player.y-=20;
    if(Keyboarder.isDown(40))
        player.y+=20;
    if(player.x > 370)
        player.x = 370;
    if(player.x < 190)
        player.x = 190;
    if(player.y < 60)
        player.y = 60
    if(player.y > 240)
        player.y = 240
    context.fillStyle = "yellow"
    context.fillRect(180, 50, 250, 250);
    context.fillRect(260, 90, 40, 40)
    context.fillStyle = "red"
    target.draw();
    context.fillStyle = "black"
    player.draw();
    
}

function get() {
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    if(player.x > 370)
        player.x = 370;
    if(player.x < 190)
        player.x = 190;
    if(player.y < 60)
        player.y = 60
    if(player.y > 240)
        player.y = 240
}