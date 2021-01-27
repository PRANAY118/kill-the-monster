class Block{
    constructor(x,y,width,hieght){
        var options={
            restritution:0.4,
            friction:1.0
        }
       this.body= Bodies.rectangle(x,y,width,hieght,options);
       this.width=width;
       this.hieght=hieght;
       World.add(world,this.body);

       
    }
    display(){
        var angle=this.body.angle;
        var pos=this.body.position;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.hieght);
        pop();

    }

   
}