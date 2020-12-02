class blocks{
  constructor(x, y, width, height) {
      var options = {
         
          restitution :0.4,
          friction :0.4,
          //isStatic:true
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<3){var angle = this.body.angle;
        var angle = this.body.angle;
      var pos = this.body.position;
      push();
      strokeWeight(0);
      fill(121, 245, 151);
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      pop();
} else{
  World.remove(world, this.body);
  push();
  this.Visiblity = this.Visiblity - 5;
  //tint(255,this.Visiblity);
  //rect(this.body.position.x, this.body.position.y, 40, 40);
  pop();
  }
}
score(){
if(this.Visiblity<0&&this.Visiblity>-105){
  score++
}
}
}
