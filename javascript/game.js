 // variables to keep win/loss and guesses left
 var win = 0;
 var lose = 0;
 var attemptsLeft = 10;
 var userGuess = [];

 // setting variables for alphabet array for computer choice
 var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
   "u", "v", "w", "x", "y", "z"];
 //console.log(alphabet)

 //function needed to select a new letter, clear attempted guesses, and remaining guess counter.
 function newRound() {
   computerInput = alphabet[Math.floor(Math.random() * alphabet.length)];
   userGuess = [];
   attemptsLeft = 10;
 }

 newRound();
 document.onkeyup = function (event) {
   //user input
   var userInput = event.key.toLowerCase();
   console.log(userInput);
  
   // player input match computer input
   if (attemptsLeft > 0) {
     userGuess.push(userInput); /* THIS WILL PUSH YOUR INPUT INTO THE LIST OF GUESSES YOU MADE SO FAR */
     // if user input matches computer then win +1 and new round 
     if (userInput === computerInput) {
       win++;
       alert("Congrats! You guessed \"" + computerInput + "\"."); /* To notify user they won and which letter it was */
       newRound();
     } else {
       attemptsLeft--  ; /* if wrong, attempts -1 and if attempt is 0, round over/reset. */

       if (attemptsLeft === 0) {
         lose++;
         alert("Nice try. But the answer was the letter \"" + computerInput + "\"."); /* Gives user answer */
         newRound();
       }
     }
     //
     document.getElementById("win").textContent = "Wins:" + win;
     document.getElementById("lose").textContent = "Losses: " + lose;
     document.getElementById("attempts").textContent = "Attempts left: " + attemptsLeft;
     document.getElementById("userGuess").textContent = "Your guesses: " + userGuess.join(" | ");
   }
 }
//See if I can add something to alert users if they pick a button not in array ie tab or 9.
