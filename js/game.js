class Game {
    constructor(){}
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
   async start(){
      if(gameState === 0){
        player = new Player();
        var playercountref = await database.ref('playerCount').once("value");
        if(playercountref.exists()){
          playerCount = playercountref.val();
          player.getCount();
        }
      
        form = new Form()
        form.display();
       
      }
      car1 = createSprite(100,200);
      car2 = createSprite(300,200);
      car3 = createSprite(500,200);
      car4 = createSprite(700,200);
      cars = [car1,car2,car3,car4];

    }
    play(){
      form.hide();
      textSize(30);
      text("gamestarted",120,100);
      Player.getplayerinfo();
      if(allplayer !== undefined){
        var index = 0;
        var x = 100;
        var y ;
        for (var p in allplayer){
          x += 200;
          index += 1;
          y = displayHeight - allplayer[p].distance;
          cars[index - 1 ].x = x;
          cars[index - 1].y = y;
          if(index == player.index){
            cars[index - 1 ].shapeColor= "green";
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index - 1].y;

          }
         else{
          cars[index - 1 ].shapeColor= "red";
         } 
        
        }
      }
      if(keyIsDown(UP_ARROW) && player.index != null){
        player.distance += 20;
        player.update();
      }
      drawSprites();
    }
  }