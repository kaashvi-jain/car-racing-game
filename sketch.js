var gameState = 0,playerCount;
var database;
var form,player,game;
function setup(){
    createCanvas(500,500);
    database = firebase.database()
   game = new Game();
   game.getState();
   game.start();

}

function draw(){
  

}