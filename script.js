var balX = 50;
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


    balX = balX + speedX;
    balY = balY + speedY;

    if (balX >= 1280 && balX >= 0) {
        speedX = speedX * -1

    if (balY >= 720 && balY >= 0) {
        speedY = speedY * -1
    }
    }
}