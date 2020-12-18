class Box extends Parent {
    constructor(x, y, width, height) {
    super(x,y,width,height);
    this.Visiblity = 255;
    }
    display()
    {
      if (this.body.speed<2) {
        super.display();
      } else {
        World.remove(world,this.body)
        push()
        this.Visiblity = this.Visiblity-5
        pop();
      }
    }
    score()
    {
      if (this.Visiblity<250 && this.Visiblity>-855) {
        score++
      }
    }
  };