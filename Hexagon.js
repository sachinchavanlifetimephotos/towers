class Hexagon{ 
    constructor(x,y,width,height,angle){ 
        var ground_options ={
            restitution:1, 
            friction:1 
        }
    
      
        this.width=width; 
        this.height=height; 
        this.image=loadImage("polygon.png"); 
        World.add(world,this.body); 
    } 
    display(){ 
        var pos=this.body.position; 
        var angles=this.body.angle; 
        push ();
        translate (pos.x,pos.y); 
        rotate (angles); 
        imageMode(CENTER); 
        image (this.image,0,0,this.width,this.height); 
        pop (); 
    }
}