class Hammer{

    constructor(x,y,width,height){

        var option= {
            'restitution':2,
            'friction':1.0,
            'density':0.5
         }

    this.body=Bodies.rectangle(x,y,width,height);
    this.width=width;
    this.height=height;
    World .add(world,this.body)
    }
display(){

    var pos = this.body.position;
    
    this.body.position.x=mouseX;
    this.body.position.y=mouseY;
    push();
    translate (pos.x,pos.y);
    
    strokeWeight(4);
    stroke("orange");
    fill ("yellow");
    rect(0,0,this.width,this.height);
    pop();
}   
}