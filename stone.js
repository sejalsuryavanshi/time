class Stone{

    constructor(x,y,width,height){

     var option= {
        'restitution':0.3,
        'friction':1.0,
        'density':1.0
     }

    this.body=Bodies.rectangle(x,y,width,height);
    this.width=width;
    this.height=height;
    World .add(world,this.body)
    }
display(){

    var pos = this.body.position;
    rectMode(CORNER)
   
    push();
    translate (pos.x,pos.y);
   
    strokeWeight(4);
    stroke("grey");
    fill ("black");
    rect(0,0,this.width,this.height);
    pop();
}   
}