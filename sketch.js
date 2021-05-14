// Alias for Matter.js
const { Engine, World, Bodies, Body, Constraint } = Matter;
let engine, world;

// Image and Sprite Variables.
let thunder, thunder1, thunder2, thunder3, thunder4;
let bat, batAnimation;
let boy, boyAnimation, boyImage, batManImage;
let umbrella;
let drops = [];

// Loading Image Assets.
function preload(params) {
  thunder1 = loadImage("app/assets/thunderbolt/1.png");
  thunder2 = loadImage("app/assets/thunderbolt/2.png");
  thunder3 = loadImage("app/assets/thunderbolt/3.png");
  thunder4 = loadImage("app/assets/thunderbolt/4.png");

  batAnimation = loadAnimation(
    "app/assets/bat/bat1.png",
    "app/assets/bat/bat2.png",
    "app/assets/bat/bat3.png",
    "app/assets/bat/bat4.png",
    "app/assets/bat/bat5.png",
    "app/assets/bat/bat6.png",
    "app/assets/bat/bat7.png",
    "app/assets/bat/bat8.png",
    "app/assets/bat/bat9.png",
    "app/assets/bat/bat10.png",
    "app/assets/bat/bat11.png",
    "app/assets/bat/bat12.png"
  );

  boyAnimation = loadAnimation(
    "app/assets/boy/walking_1.png",
    "app/assets/boy/walking_2.png",
    "app/assets/boy/walking_3.png",
    "app/assets/boy/walking_4.png",
    "app/assets/boy/walking_5.png",
    "app/assets/boy/walking_6.png",
    "app/assets/boy/walking_7.png",
    "app/assets/boy/walking_8.png"
  );

  batManImage = loadImage("app/assets/boy/batman.png");
  boyImage = loadImage("app/assets/boy/walking_1.png");
}

function setup(params) {
  // Canvas
  const canvas = createCanvas(500, 700);

  // Matter.js
  engine = Engine.create();
  world = engine.world;

  // The Objects.
  umbrella = new Umbrella(225, 365, 30);
}

function draw(params) {
  background(0);
  Engine.update(engine);

  // Rain
  if (frameCount % 5 === 0) {
    newDrop();
  }
  for (let i = 0; i < drops.length; i++) {
    drops[i].display();
  }

  // Boy
  boy = createSprite(225, 520);
  // boy.addAnimation("boyWalking", boyAnimation);
  boy.addImage(boyImage);
  boy.scale = 0.5;

  if (frameCount >= 200) {
    boy.addImage(batManImage);
    boy.scale = 0.9;
  }

  // The Thunder
  let num = Math.round(random(1, 4));
  if (frameCount % 80 === 0) {
    thunder = createSprite(random(10, 370), random(10, 30), 10, 10);
    thunder.scale = random(0.3, 0.6);
    thunder.lifetime = 50;
    switch (num) {
      case 1:
        thunder.addImage(thunder1);
        break;
      case 2:
        thunder.addImage(thunder2);
        break;
      case 3:
        thunder.addImage(thunder3);
        break;
      case 4:
        thunder.addImage(thunder4);
        break;
      default:
        break;
    }
  }

  // The Bat
  bat = createSprite(Math.round(random(0, 400)), Math.round(random(0, 400)));
  bat.addAnimation("batFlying", batAnimation);
  bat.visible = false;
  if (frameCount % 100 === 0) {
    bat.velocityX = Math.round(random(-4, 4));
    bat.velocityY = Math.round(random(-4, 4));
    bat.scale = 0.4;
    bat.visible = true;
  }

  drawSprites();
}

function newDrop(params) {
  let drop = new Drop(250, 0, 10);
  drops.push(drop);
}
