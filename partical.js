
const screenWidth = 900
const screenHeight = 900
let drop
let numberOfDrops = 900
let drops = []
let colour = '#8FF'


function setup() {
  drop = new RainDrop()
  createCanvas(screenWidth, screenHeight);
  for(let i=0; i<numberOfDrops; i++){
    drops.push(new RainDrop())
  }
}

function draw() {
  background(0);
  for(let i =0; i < drops.length;i++){
    drops[i].renderRainDrop()
  }
  
  
}
//creates intances of rain
class RainDrop{
  constructor(){
    this.x = random(0, screenWidth)
    this.y = random(0, screenHeight)
    this.speed = random(12,4)
    this.width = random(1, 3)
    this.height = random(3, 6)
  }
  //sets spawn
  renderRainDrop(){
    this.drop()
    stroke(colour)
    rect(this.x, this.y, this.width, this.height)
  }
  //sets animation
  drop(){
    this.y += this.speed
    
    if(this.y > screenHeight){
        this.y = 0
    }
    
  }
}
