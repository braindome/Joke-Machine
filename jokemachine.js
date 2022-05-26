// Skämtmaskinen
// I denna övning ska du bygga en mindre webbApp där du via en knapp slumpar 
// fram ett skämt och skriver ut det på skärmen.
// Du kommer behöva använda events, skapa HTML, arrayer, strings och Math.random();

// Förslag på skämt hittar du här:
// https://icanhazdadjoke.com/

// Din webbapp ska vara stiligt CSS:ad.


// dadJoke index 0 - 19
const dadJoke = [
    "What do computers and air conditioners have in common? They both become useless when you open windows.",
    "Why can't your nose be 12 inches long? Because then it'd be a foot!",
    "I am terrified of elevators. I’m going to start taking steps to avoid them.",
    "What do you call a dad that has fallen through the ice? A Popsicle.",
    "I'd like to start a diet, but I've got too much on my plate right now.",
    "What do you call a careful wolf? Aware wolf.",
    "What's red and bad for your teeth? A Brick.",
    "A man was caught stealing in a supermarket today while balanced on the shoulders of a couple of vampires. He was charged with shoplifting on two counts.",
    "What do computers and air conditioners have in common? They both become useless when you open windows.",
    "What is bread's favorite number? Leaven.",
    "What did the Buffalo say to his little boy when he dropped him off at school? Bison.",
    "How come a man driving a train got struck by lightning? He was a good conductor.",
    "The rotation of earth really makes my day.",
    "Some people say that I never got over my obsession with Phil Collins. But take a look at me now.",
    "Why do mathematicians hate the U.S.? Because it's indivisible.",
    "Cosmetic surgery used to be such a taboo subject. Now you can talk about Botox and nobody raises an eyebrow.",
    "Why did the octopus beat the shark in a fight? Because it was well armed.",
    "Where do cats write notes? Scratch Paper!",
    "What did the calculator say to the student? You can count on me.",
    "I'm practicing for a bug-eating contest and I've got butterflies in my stomach."
]

// gbgJoke index 0 - 19
const gbgJoke = [
    "Vad säger en Göteborgare till ett Star Wars fan? – JeeDaaaj.",
    "Vad sa den ena kannibalen till den andra? – E du go eller?",
    "Varför är det ingen snö på gatorna i Glasgow på vintern? – De e la klart. 600 000 skottar.",
    "Gick det bra med rymdresan? – Nej, den blev uppskjuten.",
    "Hur vet man att en dykarkurs är inställd? - Instruktören dyker inte upp!",
    "Hur tröstar man en vegan? – Soja, soja!",
    "Hur många bor det i Stockholm?– En dryg miljon!",
    "Vilket djur är jordens största? – Eeeen-orm!",
    "En göteborgare frågade Jesus, vad gör du i påsk? – Vet inte, jag har inget spikat.",
    "Hur många göteborgare bor det i Kanada? – Åttava?",
    "Hur tar man med sig en hund genom tullen? – Tax-Free såklart!",
    "Vilken är världens mest musikaliska fågel? – Truten, för det är en måsart.",
    "Vilket land har det billigaste köttet? – Ko-rea.",
    "Vad händer i Göteborg när lakritsen tar slut? – De blir la kris?",
    "Vad gör en arbetslös skådespelare? – Spelar väl ingen roll?",
    "Vart köper man sin handprotes? -Second Hand",
    "Göteborgare: Jag friade till min flickvän på ett ishotell. Hon blev fru sen.",
    "– Bokmässan är ju helt fantastisk! – Ja, otroligt mångsidig.",
    "– Hur ser man att en bil kommer från Spanien? – Växellådan är Manuel.",
    "– Var är Kalle? – Förr var han närvarande men är för nävarande frånvarande."
]



// OBS om man deklarerar randomDad utanför funktionen kommer inte knappen att get ytterligare skämt.

function randomDadJoke() {
    let randomDad = dadJoke[Math.floor(Math.random() * dadJoke.length)];
    document.getElementById('joke1').innerHTML = randomDad;

}
document.getElementById('dadJokeBtn').addEventListener('click', randomDadJoke);

function randomGbgJoke() {
    let randomGbg = gbgJoke[Math.floor(Math.random() * gbgJoke.length)];
    document.getElementById('joke2').innerHTML = randomGbg;
}
document.getElementById('gbgJokeBtn').addEventListener('click', randomGbgJoke);
