
let humanScore = 0, computerScore= 0, round = 0;

function getComputerChoice(){
    let num=Math.random()*3;
    if (num < 1 ){
        return "rock";
    }
    else if(num < 2){
        return "paper";
    }
    else{
        return "scissors";
    }
    
}





function getHumanChoice(choice){
    playRound(choice,getComputerChoice());
}






function playRound(userChoice,computerChose){
    const resultDiv = document.getElementById("output");
    let roundOutcomeHTML = "";
    round +=1;
    roundOutcomeHTML+=`Round${round}: You chose ${userChoice}, and the computer chose ${computerChose}.`;    
    if (userChoice === computerChose){
           
        roundOutcomeHTML+= ` It is a tie!`;
        }
        else if((userChoice == "rock" && computerChose =="scissors")||
                (userChoice =="scissors" && computerChose == "paper")||
                (userChoice == "paper" && computerChose == "rock"))
            {
                humanScore +=1;
                roundOutcomeHTML += ` You win!`;
            }
        else{
            computerScore +=1;
            roundOutcomeHTML += ` The computer win!`;
        }
    roundOutcomeHTML += `<p>Your score is ${humanScore} and the computer\'s score is ${computerScore}.</p><br>` ;
    resultDiv.innerHTML += roundOutcomeHTML;
    if (humanScore ==5){
        alert("You win the game");
        humanScore = 0;
        computerScore = 0;
        resultDiv.innerHTML = "";
        round =0;
    }
    else if(computerScore ==5){
        alert("Computer win the game");
        humanScore = 0;
        computerScore = 0;
        resultDiv.innerHTML = "";
        round =0;
    }


}







