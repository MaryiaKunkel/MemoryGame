const gameContainer = document.querySelector("#game");

// I created the button that starts and restarts the game
const newGameButton = document.querySelector('#newGameButton');
newGameButton.addEventListener('click', function(){
  gameContainer.innerHTML='';
  shuffledColors = shuffle(COLORS);
  createDivsForColors(shuffledColors);
  scoreNums=0;
  yourScore.innerHTML=scoreNums;
  bestScoreValue = localStorage.getItem('bestScore') || Infinity;
  bestScoreElement.innerHTML = bestScoreValue === Infinity ? "0" : bestScoreValue;

  // bestScoreElement.innerHTML = bestScoreValue;
});

let scoreNums=0;
const COLORS = [
  "https://media0.giphy.com/media/UvOcKPHrkKSLm/giphy.gif?cid=ecf05e47fl5ei84bzmbdina7equx3rcqz6ap1pbmo1lnhgks&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media0.giphy.com/media/nDSlfqf0gn5g4/giphy.gif?cid=ecf05e47fl5ei84bzmbdina7equx3rcqz6ap1pbmo1lnhgks&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media4.giphy.com/media/SKGo6OYe24EBG/giphy.gif?cid=ecf05e47fl5ei84bzmbdina7equx3rcqz6ap1pbmo1lnhgks&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media1.giphy.com/media/D7z8JfNANqahW/giphy.gif?cid=ecf05e47fl5ei84bzmbdina7equx3rcqz6ap1pbmo1lnhgks&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media1.giphy.com/media/10zsjaH4g0GgmY/giphy.gif?cid=ecf05e47fl5ei84bzmbdina7equx3rcqz6ap1pbmo1lnhgks&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media4.giphy.com/media/EmSCxtcjQCmXK/giphy.gif?cid=ecf05e47fl5ei84bzmbdina7equx3rcqz6ap1pbmo1lnhgks&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media1.giphy.com/media/aosOPhpJHrJq8/giphy.gif?cid=ecf05e47fl5ei84bzmbdina7equx3rcqz6ap1pbmo1lnhgks&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media1.giphy.com/media/26ufnwz3wDUli7GU0/giphy.gif?cid=ecf05e47fl5ei84bzmbdina7equx3rcqz6ap1pbmo1lnhgks&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media4.giphy.com/media/l0MYAs5E2oIDCq9So/giphy.gif?cid=ecf05e47fl5ei84bzmbdina7equx3rcqz6ap1pbmo1lnhgks&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media2.giphy.com/media/3oEjI4sFlp73fvEYgw/giphy.gif?cid=ecf05e47fl5ei84bzmbdina7equx3rcqz6ap1pbmo1lnhgks&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media0.giphy.com/media/UvOcKPHrkKSLm/giphy.gif?cid=ecf05e47fl5ei84bzmbdina7equx3rcqz6ap1pbmo1lnhgks&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media0.giphy.com/media/nDSlfqf0gn5g4/giphy.gif?cid=ecf05e47fl5ei84bzmbdina7equx3rcqz6ap1pbmo1lnhgks&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media4.giphy.com/media/SKGo6OYe24EBG/giphy.gif?cid=ecf05e47fl5ei84bzmbdina7equx3rcqz6ap1pbmo1lnhgks&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media1.giphy.com/media/D7z8JfNANqahW/giphy.gif?cid=ecf05e47fl5ei84bzmbdina7equx3rcqz6ap1pbmo1lnhgks&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media1.giphy.com/media/10zsjaH4g0GgmY/giphy.gif?cid=ecf05e47fl5ei84bzmbdina7equx3rcqz6ap1pbmo1lnhgks&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media4.giphy.com/media/EmSCxtcjQCmXK/giphy.gif?cid=ecf05e47fl5ei84bzmbdina7equx3rcqz6ap1pbmo1lnhgks&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media1.giphy.com/media/aosOPhpJHrJq8/giphy.gif?cid=ecf05e47fl5ei84bzmbdina7equx3rcqz6ap1pbmo1lnhgks&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media1.giphy.com/media/26ufnwz3wDUli7GU0/giphy.gif?cid=ecf05e47fl5ei84bzmbdina7equx3rcqz6ap1pbmo1lnhgks&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media4.giphy.com/media/l0MYAs5E2oIDCq9So/giphy.gif?cid=ecf05e47fl5ei84bzmbdina7equx3rcqz6ap1pbmo1lnhgks&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media2.giphy.com/media/3oEjI4sFlp73fvEYgw/giphy.gif?cid=ecf05e47fl5ei84bzmbdina7equx3rcqz6ap1pbmo1lnhgks&ep=v1_gifs_search&rid=giphy.gif&ct=g",
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more


function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card

function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    //newDiv.style.backgroundImage=`url(${color})`;
    // call a function handleCardClick when a div is clicked on

    newDiv.addEventListener("click", handleCardClick);


    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}



let arr=[];

// I set bestScoreValue to Infinity because I will compare it to a score number and if scoreNums is smaller, I will update bestScoreValue to scoreNums
let bestScoreValue = localStorage.getItem('bestScore') || Infinity;
let bestScoreElement=document.querySelector('#bestScore');
bestScoreElement.innerHTML = bestScoreValue === Infinity ? "0" : bestScoreValue;

// bestScoreElement.innerHTML = bestScoreValue;
 // Update initial bestScoreValue

// TODO: Implement this function!
function handleCardClick(event) {
  if (event.target.classList.contains('matched') || event.target.classList.contains('flipped')) {
    return;
  }
  // I see which card was clicked
  console.log("you just clicked", event.target.className);
  
  arr.push(event.target);
  if (arr.length>2){
    return;
  } else {
    arr.splice(2);
  }


  event.target.style.backgroundImage=`url(${event.target.className})`;
  event.target.classList.add('flipped');

  // Every time the card is clicked, I increase the scoreNums by one.
  scoreNums++;
  let yourScore=document.querySelector('#yourScore');
  yourScore.innerHTML = scoreNums;


  // I add a clicked card to the array
  // if there are 2 cards in the array, I give them names as firstCard and secondCard
  if (arr.length===2){
    let firstCard=arr[0];
    let secondCard=arr[1];
    // if the classes of the cards are the same, I give them another class 'matched'
  if (firstCard.classList.contains('matched') || secondCard.classList.contains('matched')){
    event.stopPropagation();
  } else if (firstCard.className===secondCard.className){
      console.log("Matched!");
      firstCard.classList.add('matched');
      secondCard.classList.add('matched');
      arr=[];

    // if the classes are not equal, which means the cards are different color, I flip them back in a second
    } else {
    //   setTimeout(function() {
    //     firstCard.style.transform = 'rotateY(180deg)';
    //     secondCard.style.transform = 'rotateY(180deg)';
    //     setTimeout(function() {
    //       firstCard.style.backgroundImage = '';
    //       secondCard.style.backgroundImage = '';
    //     }, 150);
    //     firstCard.classList.remove('flipped');
    //     secondCard.classList.remove('flipped');
    //     arr = [];
    //   }, 1000);
    // }
    setTimeout(function () {
      firstCard.classList.add('flip-back');
      secondCard.classList.add('flip-back');
  
      setTimeout(function () {
        firstCard.style.backgroundImage = '';
        secondCard.style.backgroundImage = '';
        firstCard.classList.remove('flipped', 'flip-back');
        secondCard.classList.remove('flipped', 'flip-back');
        arr = [];
      }, 300);
    }, 1000);
  }

    let allChildrenMatched=true;

  // I go through all the cards and check if all of them have the class 'matched', which means they are flipped and the game is over, I compare scoreNums with bestScoreValue (which is Infinity) and if scoreNums < bestScoreValue I update bestScoreValue to scoreNums and then set it to the code in HTML so it can be printed out on the screen
  for (let i = 0; i < gameContainer.children.length; i++) {
    const child = gameContainer.children[i];
    // Perform operations on the child element
    if (child.classList.contains('matched')) {
      continue;
    } else {
      allChildrenMatched = false;
      break;
    } 
  }
  if (allChildrenMatched){
    if (scoreNums < bestScoreValue){
      bestScoreValue = scoreNums;
      bestScoreElement.innerHTML = bestScoreValue;
      localStorage.setItem('bestScore', JSON.stringify(bestScoreValue));
    }
  }
  }
  bestScoreElement.innerHTML = bestScoreValue === Infinity ? "0" : bestScoreValue;

  // bestScoreElement.innerHTML = bestScoreValue;

}
bestScoreElement.innerHTML = bestScoreValue === Infinity ? "0" : bestScoreValue;

// bestScoreElement.innerHTML = bestScoreValue;
createDivsForColors(shuffledColors);
