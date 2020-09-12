var balX1 = 50;
var balX2 = 100;
var balX3 = 150;
var balX4 = 200;
var balX5 = 250;
var balY = 50;
var speedX = 5;
var speedY = 3;
/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {

      background('blue');
  // stel vulkleur in
  fill(255, 100, 255);

  // teken een cirkel
  ellipse(balX1,balY,80,80);
  ellipse(balX2,balY,80,80);
  ellipse(balX3,balY,80,80);
  ellipse(balX4,balY,80,80);
  ellipse(balX5,balY,80,80);
  
    balX1 = balX1 + speedX;
    balX2 = balX1 + speedX;
    balX3 = balX1 + speedX;
    balX4 = balX1 + speedX;
    balX5 = balX1 + speedX;
    balY = balY + speedY;

    if (balX1 >= 1280) {
        speedX = speedX * -1

    if (balY >= 720) {
        speedY = speedY * -1
    }
    }
}