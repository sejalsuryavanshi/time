class Rubber{

    constructor(x,y,width,height){

        var option= {
            restitution:0.3,
            friction:5,
            density:1
         }

    this.body=Bodies.rectangle(x,y,width,height);
    this.width=width;
    this.height=height;
    World .add(world,this.body)
    }
display(){

    var pos = this.body.position;
    push();
    translate (pos.x,pos.y);
    strokeWeight(4);
    stroke("black");
    fill ("blue");
    rect(0,0,this.width,this.height);
    pop();
}   
}