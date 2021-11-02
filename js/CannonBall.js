class CannonBall {
constructor(x, y, r){
  var option = {isStattic: true}
  this.r = r
  this.body = Bodies.circle(x, y, this.r, option)
  this.image = loadImage("assets/cannonball.png")
  this.path = []
  World.add(world, this.body)
}

shoot() {
var newAngle = cannon.angle - 20
newAngle = newAngle * (3.14/180)
var velocity = p5.Vector.fromAngle(newAngle)
velocity.mult(0.5)
Matter.Body.setStattic(this.body, false)
Matter.Body.setVelocity(this.body, {x:velocity.x * (180/3.14), y:velocity.y * (180/3.14)})
}

display() {

push()
image(this.image, this.body.position.x, this.body.position.y, this.r, this.r)
pop()
if(this.body.velocity.x > 0 && this.body.position.x > 15) {
var position = [this.body.position.x, this.body.position.y]
this.path.push(position)
}

for(var i = 0; i < this.path.length; i++) {
image(this.image, this.path[i][0], this.path[i][1], 5, 5)

}

}
}