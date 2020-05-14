let song = new Audio(
  "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Kevin_MacLeod/Oddities/Kevin_MacLeod_-_Winner_Winner.mp3"
);

class Game {
  constructor() {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    let gameSize = { x: canvas.width, y: canvas.height };
    this.score = 0;
    this.enemy1 = new Enemy();
    this.enemy2 = new Enemy();
    this.enemy3 = new Enemy();
    this.enemy4 = new Enemy();
    this.target = new Target();
    this.player = new Player(gameSize);
    let animate = () => {
      if (colliding(this.player, this.target)) {
        console.log("target hit");
        this.score += 10;
        let pointsTally = document.querySelector("#points-tally");
        pointsTally.textContent = this.score;
        this.target = new Target();
      }
      if (
        colliding(this.player, this.enemy1) ||
        colliding(this.player, this.enemy2) ||
        colliding(this.player, this.enemy3) ||
        colliding(this.player, this.enemy4)
      ) {
        console.log("collision");
        window.alert("Game over, you lose!");
        window.location.reload();
        return;
      }
      context.fillStyle = "yellow";
      context.fillRect(0, 0, gameSize.x, gameSize.y);
      context.fillStyle = "black";
      this.enemy1.moveY();
      this.enemy1.draw(context);
      this.enemy2.moveX();
      this.enemy2.draw(context);
      this.enemy3.moveZ();
      this.enemy3.draw(context);
      this.enemy4.moveW();
      this.enemy4.draw(context);
      context.fillStyle = "red";
      this.target.draw(context);
      this.drawPlayer(context, gameSize);
      this.player.movePlayer();
      requestAnimationFrame(animate);
    };
    animate();
  }

  drawScore() {
    context.font = "16px Arial";
    context.fillText("Score: " + score);
  }

  drawPlayer(context, gameSize) {
    context.fillStyle = "blue";
    let startingXPosition = this.player.x;
    let startingYPosition = this.player.y;
    let playerWidth = this.player.size.x;
    let playerHeight = this.player.size.y;
    context.fillRect(
      startingXPosition,
      startingYPosition,
      playerWidth,
      playerHeight
    );
  }
}
class Player {
  constructor(gameSize) {
    this.size = { x: 30, y: 30 };
    this.x = 320;
    this.y = 320;
  }

  movePlayer() {
    if (Keyboarder.isDown(37)) this.x -= 4;
    if (Keyboarder.isDown(39)) this.x += 4;
    if (Keyboarder.isDown(38)) this.y -= 4;
    if (Keyboarder.isDown(40)) this.y += 4;
    if (this.x > 320) this.x = 320;
    if (this.x < 0) this.x = 0;
    if (this.y < 0) this.y = 0;
    if (this.y > 320) this.y = 320;
  }
}
class Enemy {
  constructor() {
    this.size = { x: 20, y: 20 };
    this.x = Math.floor(Math.random() * 300);
    this.y = Math.floor(Math.random() * 300);
  }
  draw(context) {
    context.fillRect(this.x, this.y, 25, 25);
    context.fillStyle = "black";
  }

  moveW() {
    this.y -= 1;
    if (this.y < 0) {
      this.y = 500;
      this.x = Math.floor(Math.random() * 300);
    }
  }

  moveY() {
    this.y += 1;
    if (this.y > 350) {
      this.y = 0;
      this.x = Math.floor(Math.random() * 300);
    }
  }
  moveX() {
    this.x += 1;
    if (this.x > 350) {
      this.x = 0;
      this.y = Math.floor(Math.random() * 300);
    }
  }
  moveZ() {
    this.x -= 1;
    if (this.x < 0) {
      this.x = 350;
      this.y = Math.floor(Math.random() * 300);
    }
  }
}

class Target {
  constructor(gameSize) {
    this.x = Math.floor(Math.random() * 300);
    this.y = Math.floor(Math.random() * 300);
    this.size = { x: 20, y: 20 };
  }
  draw(context) {
    context.fillRect(this.x, this.y, 20, 20);
  }
}

function colliding(b1, b2) {
  return !(
    b1 === b2 ||
    b1.x + b1.size.x < b2.x ||
    b1.y + b1.size.y < b2.y ||
    b1.x > b2.x + b2.size.x ||
    b1.y > b2.y + b2.size.y
  );
}

function setPlayPause() {
  playpause = !playpause;
  if (playpause) {
    document.getElementById("playpause").value = "Pause";
    alert("Game has been paused");
    return;
  }
}

new Game();
window.addEventListener("keydown", (event) => {
  song.play();
});
setPlayPause();
