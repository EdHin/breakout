class SpelElement {
    constructor (x,y) {
    this.x = x;
    this.y = y;
    }
}
class Blok extends SpelElement{
    constructor (x,y,w,h) {
        super(x,y);
        this.w = w;
        this.h = h;
    }

    show() {
        noStroke();
        fill (255,255,0);
        rect(this.x, this.y, this.w, this.h);
    }
}

var blok1 = new Blok (50,50,50,50);
var blok2 = new Blok (110,50,50,50);


class Bal extends SpelElement{
   constructor(x, y, speedX, speedY) {
      super(x,y);
      this.speedX = speedX;
      this.speedY = speedY;
      this.diameter = 80;
   }

   show() {
       noStroke();
       fill (255,255,0);
       ellipse(this.x, this.y, this.diameter, this.diameter);
   }

   // update positie
   update() {
        this.x = this.x + this.speedX;
        this.y = this.y + this.speedY;

        if (this.x <= 0 || this.x >= 1280 ) {
            this.speedX = this.speedX * -1
        }

        if (this.y <= 0 || this.y >= 720) {
            this.speedY = this.speedY * -1;
        }
   }
}

var bal = new Bal(100, 100, 5, 2);
/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);
}

/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // Kleur de achtergrond blauw, zodat je het kunt zien      
  background('blue');
  
  // stel vulkleur inß
  fill(255, 100, 255);

   // teken een cirkel
  bal.show();
  bal.update();

  // teken een balk
  blok1.show();
  blok2.show();
}