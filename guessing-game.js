
    document.addEventListener("DOMContentLoaded", function(event) { 

            var randomNumber = Math.floor((Math.random()*100)+1);
            var submitButton = document.getElementById("button");
            var arrayOfNumbers = [];
            var advice = document.getElementById("advice");
            var guesses = document.getElementById("guesses");
            var reset = document.getElementById("reset");
            var guessCount = 0;

            function checkTheNumber() {

                var usersNumber = document.getElementById("inputValue").value;

                if (usersNumber > 100 || usersNumber < 1) {
                        alert("Please, choose a number in a range from 1 to 100.");
                } else {

                    if (usersNumber == randomNumber) {
                        advice.innerHTML = "You've guessed the number!";
                        advice.style.color = "green";
                        advice.style.fontWeight = "bold";
                        guessCount++;
                        arrayOfNumbers.push(usersNumber);
                        stopTheGame();
                    } else if (usersNumber < randomNumber) {
                        advice.innerHTML = "<b>Hint:</b> The number is too low.";
                        arrayOfNumbers.push(usersNumber);
                        guessCount++;
                    } else if (usersNumber > randomNumber) {
                        advice.innerHTML = "<b>Hint:</b> The number is too high.";
                        guessCount++;
                        arrayOfNumbers.push(usersNumber);
                    }  

                    guesses.innerHTML += usersNumber + ", ";
                }
                
                if (guessCount > 6) { 
                    if(usersNumber != randomNumber) {
                        stopTheGame();
                        alert("None of those numbers is the correct one. You have no more turns. Try a new game!");
                    }
                }
                
            };

            function stopTheGame(){
                submitButton.disabled = true;
            };

            function restart() {
                submitButton.disabled = false;
                guessCount = 0;
                arrayOfNumbers = [];
                advice.innerHTML = "";
                guesses.innerHTML = "";
                randomNumber = Math.floor((Math.random()*100)+1);
                document.getElementById("inputValue").value = "";

            };

            submitButton.addEventListener("click", checkTheNumber);
            reset.addEventListener("click", restart);
        });