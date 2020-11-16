class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':1,
          'friction':0.3,
          'density': 5,
          'isStatic' : true 
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
  
      var angle = this.body.angle;
  
      var pos =this.body.position;
      rectMode(CENTER);
  
      push();
  
      translate(pos.x, pos.y);
  
      rotate(angle);
  
      fill(255);
      rect(pos.x,pos.y, this.width, this.height);
  
     pop();
      
    }
  }
  