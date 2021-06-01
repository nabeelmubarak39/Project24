class Stone {
    constructor(x,y) {
     
      var options = {
         'restitution': 0.8,
         'friction':0.9,
         'density':12

      }

     }

    display() {
        var pos =this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(pos.x, pos.y, this.width, this.height);

    }
  }




