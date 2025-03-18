//word data 
const words = [
    "apple", "bread", "chair", "dance", "eagle", "fancy", "grape", "happy", "inbox", "jolly",
    "kitty", "lunch", "mango", "night", "ocean", "piano", "quiet", "rider", "smile", "table",
    "under", "vivid", "wheat", "xenon", "yield", "zebra", "brick", "cloud", "daisy", "earth",
    "flute", "glass", "hotel", "index", "jumbo", "kneel", "laser", "medal", "novel", "opera",
    "party", "quilt", "roast", "sugar", "tiger", "uncle", "veldt", "whale", "xylem", "yacht",
    "zesty", "adapt", "blend", "charm", "drama", "eager", "flood", "globe", "hover", "ideal",
    "jelly", "kudos", "lapse", "meant", "noble", "orbit", "pearl", "query", "ranch", "spine",
    "tasty", "upset", "vigor", "wrist", "xerox", "yummy", "zonal", "amber", "bloom", "cider",
    "delta", "ethic", "fraud", "grove", "hinge", "image", "jolly", "knack", "lemon", "mirth",
    "nexus", "optic", "pouch", "quack", "rival", "swoop", "thorn", "umbra", "vixen", "witty",
    "xenon", "youth", "zebra", "alloy", "brave", "cheer", "dough", "elate", "fable", "glide",
    "hefty", "irony", "jumps", "karma", "lunar", "motto", "nudge", "ounce", "plaza", "quill",
    "rebel", "shard", "torch", "upset", "vague", "wedge", "xenon", "yacht", "zesty", "aroma",
    "brace", "crisp", "draft", "eagle", "flint", "grasp", "hatch", "infer", "jumps", "kayak",
    "latch", "mirth", "noble", "optic", "pouch", "quilt", "relic", "swoop", "trace", "ultra",
    "vowel", "weave", "xerox", "yield", "zebra", "azure", "bloom", "candy", "dealt", "elite",
    "froze", "grain", "honor", "index", "jolly", "kebab", "latch", "motto", "nexus", "ocean",
    "plaza", "quark", "rider", "sugar", "twist", "unite", "vivid", "wafer", "xenon", "youth",
    "zesty", "angel", "blush", "cabin", "dough", "exact", "flame", "grasp", "hotel", "input",
    "joint", "kneel", "lemon", "mirth", "nudge", "ounce", "pouch", "quest", "royal", "swift",
    "table", "uncle", "vapor", "whale", "xerox", "young", "zebra", "arbor", "binge", "cigar",
    "dream", "ember", "feast", "glory", "haste", "icily", "jolly", "kayak", "leapt", "mirth",
    "nexus", "optic", "pearl", "quark", "rival", "shard", "trace", "unite", "vowel", "waste",
    "xenon", "yield", "zebra", "basil", "chill", "dizzy", "eject", "flair", "grace", "humid",
    "ideal", "jolly", "kneel", "latch", "motto", "nexus", "optic", "pouch", "quark", "rider",
    "sugar", "twist", "unite", "vivid", "wafer", "xenon", "youth", "zesty", "apple", "broom",
    "crisp", "drape", "eager", "froze", "grain", "honor", "index", "jolly", "kebab", "leapt",
    "mirth", "noble", "optic", "pouch", "quest", "royal", "swift", "table", "uncle", "vapor",
    "whale", "xerox", "young", "zebra", "arbor", "binge", "cigar", "dream", "ember", "feast",
    "glory", "haste", "icily", "jolly", "kayak", "leapt", "mirth", "nexus", "optic", "pearl",
    "quark", "rival", "shard", "trace", "unite", "vowel", "waste", "xenon", "yield", "zebra",
    "basil", "chill", "dizzy", "eject", "flair", "grace", "humid", "ideal", "jolly", "kneel",
    "latch", "motto", "nexus", "optic", "pouch", "quark", "rider", "sugar", "twist", "unite",
    "vivid", "wafer", "xenon", "youth", "zesty", "apple", "broom", "crisp", "drape", "eager",
    "froze", "grain", "honor", "index", "jolly", "kebab", "leapt", "mirth", "noble", "optic",
    "pouch", "quest", "royal", "swift", "table", "uncle", "vapor", "whale", "xerox", "young",
    "zebra", "arbor", "binge", "cigar", "dream", "ember", "feast", "glory", "haste", "icily",
    "jolly", "kayak", "leapt", "mirth", "nexus", "optic", "pearl", "quark", "rival", "shard",
    "trace", "unite", "vowel", "waste", "xenon", "yield", "zebra", "basil", "chill", "dizzy",
    "eject", "flair", "grace", "humid", "ideal", "jolly", "kneel", "latch", "motto", "nexus",
    "optic", "pouch", "quark", "rider", "sugar", "twist", "unite", "vivid", "wafer", "xenon",
    "youth", "zesty", "apple", "broom", "crisp", "drape", "eager", "froze", "grain", "honor",
    "index", "jolly", "kebab", "leapt", "mirth", "noble", "optic", "pouch", "quest", "royal",
    "swift", "table", "uncle", "vapor", "whale", "xerox", "young", "zebra", "arbor", "binge"
  ];

const random = Math.floor(Math.random() * 400);
const pickWord = words[random];
console.log(pickWord);
const inputBox = document.getElementById('inputWord');
const guess = document.getElementById('guess');
const dialog = document.querySelector('dialog');
const dialogMsg = document.getElementById('dialogMsg');
const closeBtn = document.getElementById('closeBtn');
const allCells = Array.from(document.querySelectorAll('.cell'));
const reloadMsg = document.querySelector('.reloadMsg');
let guessCount = 0;

guess.addEventListener("click",()=>{
    const inputWord = inputBox.value;
    console.log(inputWord);
    if(inputWord.length !== 5){
        alert("Enter 5 length word");
        return;
    };
    let currIndex = guessCount * 5;
    let count = 0;
    for(let i = currIndex; i<currIndex+5; i++){
        allCells[i].textContent = inputWord[count];
        if (
          inputWord[count] === pickWord[count]
        ) {
          allCells[i].classList.add("correct");
          allCells[i].textContent = inputWord[count];
        } else if (pickWord.includes(inputWord[count])) {
          allCells[i].classList.add("exist");
          allCells[i].textContent = inputWord[count];
        } else {
          allCells[i].classList.add("miss");
          allCells[i].textContent = inputWord[count];
        }
        count++;
    }
    if(pickWord === inputWord){
        dialog.show();
        guess.style.display = "none";
        inputBox.style.display = "none";
        reloadMsg.style.display = "block";
    }
    if(guessCount == 5){
      dialogMsg.textContent = "You Lose!";
      dialog.show();
      guess.style.display = "none";
      inputBox.style.display = "none";
      reloadMsg.style.display = "block";
    }
    inputBox.value = '';
    guessCount++;
});

closeBtn.addEventListener("click",()=>{
    dialog.close();
})