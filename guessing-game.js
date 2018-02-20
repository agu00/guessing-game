
    document.addEventListener("DOMContentLoaded", function(event) { 
           var randomNumber = Math.floor((Math.random()*100)+1);
            var submitButton = document.getElementById("button");
            var arrayOfNumbers = [];
            var text = document.getElementById("text");
            var num = document.getElementById("numbers");
            var reset = document.getElementById("reset");
            var guessCount = 0;

            function checkTheNumber() {

                var usersNumber = document.getElementById("userN").value;

                if (usersNumber > 100 || usersNumber < 1) {
                        alert("Please, choose a number in a range from 1 to 100.");
                } else {

                    if (usersNumber == randomNumber) {
                        text.innerHTML = "You've guessed the number!";
                        text.style.color = "green";
                        text.style.fontWeight = "bold";
                        guessCount++;
                        arrayOfNumbers.push(usersNumber);
                        stopTheGame();
                    } else if (usersNumber < randomNumber) {
                        text.innerHTML = "<b>Hint:</b> The number is too low.";
                        arrayOfNumbers.push(usersNumber);
                        guessCount++;
                    } else if (usersNumber > randomNumber) {
                        text.innerHTML = "<b>Hint:</b> The number is too high.";
                        guessCount++;
                        arrayOfNumbers.push(usersNumber);
                    }  

                    num.innerHTML += usersNumber + ", ";
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
                text.innerHTML = "";
                num.innerHTML = "";
                randomNumber = Math.floor((Math.random()*100)+1);
                document.getElementById("userN").value = "";

            };

            submitButton.addEventListener("click", checkTheNumber);
            reset.addEventListener("click", restart);
        });