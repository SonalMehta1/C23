class Box{
    //to assign the properties to an object
    //constructor gets called when an object is created
    constructor(x,y,width,height){
        var options ={
           restitution:0.4,
           friction:1.0,
           density:1.0
        }
        //this refers to the object which is calling the constructor
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
    }

    display(){
        var pos=this.body.position
        var angle=this.body.angle;
        angleMode(RADIANS);
        push()  //to capture a new setting
        translate(pos.x,pos.y)  //it is used to transfer the origin
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop()   //to revert the old setting back

    }
}