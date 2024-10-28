let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#userscore");
const compScorepara = document.querySelector("#compscore");

const genComputerChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
   return options[randIdx]; 
    //rock,paper,scissor
};
//we use Math.random to generate random no
//we use Math.floor(Math.random)) to remove decimal

const drawGame = () => {
    
    msg.innerText = "Game was draw,Play again!";
    msg.style.backgroundColor = "#081b31";
};


const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice};`;
        msg.style.backgroundColor = "green";
    } 
    else{
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `you lost!. ${compChoice} beats your ${userChoice};`;
        msg.style.backgroundColor = "red";
    }
};



const playGame = (userChoice) => {
   console.log("user choice = ",userChoice);
   //Generate computer choice -->this is what we call modular way of programing means one funs at a time
const compChoice = genComputerChoice();
console.log("comp choice = ", compChoice);
if (userChoice === compChoice){
    //draw game
    drawGame(); 
 } else{
    let userWin = true ;
    if(userChoice === "rock"){
        //scissor,paper
        userWin = compChoice === "paper" ? false : true;
    } else if(userChoice === "papper"){
        userWin = compChoice === "scissors" ? false : true;
    }else{
        //rock.paper
        compChoice === "rock" ? false : true; 

    }
    showWinner(userWin,userChoice,compChoice);
 }
};
  
choices.forEach((choice) => {
    
    choice.addEventListener("click" , () => { 
        const userChoice = choice.getAttribute("id");
        
    
     playGame(userChoice);
    });
}); 