
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
           
        roundOutcomeHTML+= `<p>It is a tie!</p>`;
        }
        else if((userChoice == "rock" && computerChose =="scissors")||
                (userChoice =="scissors" && computerChose == "paper")||
                (userChoice == "paper" && computerChose == "rock"))
            {
                humanScore +=1;
                roundOutcomeHTML += `<p>You win!</p>`;
            }
        else{
            computerScore +=1;
            roundOutcomeHTML += `<p>The computer win!</p>`;
        }
    roundOutcomeHTML += `<p>Your score is ${humanScore} and the computer\'s score is ${computerScore}.</p><br>` ;
    resultDiv.innerHTML += roundOutcomeHTML;
}







