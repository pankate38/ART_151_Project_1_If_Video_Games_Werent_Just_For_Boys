
var mapImage;
var mapX = 0;
var mapY = 0;
var mapSong;

var spriteImage;
var spriteX = mapX+1000;//900
var spriteY= mapY+800;//400

var midgarLink;
var midgarSong;

var chocoboLink;
var chocoboSong;

var goldLink;
var goldSong;

var costaLink;
var costaSong;

var iceLink;
var iceSong;

var wutaiLink;
var wutaiSong;

var clickSound;

var canvas;
var canvasX;
var canvasY;
var canvasHeight;
var canvasWidth;

var clickCount = 1;
var cursorImage;

var font;

function preload(){
  mapImage = loadImage('../media/images/ffvii_map_filter.jpg');
  mapSong = loadSound('../media/audio/25-Main Theme of Final Fantasy VII.mp3');
  mapSong.setVolume(0.03);

  spriteImage = createImg('../media/images/cloud_sprite.png'); 
 
  clickSound = loadSound('../media/audio/clicking.mp3');
  clickSound.setLoop(false);
  clickSound.setVolume(0.1);

  midgarSong = loadSound("../media/audio/05-Anxious Heart.mp3");
  midgarSong.setVolume(0.03);
  chocoboSong = loadSound("../media/audio/29-Farm Boy.mp3");
  chocoboSong.setVolume(0.03);
  goldSong = loadSound("../media/audio/43-Gold Saucer.mp3");
  goldSong.setVolume(0.03);
  costaSong = loadSound("../media/audio/40-Costa del Sol.mp3");
  costaSong.setVolume(0.03);
  iceSong = loadSound("../media/audio/66-Buried in the Snow.mp3");
  iceSong.setVolume(0.03);
  wutaiSong = loadSound("../media/audio/55-Wutai.mp3");
  wutaiSong.setVolume(0.03);

  font = loadFont('../media/font/Reactor7.ttf');
  
}
function setup() {
  midgarLink = createA('#midgarInfo', '_____________');
  midgarLink.position(-1, -1);
  chocoboLink = createA('#chocoboInfo', '__________');
  chocoboLink.position(-1, -1);
  goldLink = createA('#goldInfo', '____________________');
  goldLink.position(-1, -1);
  costaLink = createA('#costaInfo', '_____________');
  costaLink.position(-1, -1);
  iceLink = createA('#iceInfo', '____________');
  iceLink.position(-1, -1);
  wutaiLink = createA('#wutaiInfo', '___________');
  wutaiLink.position(-1, -1);

  windowWidth-=100;
  windowHeight-=150;
  canvasX = 0;
  canvasY = 0;
  canvasWidth = windowWidth;
  canvasHeight = windowHeight;
  canvas = createCanvas(windowWidth, windowHeight);
 // canvas.mouseClicked(playMapSong());
  canvas.parent('sketch-holder');
  mapSong.play();
  
 
}

function draw() {
  background(220);
  
  image(mapImage, mapX, mapY, windowWidth, windowHeight);
  push();
    textFont(font);
    textSize(30);
    textAlign(CENTER, TOP);
    text("PRESS W,A,S,or D TO NAVIGATE THE MAP. HOVER OVER A PLACE AND CLICK ON IT TO EXPLORE FURTHER. ", 0, 20, canvasWidth); 
  pop();
  
  //midgar
  push();
  
    noFill();
    noStroke();
    
    var rectX = canvasX+1080;
    var rectY = canvasY+370;
    var rectWidth = canvasWidth-1595;
    var rectHeight = canvasHeight-625;
    rect(rectX, rectY, rectWidth, rectHeight);
    
    if(onRectangle(rectX, rectY, rectWidth, rectHeight) == false){
      
      midgarLink.show();
      midgarLink.position(rectX+50, rectY+180);
      if(mouseX > canvasX && mouseX < canvasX+canvasWidth && mouseY > canvasY && mouseY < canvasY+canvasHeight){
        if(mouseIsPressed){
          clickSound.play();
          midgarSong.setLoop(false);
          midgarSong.play();
          mapSong.stop();
        }
      }
    }

    else{
      midgarSong.stop();
      midgarLink.hide();      
    }
    

  pop();

  //CHOCOBO
  push();
    noFill();
    noStroke();
   var rectX = canvasX+1450;
   var rectY = canvasY+420;
    var rectWidth = canvasWidth-1595;
    var rectHeight = canvasHeight-620;
    rect(rectX, rectY, rectWidth, rectHeight);

    if(onRectangle(rectX, rectY, rectWidth, rectHeight) == false){
      chocoboLink.show();
      chocoboLink.position(rectX+50, rectY+210);
      if(mouseX > canvasX && mouseX < canvasX+canvasWidth && mouseY > canvasY && mouseY < canvasY+canvasHeight){
        if(mouseIsPressed){
          clickSound.play();
          chocoboSong.play();
          mapSong.stop();
        }
      }
    }

    else{
      chocoboSong.stop();
      chocoboLink.hide();
    }

  pop();
  
  //gold saucer
  push();
    noFill();
   
    noStroke();

var rectX = canvasX+750;
var rectY = canvasY+620;
 var rectWidth = canvasWidth-1595;
 var rectHeight = canvasHeight-620;
    rect(rectX, rectY, rectWidth, rectHeight);
    if(onRectangle(rectX, rectY, rectWidth, rectHeight) == false){
      goldLink.show();
      goldLink.position(rectX-5, rectY+50);
      if(mouseX > canvasX && mouseX < canvasX+canvasWidth && mouseY > canvasY && mouseY < canvasY+canvasHeight){
        if(mouseIsPressed){
          clickSound.play();
          goldSong.play();
          mapSong.stop();
        }
      }
    }
    else{
      goldSong.stop();
      goldLink.hide();
    }
  pop();

  //costa del sol
  push();
    noFill();
  noStroke();
 
  var rectX = canvasX+750;
  var rectY = canvasY+420;
   var rectWidth = canvasWidth-1595;
   var rectHeight = canvasHeight-620;
    rect(rectX, rectY, rectWidth, rectHeight);
    if(onRectangle(rectX, rectY, rectWidth, rectHeight) == false){
      costaLink.show();
      costaLink.position(rectX+120, rectY+158);
      if(mouseX > canvasX && mouseX < canvasX+canvasWidth && mouseY > canvasY && mouseY < canvasY+canvasHeight){
        if(mouseIsPressed){
          clickSound.play();
          costaSong.play();
          mapSong.stop();
        }
      }
    }
    else{
      costaSong.stop();
      costaLink.hide();
    }
  pop();

  //icicle village
  push();
    noFill();
    noStroke();
   
    var rectX = canvasX+550;
    var rectY = canvasY+220;
     var rectWidth = canvasWidth-1595;
     var rectHeight = canvasHeight-620;
    rect(rectX, rectY, rectWidth, rectHeight);
    if(onRectangle(rectX, rectY, rectWidth, rectHeight) == false){
      iceLink.show();
      iceLink.position(rectX+115, rectY+180);
      if(mouseX > canvasX && mouseX < canvasX+canvasWidth && mouseY > canvasY && mouseY < canvasY+canvasHeight){
        if(mouseIsPressed){
          clickSound.play();
          iceSong.play();
          mapSong.stop();
        }
      }
    }
    else{
      iceSong.stop();
      iceLink.hide();
    }
  pop();

  //wutai
  push();
    noFill();
    noStroke();
   
    var rectX = canvasX+150;
    var rectY = canvasY+300;
     var rectWidth = canvasWidth-1595;
     var rectHeight = canvasHeight-620;
    rect(rectX, rectY, rectWidth, rectHeight);
    if(onRectangle(rectX, rectY, rectWidth, rectHeight) == false){
      wutaiLink.show();
      wutaiLink.position(rectX+80, rectY+138);
      if(mouseX > canvasX && mouseX < canvasX+canvasWidth && mouseY > canvasY && mouseY < canvasY+canvasHeight){
        if(mouseIsPressed){
          clickSound.play();
          wutaiSong.play();
          mapSong.stop();
        }
      }
    }
    else{
      wutaiSong.stop();
      wutaiLink.hide();
    }
  pop();
  
  //sprite movement
  push(); 
    spriteImage.position(spriteX+25, spriteY+25);
    spriteImage.size(30,45);
    if(mouseX > canvasX && mouseX < canvasX+canvasWidth && mouseY > canvasY && mouseY < canvasY+canvasHeight){
      if(keyIsDown(87)){
        spriteY-=7;
      }
      if(keyIsDown(83)){
        spriteY+=7;
      }
      if(keyIsDown(68)){
        spriteX+=7;
      }
      if(keyIsDown(65)){
        spriteX-=7;
      }
    }
  pop();
  
 
  

  
}

function windowResized() {
  windowWidth-=15;
  windowHeight-=15;
  canvas = resizeCanvas(windowWidth, windowHeight);
}
  

function onRectangle(rectX, rectY, rectWidth, rectHeight){
  if(spriteX > rectX && spriteX < rectX+rectWidth && spriteY > rectY && spriteY < rectY+rectHeight){
    return false;
  }
  else{
   
    return true;
  }
}

