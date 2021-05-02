class Paper{
    constructor(){
    var options = {
        isStatic : false,
        restitution : 0.3,
        friction : 0,
        density : .12
    }
    this.body = bodies.rectangle(x, y, 60, 60, options);
    this.width = 60;
    this.height = 60;
    this.image = loadImage("sprites/paper.png");
    World.add(World, this.body);   
}  
display(){
    var pos = this.body.position;
    pos.x = mouseX;
    pos.y = mouseY;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill("white");
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
}
}